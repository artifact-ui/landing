import { Card, Heading, Text, Stack, Flex, Button } from "@artifact-ui/core";
import styles from "./stats-grid.module.css";

interface StatCardProps {
  label: string;
  value: string;
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <Card.Root className={styles.statCard}>
      <Card.Body>
        <Flex justify="between" align="start">
          <Stack gap="2">
            <Text color="secondary" size="2">
              {label}
            </Text>
            <Heading size="6" className={styles.statValue}>
              {value}
            </Heading>
          </Stack>
          <Button variant="outline" size="1" color="primary">
            View
          </Button>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}
