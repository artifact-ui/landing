"use client";

import { Stack, Grid, cn } from "@artifact-ui/core";
import { DashboardHeader } from "./components/dashboard-header/dashboard-header";
import { StatsGrid } from "./components/stats-grid/stats-grid";
import { RecentAcquisitions } from "./components/recent-acquisitions/recent-acquisitions";
import { ActiveResearchers } from "./components/active-researchers/active-researchers";
import { ResearchAssignments } from "./components/research-assignments/research-assignments";
import {
  stats,
  recentArtifacts,
  activeResearchers,
  researchAssignments,
} from "./data/dashboard-data";
import styles from "./example-dashboard.module.css";

interface ExampleDashboardProps {
  expanded?: boolean;
}

export function ExampleDashboard({ expanded = false }: ExampleDashboardProps) {
  return (
    <Stack
      gap="8"
      className={cn(styles.dashboard, expanded && styles.dashboardExpanded)}
    >
      <DashboardHeader expanded={expanded} />
      <StatsGrid stats={stats} />
      <RecentAcquisitions artifacts={recentArtifacts} />
      <Grid columns={2} gap="4" className={styles.bottomGrid}>
        <ActiveResearchers researchers={activeResearchers} />
        <ResearchAssignments assignments={researchAssignments} />
      </Grid>
    </Stack>
  );
}
