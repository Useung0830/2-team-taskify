const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchInstance = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  // localStorage에서 토큰 가져오기
  const token =
    typeof window !== "undefined"
      ? sessionStorage.getItem("accessToken")
      : null;

  // 기본 헤더 설정
  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  // 토큰이 있다면 Authorization 헤더 추가
  if (token) {
    defaultHeaders["Authorization"] = `Bearer ${token}`;
  }

  const url = `${BASE_URL}${endpoint}`;
  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}), // headers가 undefined일 경우 대비
    },
  };

  const response = await fetch(url, config);

  // 401 Unauthorized 처리 (로그만 찍거나 페이지 이동 로직)
  if (response.status === 401) {
    console.error("인증이 만료되었습니다. 다시 로그인해주세요.");
    // window.location.href = '/login'; // 필요시 활성화
  }

  // 에러 응답 처리
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "API 호출 에러");
  }

  // 정상 응답 처리
  if (response.status === 204) return null;
  return await response.json();
};

// GET
export const get = <TResponse>(
  endpoint: string,
  options?: RequestInit
): Promise<TResponse> => fetchInstance(endpoint, { ...options, method: "GET" });

// POST
export const post = <TBody, TResponse>(
  endpoint: string,
  body: TBody,
  options?: RequestInit
): Promise<TResponse> =>
  fetchInstance(endpoint, {
    ...options,
    method: "POST",
    body: JSON.stringify(body),
  });

// PUT
export const put = <TBody, TResponse>(
  endpoint: string,
  body: TBody,
  options?: RequestInit
): Promise<TResponse> =>
  fetchInstance(endpoint, {
    ...options,
    method: "PUT",
    body: JSON.stringify(body),
  });

// DELETE
export const del = <TResponse>(
  endpoint: string,
  options?: RequestInit
): Promise<TResponse> =>
  fetchInstance(endpoint, { ...options, method: "DELETE" });
