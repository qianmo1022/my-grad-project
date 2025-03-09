"use client"

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/userStore";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredAuth?: boolean;
}

export function ProtectedRoute({ children, requiredAuth = true }: ProtectedRouteProps) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useUserStore();

  useEffect(() => {
    // 如果需要认证但用户未登录，则重定向到登录页面
    if (!isLoading && requiredAuth && !isAuthenticated) {
      const currentPath = window.location.pathname;
      router.push(`/login?callbackUrl=${encodeURIComponent(currentPath)}`);
    }
  }, [isAuthenticated, isLoading, requiredAuth, router]);

  // 如果正在加载或者需要认证但未登录，则不渲染子组件
  if (isLoading || (requiredAuth && !isAuthenticated)) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  // 已登录或不需要认证，渲染子组件
  return <>{children}</>;
}