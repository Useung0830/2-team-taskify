"use client";

import Image from "next/image";
import imgSection1 from "@/assets/landing/img-section1.svg";
import imgSection2 from "@/assets/landing/img-section2.svg";
import imgSection3 from "@/assets/landing/img-section3.svg";
import imgSection4_1 from "@/assets/landing/img-section4-dashboard.svg";
import imgSection4_2 from "@/assets/landing/img-section4-invite.svg";
import imgSection4_3 from "@/assets/landing/img-section4-member.svg";

export function LandingContent() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden font-[family-name:var(--font-pretendard)] text-white">
      {/* Hero Section */}
      <section className="relative mx-auto flex w-full max-w-[1920px] flex-col items-center overflow-hidden md:flex-row md:items-center lg:h-[940px]">
        {/* 왼쪽: 텍스트 및 버튼 영역 (이미지 기준 가운데 정렬을 위해 md:mt-[51px] 추가) */}
        <div className="z-10 flex w-full flex-col justify-center px-6 py-16 md:mt-[51px] md:w-auto md:px-12 md:py-0 lg:mt-0 lg:h-full lg:pl-[240px]">
          <div className="text-center md:text-left">
            <div className="space-y-2 md:space-y-4">
              <p className="text-[32px] leading-tight font-bold md:text-5xl lg:text-[60px]">
                더 새로워진 일정 관리
              </p>
              <h1 className="text-brand-500 text-[48px] font-extrabold tracking-tight md:text-6xl lg:text-[90px]">
                TASKIFY
              </h1>
            </div>

            {/* 버튼 컨테이너: 태블릿에서 위아래 배치, 왼쪽 정렬 */}
            <div className="mt-10 flex flex-col items-center gap-4 md:items-start lg:mt-[50px] lg:gap-5">
              <button className="h-[50px] w-full max-w-[350px] rounded-full bg-zinc-700 text-sm font-semibold transition-colors hover:bg-zinc-600 md:h-[60px] md:w-[280px] md:text-base lg:h-[66px] lg:w-[350px]">
                회원가입하기
              </button>
              <button className="bg-brand-500 hover:bg-brand-400 h-[50px] w-full max-w-[350px] rounded-full text-sm font-semibold text-black transition-colors md:h-[60px] md:w-[280px] md:text-base lg:h-[66px] lg:w-[350px]">
                로그인하기
              </button>
            </div>
          </div>
        </div>

        {/* 오른쪽: 이미지 영역 (헤더에서 51px 떨어짐) */}
        <div className="relative hidden w-full justify-end md:mt-[51px] md:flex md:flex-1 lg:mt-0">
          <div
            className="relative h-[400px] w-full border border-zinc-800 bg-[#17171C] shadow-2xl md:h-[500px] lg:h-[682px] lg:w-[1212px]"
            style={{
              borderTopLeftRadius: "30px",
              borderBottomLeftRadius: "30px",
            }}
          >
            <Image
              src={imgSection1}
              alt="Taskify 메인 대시보드"
              fill
              priority
              className="object-cover object-left-top"
            />
          </div>
        </div>
      </section>

      {/* Point 1 */}
      <section className="mx-auto flex max-w-[1212px] flex-col items-center gap-10 px-6 py-16 lg:flex-row lg:justify-between lg:py-24">
        <div className="relative h-[250px] w-full overflow-hidden md:h-[450px] lg:h-[682px] lg:w-[650px]">
          <Image
            src={imgSection2}
            alt="할 일 리스트"
            fill
            className="object-contain p-6 md:p-12"
          />
        </div>
        <div className="w-full space-y-4 text-center lg:max-w-[550px] lg:text-left">
          <p className="text-brand-500 text-sm font-bold md:text-lg">Point 1</p>
          <h2 className="text-[24px] leading-tight font-bold md:text-[32px] lg:text-[50px]">
            내가 등록한 사진으로
            <br className="hidden lg:block" />더 기억에 남는 할 일 리스트
          </h2>
          <p className="text-sm text-zinc-400 md:text-lg">
            카드 내 추가한 이미지를 상단 썸네일로 노출하여
            <br className="hidden lg:block" />
            작업에 대한 내용을 더 직관적으로 떠올릴 수 있어요
          </p>
        </div>
      </section>

      {/* Point 2 */}
      <section className="mx-auto flex w-full max-w-[1920px] flex-col items-center gap-10 px-6 py-16 lg:flex-row lg:justify-between lg:px-[240px] lg:py-24">
        <div className="w-full space-y-4 text-center md:order-last lg:order-none lg:max-w-[600px] lg:text-left">
          <p className="text-brand-500 text-sm font-bold md:text-lg">Point 2</p>
          <h2 className="text-[24px] leading-tight font-bold md:text-[32px] lg:text-[50px]">
            자세한 정보는 명확하게,
            <br className="hidden lg:block" />팀 논의는 빠르게 확인하세요
          </h2>
          <p className="text-sm text-zinc-400 md:text-lg">
            작업에 필요한 세부 내용을 손쉽게 정리하고,
            <br className="hidden lg:block" />
            댓글을 통해 팀원들과 빠르게 소통해보세요
          </p>
        </div>
        <div className="relative h-[350px] w-full overflow-hidden md:h-[500px] lg:h-[613px] lg:w-[736px]">
          <Image
            src={imgSection3}
            alt="상세 정보"
            fill
            className="object-contain p-6 md:p-10"
          />
        </div>
      </section>

      {/* Point 3 */}
      <section className="bg-background relative w-full py-24 lg:px-[240px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mb-[40px] lg:mb-[80px]">
            <p className="text-brand-500 mb-2 text-base font-bold lg:text-lg">
              Point 3
            </p>
            <h2 className="text-[24px] leading-tight font-bold md:text-[32px] lg:text-[50px]">
              나에게 맞게, 더 효율적으로
              <br />
              생산성을 높이는 다양한 설정
            </h2>
            <p className="mt-4 text-base text-zinc-400 lg:text-lg">
              작업 방식에 맞게 색상, 팀원, 구성원 등을 쉽게 관리할 수 있어요.
            </p>
          </div>

          <div className="flex w-full flex-col gap-[28px] lg:flex-row lg:gap-[30px]">
            {[
              {
                img: imgSection4_1,
                title: "대시보드 설정",
                desc: "대시보드 사진과 이름을 변경할 수 있습니다.",
              },
              {
                img: imgSection4_2,
                title: "초대",
                desc: "새로운 팀원을 초대할 수 있습니다.",
              },
              {
                img: imgSection4_3,
                title: "구성원",
                desc: "구성원을 초대하고 내보낼 수 있습니다.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-4 lg:flex-1 lg:gap-6">
                <div className="relative h-[329px] w-full overflow-hidden rounded-[30px] border border-zinc-800 bg-[#17171c]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain p-8 lg:p-10"
                  />
                </div>
                <div className="space-y-1 lg:space-y-2">
                  <h3 className="text-xl font-bold lg:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 lg:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
