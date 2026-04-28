import { InvitionHeader } from "./InvitionHeader";
import { InvitionRow } from "./InvitionRow";

export interface UserInfo {
  id: number;
  nickname: string;
  email: string;
}

export interface DashboardInfo {
  id: number;
  title: string;
}

export interface InvitedData {
  id: number;
  inviter: UserInfo;
  teamId: string;
  dashboard: DashboardInfo;
  invitee: UserInfo;
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}
interface InvitionContainerProps {
  invitedData: InvitedData[];
}
export function InvitionContainer({ invitedData }: InvitionContainerProps) {
  // const targetdiv = useRef(null);

  // useEffect(() => {
  //   //관찰하는 요소에 변화가 생기면 실행할 콜백함수
  //   const onIntersection = (entries, observer) => {
  //     entries.forEach(async (entry) => {
  //       if (entry.isIntersecting) {
  //         console.log("무한 스크롤 실행");
  //         //
  //       }
  //     });
  //   };

  //   //옵션 설정
  //   const options = {
  //     root: null,
  //     rootMargin: "0px 0px 0px 0px",
  //     threshold: 0.1,
  //   };
  //   //생성자 함수로 관찰자 초기화
  //   const observer = new IntersectionObserver(onIntersection, options);
  //   if (targetdiv.current) {
  //     observer.observe(targetdiv.current);
  //   }
  // }, []);
  //먼저 데이터를 잘라서 보여준 다음

  return (
    <div>
      <div className="hidden md:block">
        <InvitionHeader />
      </div>
      {/* {Array.from({ length: 10 }).map((_, i) => (
        <InventionRow key={i} title={dashbard.title} />
      ))} */}
      {invitedData.map((item) => (
        <InvitionRow
          key={item.id}
          title={item.dashboard.title}
          inviter={item.inviter}
        />
      ))}
    </div>
  );
}
