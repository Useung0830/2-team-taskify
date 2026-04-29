"use client";
import { useEffect, useRef, useState } from "react";

import { getDashboardList, getMyInvitationList, postLogin } from "@/api/data";
import { Input } from "@/components/input/input";
import * as T from "@/types/api";

import { Emptydashboard } from "./_components/Emptydashboard";
import { InvitionContainer } from "./_components/InvitionContainer";
import { MydashContainer } from "./_components/MydashContainer";

export interface DashboardList {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}
export const SIZE = 9;

export default function MyDashboard() {
  const [invitaionList, setInvitationList] = useState<T.Invitation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [dashboardList, setDashboardList] = useState<DashboardList[]>([]);
  const targetdiv = useRef(null);

  const [total, setTotal] = useState<number>(0);
  //loadPage는 api 함수에 전달할 page를 관리하는 상태, currentPage는 유저가 보고 있는 페이지
  const [loadPage, setLoadPage] = useState<number>(1);
  // const [currentPage, setCurrentPage] = useState<number>(1);

  //1. 마운트 되면 임시 로그인
  useEffect(() => {
    const setUp = async () => {
      //임시 로그인
      await postLogin({ email: "email@mail.com", password: "12341234" });
    };
    setUp();
  }, []);

  //데이터를 불러오는 함수
  const onNeedsMoreData = async () => {
    const fetchdata = await getDashboardList({
      navigationMethod: "pagination",
      page: loadPage,
      size: SIZE,
    });

    setDashboardList((prev) => [...prev, ...fetchdata.dashboards]);
    setTotal(fetchdata.totalCount);
    setLoadPage((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchInitialDash = async () => {
      const fetchdata = await getDashboardList({
        navigationMethod: "pagination",
        page: 1,
        size: SIZE,
      });

      setDashboardList(fetchdata.dashboards);
      setTotal(fetchdata.totalCount);
      setLoadPage(2);
    };

    fetchInitialDash();
  }, []);

  //버튼을 눌렀을 때 currentPage가 불러온 데이터 중 어디에 위치해있는지를 파악하는 함수

  //====================================================================

  //데이터 가져올 함수 정의
  const fetchInvitionList = async () => {
    if (isLoading || !hasMore) {
      return;
    }
    setIsLoading(true);

    try {
      const lastInvitationId = invitaionList[invitaionList.length - 1]?.id;
      const { invitations } = await getMyInvitationList({
        size: 2,
        cursorId: lastInvitationId,
      });

      if (invitations.length === 0) {
        setHasMore(false);
      } else {
        setInvitationList((prev) => [...prev, ...invitations]);
      }
    } catch {
      console.error("에러발생");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    //관찰하는 요소에 변화가 생기면 실행할 콜백함수
    const onIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          //데이터 불러오기
          fetchInvitionList();
        }
      });
    };

    //옵션 설정
    const options = {
      threshold: 0.5,
    };
    //생성자 함수로 관찰자 초기화
    const observer = new IntersectionObserver(onIntersection, options);

    if (targetdiv.current) {
      observer.observe(targetdiv.current);
    }

    return () => observer.disconnect();
  }, [isLoading, hasMore]);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (error) setError("");
  };

  const handleFieldBlur = () => {
    if (value.length < 3) {
      setError("검색 글자 수는 3글자 이상이어야 합니다.");
    }
  };

  return (
    <div className="font-pretendard flex flex-col gap-2.5 px-5 text-gray-100">
      <h1 className="pt-3.5 text-4xl font-bold">홈</h1>
      <div className="gap-3">
        <h2 className="py-1 text-lg font-bold md:text-[18px] lg:text-xl">
          내 대시보드
        </h2>
        {dashboardList.length !== 0 ? (
          <MydashContainer
            data={dashboardList}
            total={total}
            loadPage={loadPage}
            handleNeedsMoreData={onNeedsMoreData}
          />
        ) : (
          <Emptydashboard dashtype="my" />
        )}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <h2 className="flex flex-col py-1 text-lg font-bold md:text-[18px] lg:text-xl">
            초대받은 대시보드
          </h2>
          <div>
            {invitaionList.length !== 0 && (
              <Input>
                <Input.Wrapper>
                  <Input.SearchIcon />
                  <Input.Field
                    id="test"
                    placeholder="검색"
                    value={value}
                    onChange={handleFieldChange}
                    onBlur={handleFieldBlur}
                  />
                </Input.Wrapper>
                <Input.Error />
              </Input>
            )}
          </div>
        </div>
        {invitaionList.length !== 0 ? (
          <div>
            <InvitionContainer invitedData={invitaionList} />
          </div>
        ) : (
          <Emptydashboard dashtype="invite" />
        )}
      </div>
      <div ref={targetdiv}></div>
    </div>
  );
}
