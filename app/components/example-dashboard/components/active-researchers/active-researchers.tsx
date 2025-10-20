import { Card, Heading, Stack } from "@artifact-ui/core";
import { NotebookPen } from "lucide-react";
import { ResearcherItem } from "./researcher-item";
import styles from "./active-researchers.module.css";

interface Researcher {
  id: number;
  name: string;
  role: string;
  avatar: string;
  status: "active" | "away" | "sabbatical";
}

interface ActiveResearchersProps {
  researchers: Researcher[];
}

export function ActiveResearchers({ researchers }: ActiveResearchersProps) {
  return (
    <Card.Root>
      <Card.Header className={styles.coloredHeader}>
        <Heading size="4" iconLeft={<NotebookPen />}>
          Active Researchers
        </Heading>
      </Card.Header>
      <Card.Body>
        <Stack gap="4">
          {researchers.map((researcher) => (
            <ResearcherItem
              key={researcher.id}
              name={researcher.name}
              role={researcher.role}
              avatar={researcher.avatar}
              status={researcher.status}
            />
          ))}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
