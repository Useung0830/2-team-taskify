"use client";

import { useState, useRef, useCallback } from "react";

import { getDashboardList } from "@/api/data";

import { SideButton } from "./SideButton";
import { Dashboard } from "./SideMenu";

interface SideDashboardListProps {
  initialDashboards: Dashboard[];
  initialTotalCount: number; // totalCount로 마지막 페이지 판단
}

export function SideDashboardList({
  initialDashboards,
  initialTotalCount,
}: SideDashboardListProps) {
  const [dashboards, setDashboards] = useState<Dashboard[]>(initialDashboards);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(
    initialDashboards.length < initialTotalCount
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isLoadingRef = useRef(false);
  const pageRef = useRef(1);
  const observerInstanceRef = useRef<IntersectionObserver | null>(null);

  const loadMore = useCallback(async () => {
    if (isLoadingRef.current || !hasMore) return; // hasMore로 판단

    isLoadingRef.current = true;
    setIsLoading(true);

    const nextPage = pageRef.current + 1;

    try {
      const response = await getDashboardList({
        navigationMethod: "pagination",
        page: nextPage,
        size: 20,
      });

      setDashboards((prev) => [...prev, ...response.dashboards]);
      pageRef.current = nextPage;

      setHasMore(
        dashboards.length + response.dashboards.length < response.totalCount
      );
    } catch (error) {
      console.error("무한 스크롤 데이터 로드 실패:", error);
    } finally {
      isLoadingRef.current = false;
      setIsLoading(false);
    }
  }, [hasMore, dashboards.length]);

  const observerRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observerInstanceRef.current) {
        observerInstanceRef.current.disconnect();
        observerInstanceRef.current = null;
      }

      if (node) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              loadMore();
            }
          },
          { root: scrollContainerRef.current, threshold: 0 }
        );
        observer.observe(node);
        observerInstanceRef.current = observer;
      }
    },
    [loadMore]
  );

  return (
    <div
      ref={scrollContainerRef}
      className="flex h-full flex-col overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-600 [&::-webkit-scrollbar-track]:bg-transparent"
    >
      <div className="flex flex-col gap-1">
        {dashboards.map((item) => (
          <SideButton
            key={item.id}
            id={item.id}
            title={item.title}
            color={item.color}
            createdByMe={item.createdByMe}
          />
        ))}

        {hasMore && (
          <div
            ref={observerRef}
            className="flex h-20 w-full items-center justify-center"
          >
            {isLoading && <div className="h-5 w-5 animate-spin" />}
          </div>
        )}
      </div>
    </div>
  );
}
