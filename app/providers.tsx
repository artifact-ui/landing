"use client";

import { ArtifactProvider, Tooltip } from "@artifact-ui/core";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ArtifactProvider accent="obsidian" radius="none">
      <Tooltip.Provider>
        {children}
      </Tooltip.Provider>
    </ArtifactProvider>
  );
}
