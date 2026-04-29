import { cookies } from "next/headers";

export const fetchInstance = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  const defaultHeaders: Record<string, string> = {};

  if (!(options.body instanceof FormData)) {
    defaultHeaders["Content-Type"] = "application/json";
  }

  if (token) {
    defaultHeaders["Authorization"] = `Bearer ${token}`;
  }

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`;

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "API 호출 에러");
  }

  return response.status === 204 ? null : await response.json();
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
