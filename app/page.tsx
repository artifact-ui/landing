import { Button, Text, Stack, Flex } from "@artifact-ui/core";
import styles from "./page.module.css";
import { Logo } from "./components/logo";
import { FeatureGrid } from "./components/feature/feature-grid";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Stack gap="8" align="center" className={styles.hero}>
          <Logo className={styles.logo} />
          <Text size="5" className={styles.subtitle}>
            Lightweight React components built on Radix primitives
          </Text>
          <Flex gap="3" justify="center" className={styles.ctas}>
            <a
              href="https://storybook.artifact-ui.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" color="primary" size="3">
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
                size="3"
                className={styles.mono}
              >
                npm install @artifact-ui/core
              </Button>
            </a>
          </Flex>
        </Stack>

        <FeatureGrid />
      </main>
    </div>
  );
}
