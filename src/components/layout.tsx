import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

import Footer from "@/components/footer";
import Header from "@/components/header";
import LoginModal from "@/components/login-modal";
import { ScrollRestoration } from "@/components/scroll-restoration";
import { PageSkeleton } from "@/components/skeleton";

export default function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col bg-background text-foreground">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Suspense fallback={<PageSkeleton />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
      <Toaster
        containerClassName="toast-container"
        containerStyle={{
          top: "calc(50% - 24px)",
        }}
      />
      <LoginModal />
      <ScrollRestoration />
    </div>
  );
}
