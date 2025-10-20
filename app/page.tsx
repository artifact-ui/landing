"use client";

import { useState } from "react";
import {
  Button,
  Text,
  Stack,
  Flex,
  IconButton,
  Tooltip,
  cn,
} from "@artifact-ui/core";
import { ChevronRight, ChevronLeft } from "lucide-react";
import styles from "./page.module.css";
import { Logo } from "./components/artifact-logo";
import { FeatureGrid } from "./components/feature/feature-grid";
import { ExampleDashboard } from "./components/example-dashboard/example-dashboard";
import { ThemeControls } from "./components/theme-controls/theme-controls";
import { Footer } from "./components/footer/footer";

export default function Home() {
  const [dashboardExpanded, setDashboardExpanded] = useState(false);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div
          className={cn(
            styles.heroSection,
            dashboardExpanded && styles.heroSectionExpanded
          )}
        >
          <div
            className={cn(
              styles.heroContent,
              dashboardExpanded && styles.heroContentHidden
            )}
          >
            <Stack gap="8" align="start">
              <Logo className={styles.logo} />
              <Text size="5" className={styles.subtitle}>
                Lightweight React components built on Radix primitives
              </Text>
              <Flex gap="3" justify="start" className={styles.ctas}>
                <a
                  href="https://storybook.artifact-ui.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" color="primary" size="2">
                    View Documentation
                  </Button>
                </a>
                <a
                  href="https://www.npmjs.com/package/@artifact-ui/core"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    color="neutral"
                    size="2"
                    className={styles.mono}
                  >
                    npm install @artifact-ui/core
                  </Button>
                </a>
              </Flex>
            </Stack>
          </div>
          <div
            className={cn(
              styles.heroPreview,
              dashboardExpanded && styles.heroPreviewExpanded
            )}
          >
            <div
              className={cn(
                styles.dashboardWrapper,
                dashboardExpanded && styles.dashboardWrapperExpanded
              )}
            >
              <ExampleDashboard expanded={dashboardExpanded} />
            </div>
          </div>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <IconButton
                icon={dashboardExpanded ? <ChevronRight /> : <ChevronLeft />}
                label={
                  dashboardExpanded ? "Collapse dashboard" : "Expand dashboard"
                }
                onClick={() => setDashboardExpanded(!dashboardExpanded)}
                className={styles.expandButton}
                variant="outline"
                color="neutral"
                size="2"
              />
            </Tooltip.Trigger>
            <Tooltip.Content side="left">
              {dashboardExpanded ? "Collapse dashboard" : "Expand dashboard"}
            </Tooltip.Content>
          </Tooltip.Root>
        </div>

        <FeatureGrid />
      </main>

      <Footer />

      <ThemeControls />
    </div>
  );
}
