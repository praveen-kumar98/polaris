"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthLoadingView } from "@/features/auth/compoenents/auth-loading-view";
import { UnauthenticatedView } from "@/features/auth/compoenents/unauthenticated-view";

import { ConvexClientProvider } from "./convex-client-provider";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ConvexClientProvider>
        <ThemeProvider>
          <TooltipProvider>
            <Authenticated>{children}</Authenticated>
            <AuthLoading>
              <AuthLoadingView />
            </AuthLoading>
            <Unauthenticated>
              <UnauthenticatedView />
            </Unauthenticated>
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </ConvexClientProvider>
    </ClerkProvider>
  );
}
