import { Avatar, Heading, Text, Stack, Flex, Badge } from "@artifact-ui/core";
import styles from "./active-researchers.module.css";

interface ResearcherItemProps {
  name: string;
  role: string;
  avatar: string;
  status: "active" | "away" | "sabbatical";
}

export function ResearcherItem({
  name,
  role,
  avatar,
  status,
}: ResearcherItemProps) {
  return (
    <Flex gap="3" align="center">
      <Avatar size="3" src={avatar} alt={name} fallback={name.charAt(0)} />
      <Stack gap="1">
        <Heading size="3">{name}</Heading>
        <Text color="secondary" size="2">
          {role}
        </Text>
      </Stack>
      <Badge
        size="1"
        variant="soft"
        color={
          status === "active"
            ? "success"
            : status === "sabbatical"
            ? "info"
            : "neutral"
        }
        className={styles.statusBadge}
      >
        {status}
      </Badge>
    </Flex>
  );
}
