"use client";

import { useState, useEffect } from "react";

import * as API from "@/api/data";

type TabType =
  | "Auth"
  | "Dashboards"
  | "Columns"
  | "Cards"
  | "Comments"
  | "Members";

export default function ApiPlayground() {
  const [activeTab, setActiveTab] = useState<TabType>("Auth");
  const [logs, setLogs] = useState<string[]>([]);
  const [ids, setIds] = useState({
    dashboardId: "",
    columnId: "",
    cardId: "",
    commentId: "",
    invitationId: "",
  });
  const [token, setToken] = useState<string | null>(null);

  // 로컬 스토리지 토큰 동기화
  useEffect(() => {
    setToken(sessionStorage.getItem("accessToken"));
  }, []);

  const addLog = (msg: string, data?: any) => {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `[${timestamp}] ${msg}${data ? " -> " + JSON.stringify(data).substring(0, 100) + "..." : ""}`;
    setLogs((prev) => [logEntry, ...prev]);
    if (data) console.log(`[${msg}]`, data);
  };

  const run = async (name: string, fn: () => Promise<any>) => {
    try {
      addLog(`🚀 ${name} 실행...`);
      const result = await fn();
      addLog(`✅ ${name} 성공`, result);
      // 로그인 성공 시 토큰 상태 업데이트
      if (name === "로그인") setToken(sessionStorage.getItem("accessToken"));
    } catch (e: any) {
      addLog(`❌ ${name} 실패: ${e.response?.data?.message || e.message}`);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "monospace",
      }}
    >
      <header
        style={{
          borderBottom: "2px solid #333",
          marginBottom: "20px",
          paddingBottom: "10px",
        }}
      >
        <h1>🛠️ Taskify API Playground</h1>
        <p>로그인 상태: {token ? "✅ 인증됨" : "❌ 미인증 (로그인 필요)"}</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {(
            [
              "Auth",
              "Dashboards",
              "Columns",
              "Cards",
              "Comments",
              "Members",
            ] as TabType[]
          ).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                backgroundColor: activeTab === tab ? "#333" : "#eee",
                color: activeTab === tab ? "#fff" : "#000",
                border: "none",
                borderRadius: "5px",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <main
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        {/* 컨트롤 패널 */}
        <section>
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <h3>📍 필수 ID 설정 (테스트 전 입력)</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              {Object.keys(ids).map((key) => (
                <div key={key}>
                  <label style={{ fontSize: "12px" }}>{key}</label>
                  <input
                    type="text"
                    placeholder={key}
                    style={{ width: "100%", padding: "5px" }}
                    value={(ids as any)[key]}
                    onChange={(e) => setIds({ ...ids, [key]: e.target.value })}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {activeTab === "Auth" && (
              <>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("로그인", () =>
                      API.postLogin({
                        email: "222@222.com",
                        password: "123123123",
                      })
                    )
                  }
                >
                  테스트 계정 로그인
                </button>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("회원가입", () =>
                      API.postSignup({
                        email: `test${Date.now()}@a.com`,
                        nickname: "유승",
                        password: "password123",
                      })
                    )
                  }
                >
                  랜덤 회원가입
                </button>
                <button
                  style={btnStyle}
                  onClick={() => run("내 정보 조회", API.getMyInfo)}
                >
                  내 정보 조회
                </button>
              </>
            )}

            {activeTab === "Dashboards" && (
              <>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("대시보드 목록(P)", () =>
                      API.getDashboardList({
                        navigationMethod: "pagination",
                        page: 1,
                        size: 10,
                      })
                    )
                  }
                >
                  대시보드 목록(페이지)
                </button>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("대시보드 생성", () =>
                      API.postDashboard({
                        title: "새 대시보드",
                        color: "#7ac555",
                      })
                    )
                  }
                >
                  새 대시보드 생성
                </button>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("대시보드 상세", () =>
                      API.getDashboardDetail(Number(ids.dashboardId))
                    )
                  }
                >
                  상세 조회 (ID필수)
                </button>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("초대 목록 조회", () =>
                      API.getInvitationList(Number(ids.dashboardId), {
                        page: 1,
                      })
                    )
                  }
                >
                  초대 목록 조회
                </button>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("내가 받은 초대 조회", () =>
                      API.getMyInvitationList({ size: 10 })
                    )
                  }
                >
                  내가 받은 초대 목록
                </button>
              </>
            )}

            {activeTab === "Columns" && (
              <>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("컬럼 목록 조회", () =>
                      API.getColumnList(Number(ids.dashboardId))
                    )
                  }
                >
                  컬럼 목록 (대시보드 ID필수)
                </button>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("컬럼 생성", () =>
                      API.postColumn({
                        title: "To Do",
                        dashboardId: Number(ids.dashboardId),
                      })
                    )
                  }
                >
                  새 컬럼 생성
                </button>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("컬럼 삭제", () =>
                      API.deleteColumn(Number(ids.columnId))
                    )
                  }
                >
                  컬럼 삭제 (ID필수)
                </button>
              </>
            )}

            {activeTab === "Cards" && (
              <>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("카드 목록 조회", () =>
                      API.getCardList({
                        columnId: Number(ids.columnId),
                        size: 10,
                      })
                    )
                  }
                >
                  카드 목록 (컬럼 ID필수)
                </button>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("카드 상세 조회", () =>
                      API.getCardDetail(Number(ids.cardId))
                    )
                  }
                >
                  카드 상세 (ID필수)
                </button>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("카드 생성", () =>
                      API.postCard({
                        columnId: Number(ids.columnId),
                        dashboardId: Number(ids.dashboardId),
                        title: "테스트 카드1",
                        description: "설명",
                        assigneeUserId: 1,
                        tags: ["테스트"],
                      })
                    )
                  }
                >
                  카드 생성
                </button>
              </>
            )}

            {activeTab === "Comments" && (
              <>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("댓글 목록 조회", () =>
                      API.getCommentList({ cardId: Number(ids.cardId) })
                    )
                  }
                >
                  댓글 목록 (카드 ID필수)
                </button>
                <button
                  style={btnStyle}
                  onClick={() =>
                    run("댓글 작성", () =>
                      API.postComment({
                        content: "반갑습니다.",
                        cardId: Number(ids.cardId),
                        columnId: Number(ids.columnId),
                        dashboardId: Number(ids.dashboardId),
                      })
                    )
                  }
                >
                  댓글 작성
                </button>
              </>
            )}

            {activeTab === "Members" && (
              <button
                style={btnStyle}
                onClick={() =>
                  run("멤버 목록 조회", () =>
                    API.getMemberList({
                      dashboardId: Number(ids.dashboardId),
                    })
                  )
                }
              >
                멤버 목록 (ID필수)
              </button>
            )}
          </div>
        </section>

        {/* 로그 콘솔 */}
        <section
          style={{
            backgroundColor: "#1e1e1e",
            color: "#00ff00",
            padding: "15px",
            borderRadius: "8px",
            height: "600px",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              color: "#fff",
            }}
          >
            <strong>CONSOLE LOGS</strong>
            <button
              onClick={() => setLogs([])}
              style={{
                background: "none",
                color: "#fff",
                border: "1px solid #fff",
                cursor: "pointer",
              }}
            >
              Clear
            </button>
          </div>
          {logs.map((log, i) => (
            <div
              key={i}
              style={{
                marginBottom: "8px",
                borderBottom: "1px solid #333",
                paddingBottom: "4px",
                fontSize: "13px",
              }}
            >
              {log}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

const btnStyle = {
  padding: "12px",
  cursor: "pointer",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#fff",
  textAlign: "left" as const,
  fontSize: "14px",
  fontWeight: "bold",
};
