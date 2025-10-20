import { Heading, Stack, Grid } from "@artifact-ui/core";
import { ArtifactCard } from "./artifact-card";
import styles from "./recent-acquisitions.module.css";

interface Artifact {
  id: number;
  title: string;
  period: string;
  image: string;
}

interface RecentAcquisitionsProps {
  artifacts: Artifact[];
}

export function RecentAcquisitions({ artifacts }: RecentAcquisitionsProps) {
  return (
    <Stack gap="4">
      <Heading size="5">Recent Acquisitions</Heading>
      <Grid columns={4} gap="4" className={styles.artifactsGrid}>
        {artifacts.map((artifact) => (
          <ArtifactCard
            key={artifact.id}
            title={artifact.title}
            period={artifact.period}
            image={artifact.image}
          />
        ))}
      </Grid>
    </Stack>
  );
}
