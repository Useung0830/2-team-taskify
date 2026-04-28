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
      <section className="relative mx-auto flex w-full max-w-[1920px] flex-col items-center overflow-hidden md:flex-row md:items-center lg:h-[940px] lg:gap-[100px]">
        <div className="z-10 flex w-full flex-col justify-center px-6 py-16 md:mt-[51px] md:w-auto md:px-12 md:py-0 lg:mt-0 lg:h-full lg:pl-[clamp(40px,12vw,240px)]">
          <div className="text-center md:text-left">
            <div className="space-y-2 md:space-y-4">
              <p className="text-[32px] leading-tight font-bold md:text-5xl lg:text-[60px] lg:whitespace-nowrap">
                더 새로워진 일정 관리
              </p>
              <h1 className="text-brand-500 text-[48px] font-extrabold tracking-tight md:text-6xl lg:text-[90px]">
                TASKIFY
              </h1>
            </div>
            <div className="mt-10 flex flex-col items-center gap-4 md:items-start lg:mt-[50px] lg:flex-row lg:gap-5">
              <button className="h-[50px] w-full max-w-[350px] rounded-full bg-zinc-700 text-sm font-semibold transition-colors hover:bg-zinc-600 md:h-[60px] md:w-[280px] md:text-base lg:h-[60px] lg:w-[200px]">
                회원가입하기
              </button>
              <button className="bg-brand-500 hover:bg-brand-400 h-[50px] w-full max-w-[350px] rounded-full text-sm font-semibold text-black transition-colors md:h-[60px] md:w-[280px] md:text-base lg:h-[60px] lg:w-[200px]">
                로그인하기
              </button>
            </div>
          </div>
        </div>
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
      {/* Point 2 */}
      <section className="mx-auto flex w-full max-w-[1920px] flex-col items-center overflow-hidden md:flex-row md:items-center lg:py-24">
        <div className="z-10 flex w-full flex-col justify-center px-6 py-16 md:w-auto md:px-12 md:py-0 lg:h-full lg:pl-[clamp(40px,12vw,240px)]">
          <div className="text-center md:text-left">
            <p className="text-brand-500 text-sm font-bold md:text-lg">
              Point 2
            </p>
            <h2 className="mt-4 text-[24px] leading-tight font-bold md:text-[32px] lg:text-[50px] lg:whitespace-nowrap">
              자세한 정보는 명확하게,
              <br />팀 논의는 빠르게 확인하세요
            </h2>
            <p className="mt-4 text-sm text-zinc-400 md:text-lg">
              작업에 필요한 세부 내용을 손쉽게 정리하고,
              <br className="hidden lg:block" />
              댓글을 통해 팀원들과 빠르게 소통해보세요
            </p>
          </div>
        </div>
        <div className="relative hidden w-full justify-end md:flex md:flex-1 lg:ml-[100px] lg:pr-[100px]">
          <div className="relative aspect-[709/714] w-full max-w-[709px] overflow-hidden">
            <Image
              src={imgSection3}
              alt="상세 정보"
              fill
              className="object-contain object-left-top"
            />
          </div>
        </div>

        {/* 오른쪽 이미지 영역: 709x714 비율 유지하며 자연스럽게 축소 */}
      </section>
      {/* Point 3 */}
      {/* Point 3 */}
      <section className="relative w-full bg-[#161519] py-24">
        {/* 컨테이너: Hero, Point 2와 동일한 왼쪽 여백 정렬 */}
        <div className="mx-auto w-full max-w-[1920px] lg:pr-[240px] lg:pl-[clamp(40px,12vw,240px)]">
          {/* 상단 타이틀 영역 - 이미지와의 거리 30px 유지 */}
          <div className="px-6 md:px-12 lg:mb-[30px] lg:px-0">
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
              <br />
              환경을 조율하면 일은 더 가볍고 빠르게 흘러갑니다.
            </p>
          </div>

          {/* 하단 콘텐츠 영역: 화면이 작아지면 flex-row에서 flex-col로 변하며 자연스럽게 축소 */}
          <div className="flex w-full flex-col gap-[40px] px-6 md:px-12 lg:flex-row lg:gap-[30px] lg:px-0">
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
              <div
                key={idx}
                className="flex flex-col lg:max-w-[462px] lg:flex-1"
              >
                {/* 1. 이미지 영역: aspect-ratio를 활용해 가로/세로 비율 유지하며 축소 */}
                <div className="relative aspect-[462/251] w-full lg:max-h-[251px] lg:max-w-[462px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain object-left-bottom"
                  />
                </div>

                {/* 2. 텍스트 영역: 이미지와 28px 간격 유지 */}
                <div className="mt-6 flex flex-col gap-2 lg:mt-[28px]">
                  <h3 className="text-xl font-bold lg:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 lg:text-[16px]">
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
