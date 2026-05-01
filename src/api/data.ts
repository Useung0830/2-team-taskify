"use server";

import * as T from "@/types/api";

import { get, post, put, del, fetchInstance } from "./fetch";

// ==========================================================
// [ Auth ] - 로그인 및 비밀번호 변경
// ==========================================================

export async function postLogin(
  data: T.LoginRequest
): Promise<T.LoginResponse> {
  const response = await post<T.LoginRequest, T.LoginResponse>(
    "/auth/login",
    data
  );

  return response;
}

export async function putPasswordUpdate(
  data: T.PasswordUpdateRequest
): Promise<void> {
  return put<T.PasswordUpdateRequest, void>("/auth/password", data);
}

// ==========================================================
// [ Users ] - 회원가입, 내 정보 조회, 수정, 프로필 이미지 업로드
// ==========================================================

export async function postSignup(data: T.SignupRequest): Promise<T.User> {
  return post<T.SignupRequest, T.User>("/users", data);
}

export async function getMyInfo(): Promise<T.User> {
  return get<T.User>("/users/me");
}

export async function putMyInfoUpdate(
  data: T.UpdateUserRequest
): Promise<T.User> {
  return put<T.UpdateUserRequest, T.User>("/users/me", data);
}

export const postProfileImage = async (
  file: File
): Promise<{ profileImageUrl: string }> => {
  const formData = new FormData();
  formData.append("image", file);

  return fetchInstance("/users/me/image", {
    method: "POST",
    body: formData,
  });
};

// ==========================================================
// [ Card ] - 카드 생성, 목록 조회, 수정, 상세 조회, 삭제
// ==========================================================

export async function postCard(
  data: T.CreateCardRequest
): Promise<T.CreateCardResponse> {
  return post<T.CreateCardRequest, T.CreateCardResponse>("/cards", data);
}

export async function getCardList(
  params: T.GetCardListRequest
): Promise<T.GetCardListResponse> {
  const { columnId, size, cursorId } = params;

  const query = new URLSearchParams({
    columnId: String(columnId),
  });

  if (size !== undefined) {
    query.append("size", String(size));
  }

  if (cursorId !== undefined && cursorId !== null) {
    query.append("cursorId", String(cursorId));
  }

  return get<T.GetCardListResponse>(`/cards?${query.toString()}`);
}

export async function putCardUpdate(
  cardId: number,
  data: T.UpdateCardRequest
): Promise<T.UpdateCardResponse> {
  return put<T.UpdateCardRequest, T.UpdateCardResponse>(
    `/cards/${cardId}`,
    data
  );
}

export async function getCardDetail(cardId: number): Promise<T.CardResponse> {
  return get<T.CardResponse>(`/cards/${cardId}`);
}

export async function deleteCard(cardId: number): Promise<void> {
  return del<void>(`/cards/${cardId}`);
}

// ==========================================================
// [ Columns ] - 칼럼 생성, 목록 조회, 수정, 삭제, 카드 이미지 업로드
// ==========================================================

export async function postColumn(
  data: T.CreateColumnRequest
): Promise<T.ColumnResponse> {
  // 주소: /columns
  return post<T.CreateColumnRequest, T.ColumnResponse>("/columns", data);
}

export async function getColumnList(
  dashboardId: number
): Promise<T.GetColumnListResponse> {
  const query = new URLSearchParams({
    dashboardId: String(dashboardId),
  });

  return get<T.GetColumnListResponse>(`/columns?${query.toString()}`);
}

export async function putColumnUpdate(
  columnId: number,
  data: T.UpdateColumnRequest
): Promise<T.ColumnResponse> {
  return put<T.UpdateColumnRequest, T.ColumnResponse>(
    `/columns/${columnId}`,
    data
  );
}

export async function deleteColumn(columnId: number): Promise<void> {
  return del<void>(`/columns/${columnId}`);
}

export async function postCardImage(
  columnId: number,
  imageFile: File
): Promise<T.UploadCardImageResponse> {
  const formData = new FormData();
  // 서버가 기다리는 키값은 "image"입니다.
  formData.append("image", imageFile);

  // [수정] post 유틸리티 대신 fetchInstance를 직접 호출합니다.
  // headers를 명시하지 않아야 브라우저가 '멀티파트' 경계값을 자동으로 생성합니다.
  return fetchInstance(`/columns/${columnId}/card-image`, {
    method: "POST",
    body: formData,
  });
}

// ==========================================================
// [ Comment ] - 코맨트 생성, 목록 조회, 수정, 삭제
// ==========================================================

export async function postComment(
  data: T.CreateCommentRequest
): Promise<T.Comment> {
  return post<T.CreateCommentRequest, T.Comment>("/comments", data);
}

