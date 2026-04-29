// import tag from '@/assets/tag.svg';
export interface MockdataType {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
}

export const mockdata = [
  {
    id: 1,
    title: "나의 첫 포트폴리오",
    color: "#FF5733",
    createdAt: "2026-04-20T10:00:00.000Z",
    updatedAt: "2026-04-20T10:00:00.000Z",
    createdByMe: true,
  },
  {
    id: 2,
    title: "팀 프로젝트: Rolling",
    color: "#33FF57",
    createdAt: "2026-04-21T11:30:00.000Z",
    updatedAt: "2026-04-21T14:20:00.000Z",
    createdByMe: false,
  },
  {
    id: 3,
    title: "반응형 웹 디자인",
    color: "#3357FF",
    createdAt: "2026-04-22T09:15:00.000Z",
    updatedAt: "2026-04-22T09:15:00.000Z",
    createdByMe: true,
  },
  {
    id: 4,
    title: "Next.js 학습 기록",
    color: "#F333FF",
    createdAt: "2026-04-22T12:00:00.000Z",
    updatedAt: "2026-04-22T13:00:00.000Z",
    createdByMe: true,
  },
  {
    id: 5,
    title: "알고리즘 문제 풀이",
    color: "#FF33A1",
    createdAt: "2026-04-22T15:04:02.757Z",
    updatedAt: "2026-04-22T15:04:02.757Z",
    createdByMe: false,
  },
  {
    id: 6,
    title: "Tailwind 컴포넌트",
    color: "#33FFF5",
    createdAt: "2026-04-23T08:45:00.000Z",
    updatedAt: "2026-04-23T08:45:00.000Z",
    createdByMe: true,
  },
  {
    id: 7,
    title: "TypeScript 마이그레이션",
    color: "#FFC300",
    createdAt: "2026-04-23T10:20:00.000Z",
    updatedAt: "2026-04-23T10:20:00.000Z",
    createdByMe: true,
  },
  {
    id: 8,
    title: "개인 블로그 테마",
    color: "#581845",
    createdAt: "2026-04-23T14:10:00.000Z",
    updatedAt: "2026-04-23T14:10:00.000Z",
    createdByMe: false,
  },
  {
    id: 9,
    title: "데이터 시각화 프로젝트",
    color: "#DAF7A6",
    createdAt: "2026-04-23T16:00:00.000Z",
    updatedAt: "2026-04-23T17:30:00.000Z",
    createdByMe: true,
  },
  {
    id: 10,
    title: "취업용 최종 포트폴리오",
    color: "#900C3F",
    createdAt: "2026-04-23T20:00:00.000Z",
    updatedAt: "2026-04-23T20:00:00.000Z",
    createdByMe: true,
  },
];
