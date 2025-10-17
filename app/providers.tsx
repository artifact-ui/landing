"use client";

import { ArtifactProvider } from "@artifact-ui/core";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ArtifactProvider theme="light" radius="medium">
      {children}
    </ArtifactProvider>
  );
}
