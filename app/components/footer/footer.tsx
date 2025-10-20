import { Flex, Text } from "@artifact-ui/core";
import { Github, Package } from "lucide-react";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Flex justify="between" align="center" className={styles.footerContent}>
        <Text size="2" className={styles.footerText}>
          Artifact UI. Built with Radix UI.
        </Text>
        <Flex gap="6" align="center">
          <a
            href="https://github.com/artifact-ui/core"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
            aria-label="GitHub repository"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.npmjs.com/package/@artifact-ui/core"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
            aria-label="npm package"
          >
            <Package size={20} />
          </a>
        </Flex>
      </Flex>
    </footer>
  );
}
