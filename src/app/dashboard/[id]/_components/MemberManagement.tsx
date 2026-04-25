import { MemberHeader } from "./MemberHeader";
import { MemberList } from "./MemberList";

export function MemberManagement() {
  const memberData = [
    {
      id: 1,
      userId: 1,
      email: "owner@test.com",
      nickname: "박민영",
      profileImageUrl: null,
      isOwner: true,
      createdAt: "2026-04-25T15:38:20.558Z",
      updatedAt: "2026-04-25T15:38:20.558Z",
    },
    {
      id: 2,
      userId: 2,
      email: "member1@test.com",
      nickname: "김철수",
      profileImageUrl: null,
      isOwner: false,
      createdAt: "2026-04-25T16:00:00.000Z",
      updatedAt: "2026-04-25T16:00:00.000Z",
    },
    {
      id: 3,
      userId: 3,
      email: "member2@test.com",
      nickname: "이영희",
      profileImageUrl: null,
      isOwner: false,
      createdAt: "2026-04-25T17:00:00.000Z",
      updatedAt: "2026-04-25T17:00:00.000Z",
    },
    {
      id: 4,
      userId: 4,
      email: "member3@test.com",
      nickname: "최자바",
      profileImageUrl: null,
      isOwner: false,
      createdAt: "2026-04-25T18:00:00.000Z",
      updatedAt: "2026-04-25T18:00:00.000Z",
    },
    {
      id: 5,
      userId: 5,
      email: "member4@test.com",
      nickname: "정리액트",
      profileImageUrl: null,
      isOwner: false,
      createdAt: "2026-04-25T19:00:00.000Z",
      updatedAt: "2026-04-25T19:00:00.000Z",
    },
    {
      id: 6,
      userId: 6,
      email: "member5@test.com",
      nickname: "홍길동",
      profileImageUrl: null,
      isOwner: false,
      createdAt: "2026-04-25T20:00:00.000Z",
      updatedAt: "2026-04-25T20:00:00.000Z",
    },
  ];
  const inviteData = [
    {
      id: 501,
      inviter: { nickname: "박민영", email: "owner@test.com", id: 1 },
      teamId: "team_01",
      dashboard: { title: "프로젝트 관리", id: 10 },
      invitee: { nickname: "지원자A", email: "apply_one@work.com", id: 11 },
      inviteAccepted: false,
      createdAt: "2026-04-25T10:00:00.000Z",
      updatedAt: "2026-04-25T10:00:00.000Z",
    },
    {
      id: 502,
      inviter: { nickname: "박민영", email: "owner@test.com", id: 1 },
      teamId: "team_01",
      dashboard: { title: "프로젝트 관리", id: 10 },
      invitee: { nickname: "지원자B", email: "apply_two@gmail.com", id: 12 },
      inviteAccepted: false,
      createdAt: "2026-04-25T11:00:00.000Z",
      updatedAt: "2026-04-25T11:00:00.000Z",
    },
    {
      id: 503,
      inviter: { nickname: "박민영", email: "owner@test.com", id: 1 },
      teamId: "team_01",
      dashboard: { title: "프로젝트 관리", id: 10 },
      invitee: {
        nickname: "지원자C",
        email: "long_email_address_test@example.com",
        id: 13,
      },
      inviteAccepted: false,
      createdAt: "2026-04-25T12:00:00.000Z",
      updatedAt: "2026-04-25T12:00:00.000Z",
    },
    {
      id: 504,
      inviter: { nickname: "박민영", email: "owner@test.com", id: 1 },
      teamId: "team_01",
      dashboard: { title: "프로젝트 관리", id: 10 },
      invitee: { nickname: "지원자D", email: "dev_d@naver.com", id: 14 },
      inviteAccepted: false,
      createdAt: "2026-04-25T13:00:00.000Z",
      updatedAt: "2026-04-25T13:00:00.000Z",
    },
    {
      id: 505,
      inviter: { nickname: "박민영", email: "owner@test.com", id: 1 },
      teamId: "team_01",
      dashboard: { title: "프로젝트 관리", id: 10 },
      invitee: { nickname: "지원자E", email: "tester_e@kakao.com", id: 15 },
      inviteAccepted: false,
      createdAt: "2026-04-25T14:00:00.000Z",
      updatedAt: "2026-04-25T14:00:00.000Z",
    },
    {
      id: 506,
      inviter: { nickname: "박민영", email: "owner@test.com", id: 1 },
      teamId: "team_01",
      dashboard: { title: "프로젝트 관리", id: 10 },
      invitee: { nickname: "지원자F", email: "user_f@outlook.com", id: 16 },
      inviteAccepted: false,
      createdAt: "2026-04-25T15:00:00.000Z",
      updatedAt: "2026-04-25T15:00:00.000Z",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* 1. 구성원 섹션 */}
      <div className="flex flex-1 flex-col gap-2.5">
        <MemberHeader>구성원</MemberHeader>
        <div className="flex-1 rounded-lg">
          {memberData.map((member) => (
            <MemberList key={member.id} type="member" data={member} />
          ))}
        </div>
      </div>

      {/* 2. 초대 내역 섹션 */}
      <div className="flex flex-1 flex-col gap-2.5">
        <MemberHeader>초대내역</MemberHeader>
        <div className="flex-1 overflow-y-auto rounded-lg">
          {inviteData.map((invite) => (
            <MemberList key={invite.id} type="invite" data={invite} />
          ))}
        </div>
      </div>
    </div>
  );
}
