import { Table, Badge, Text, Flex, Progress } from "@artifact-ui/core";

interface Assignment {
  id: number;
  researcher: string;
  project: string;
  progress: number;
  category: string;
}

interface ResearchAssignmentsProps {
  assignments: Assignment[];
}

export function ResearchAssignments({ assignments }: ResearchAssignmentsProps) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Researcher</Table.HeaderCell>
          <Table.HeaderCell>Project</Table.HeaderCell>
          <Table.HeaderCell>Progress</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {assignments.map((assignment) => (
          <Table.Row key={assignment.id}>
            <Table.Cell>{assignment.researcher}</Table.Cell>
            <Table.Cell>{assignment.project}</Table.Cell>
            <Table.Cell>
              <Flex gap="3" align="center">
                <Progress value={assignment.progress} style={{ flex: 1 }} />
                <Text size="2" color="secondary" style={{ minWidth: "3ch" }}>
                  {assignment.progress}%
                </Text>
              </Flex>
            </Table.Cell>
            <Table.Cell>
              <Badge
                size="1"
                variant="soft"
                color={
                  assignment.category === "Research" ? "neutral" : "primary"
                }
              >
                {assignment.category}
              </Badge>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
