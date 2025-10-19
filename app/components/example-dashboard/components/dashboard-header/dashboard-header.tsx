import { Heading, Text, Stack, Flex, Select } from "@artifact-ui/core";
import { Landmark } from "lucide-react";

export function DashboardHeader() {
  return (
    <Flex justify="between" align="center">
      <Stack gap="2">
        <Heading size="7" iconLeft={<Landmark />}>
          Artifact Collection Dashboard
        </Heading>
        <Text color="secondary" size="3">
          Museum Artifact Management System
        </Text>
      </Stack>
      <Flex gap="3" align="center">
        <Select.Root defaultValue="30" size="2">
          <Select.Trigger style={{ minWidth: "150px" }}>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="30">Last 30 days</Select.Item>
            <Select.Item value="90">Last 90 days</Select.Item>
            <Select.Item value="all">All time</Select.Item>
          </Select.Content>
        </Select.Root>
        <Select.Root defaultValue="all" size="2">
          <Select.Trigger style={{ minWidth: "150px" }}>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="all">All Collections</Select.Item>
            <Select.Item value="pottery">Pottery</Select.Item>
            <Select.Item value="tools">Tools</Select.Item>
            <Select.Item value="textiles">Textiles</Select.Item>
            <Select.Item value="stone">Stone Carvings</Select.Item>
          </Select.Content>
        </Select.Root>
      </Flex>
    </Flex>
  );
}