export async function getCommentList(
  params: T.GetCommentListRequest
): Promise<T.GetCommentListResponse> {
  const { cardId, cursorId, size } = params;
  const query = new URLSearchParams({ cardId: String(cardId) });

  if (cursorId) query.append("cursorId", String(cursorId));
  if (size) query.append("size", String(size));

  return get<T.GetCommentListResponse>(`/comments?${query.toString()}`);
}

export async function putCommentUpdate(
  commentId: number,
  data: T.UpdateCommentRequest
): Promise<T.Comment> {
  return put<T.UpdateCommentRequest, T.Comment>(`/comments/${commentId}`, data);
}

export async function deleteComment(commentId: number): Promise<void> {
  return del<void>(`/comments/${commentId}`);
}

// ==========================================================
// [ Dashboards ] - 대시보드 생성, 목록 조회, 상세 조회, 수정, 삭제, 초대하기, 초대 불러오기, 초대 취소
// ==========================================================

export async function postDashboard(
  data: T.CreateDashboardRequest
): Promise<T.Dashboard> {
  return post<T.CreateDashboardRequest, T.Dashboard>("/dashboards", data);
}

export async function getDashboardList(
  params: T.GetDashboardListRequest
): Promise<T.GetDashboardListResponse> {
  const { navigationMethod, cursorId, page, size } = params;

  const query = new URLSearchParams({ navigationMethod });

  if (navigationMethod === "infiniteScroll") {
    if (cursorId !== undefined && cursorId !== null)
      query.append("cursorId", String(cursorId));
    if (size !== undefined) query.append("size", String(size));
  }

  if (navigationMethod === "pagination") {
    if (page !== undefined) query.append("page", String(page));
    if (size !== undefined) query.append("size", String(size));
  }

  return get<T.GetDashboardListResponse>(`/dashboards?${query.toString()}`);
}

export async function getDashboardDetail(
  dashboardId: number
): Promise<T.Dashboard> {
  return get<T.Dashboard>(`/dashboards/${dashboardId}`);
}

export async function putDashboardUpdate(
  dashboardId: number,
  data: T.UpdateDashboardRequest
): Promise<T.Dashboard> {
  return put<T.UpdateDashboardRequest, T.Dashboard>(
    `/dashboards/${dashboardId}`,
    data
  );
}

export async function deleteDashboard(dashboardId: number): Promise<void> {
  return del<void>(`/dashboards/${dashboardId}`);
}

export async function postInvitation(
  dashboardId: number,
  data: T.CreateInvitationRequest
): Promise<T.Invitation> {
  return post<T.CreateInvitationRequest, T.Invitation>(
    `/dashboards/${dashboardId}/invitations`,
    data
  );
}

export async function getInvitationList(
  dashboardId: number,
  params: T.GetInvitationListRequest
): Promise<T.GetInvitationListResponse> {
  const { page = 1, size = 10 } = params;

  const query = new URLSearchParams({
    page: String(page),
    size: String(size),
  });

  return get<T.GetInvitationListResponse>(
    `/dashboards/${dashboardId}/invitations?${query.toString()}`
  );
}

export async function deleteInvitation(
  dashboardId: number,
  invitationId: number
): Promise<void> {
  return del<void>(`/dashboards/${dashboardId}/invitations/${invitationId}`);
}

// ==========================================================
// [ Invitations ] - 내가 받은 초대 목록 조회, 응답
// ==========================================================

export async function getMyInvitationList(
  params: T.GetMyInvitationListRequest
): Promise<T.GetMyInvitationListResponse> {
  const { size, cursorId, title } = params;
  const query = new URLSearchParams();

  if (size) query.append("size", String(size));
  if (cursorId) query.append("cursorId", String(cursorId));
  if (title) query.append("title", title);

  return get<T.GetMyInvitationListResponse>(`/invitations?${query.toString()}`);
}

export async function putInvitationAnswer(
  invitationId: number,
  data: T.AnswerInvitationRequest
): Promise<T.Invitation> {
  return put<T.AnswerInvitationRequest, T.Invitation>(
    `/invitations/${invitationId}`,
    data
  );
}

// ==========================================================
// [ Members ] - 대시보드 맴버 목록 조회, 맴버 삭제
// ==========================================================

export async function getMemberList(
  params: T.GetMemberListRequest
): Promise<T.GetMemberListResponse> {
  const { dashboardId, page = 1, size = 20 } = params;

  const query = new URLSearchParams({
    dashboardId: String(dashboardId),
    page: String(page),
    size: String(size),
  });

  return get<T.GetMemberListResponse>(`/members?${query.toString()}`);
}

export async function deleteMember(memberId: number): Promise<void> {
  return del<void>(`/members/${memberId}`);
}
