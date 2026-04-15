'use client';

import { usePathname } from 'next/navigation';
import Sidebar from "@/components/Sidebar";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <>
      {!isLoginPage && <Sidebar />}
      <main className={isLoginPage ? "full-content" : "main-content"}>
        {children}
      </main>
      <style jsx>{`
        .full-content {
          min-height: 100vh;
          width: 100%;
          position: relative;
          background: radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 90% 80%, rgba(245, 158, 11, 0.05) 0%, transparent 50%);
        }
      `}</style>
    </>
  );
}
