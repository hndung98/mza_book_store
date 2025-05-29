import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

import LoginModal from "@/components/features/login-modal";
import { ScrollRestoration } from "@/components/features/scroll-restoration";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { PageSkeleton } from "@/components/ui/skeleton";

export default function RootLayout() {
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
