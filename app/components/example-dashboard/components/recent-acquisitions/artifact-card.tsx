import { Card, Heading, Text, Stack, IconButton } from "@artifact-ui/core";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import styles from "./recent-acquisitions.module.css";

interface ArtifactCardProps {
  title: string;
  period: string;
  image: string;
}

export function ArtifactCard({ title, period, image }: ArtifactCardProps) {
  return (
    <Card.Root shadow="paper">
      <div className={styles.artifactImage}>
        <Image src={image} alt={title} width={400} height={300} />
        <IconButton
          icon={<Ellipsis />}
          label="Options"
          variant="ghost"
          color="neutral"
          size="1"
          className={styles.artifactMenu}
        />
      </div>
      <Card.Body>
        <Stack gap="1">
          <Heading size="3">{title}</Heading>
          <Text color="secondary" size="2">
            {period}
          </Text>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
