import { Grid } from "@artifact-ui/core";
import { StatCard } from "./stat-card";
import styles from "./stats-grid.module.css";

interface StatItem {
  label: string;
  value: string;
}

interface StatsGridProps {
  stats: StatItem[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <Grid columns={4} gap="4" className={styles.statsGrid}>
      {stats.map((stat) => (
        <StatCard key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </Grid>
  );
}
