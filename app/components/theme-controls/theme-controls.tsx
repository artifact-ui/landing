"use client";

import { useState } from "react";
import {
  Button,
  IconButton,
  Modal,
  Stack,
  Flex,
  Heading,
  Tooltip,
} from "@artifact-ui/core";
import { Settings } from "lucide-react";
import styles from "./theme-controls.module.css";

const accents = [
  { value: "obsidian", label: "Obsidian" },
  { value: "sage", label: "Sage" },
  { value: "twilight", label: "Twilight" },
  { value: "canopy", label: "Canopy" },
  { value: "blush", label: "Blush" },
  { value: "patina", label: "Patina" },
  { value: "meridian", label: "Meridian" },
  { value: "clay", label: "Clay" },
  { value: "amber", label: "Amber" },
  { value: "crimson", label: "Crimson" },
] as const;

const radiusOptions = [
  { value: "none", label: "None" },
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "full", label: "Full" },
] as const;

const themeOptions = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
] as const;

export function ThemeControls() {
  const [open, setOpen] = useState(false);
  const [currentAccent, setCurrentAccent] = useState("patina");
  const [currentRadius, setCurrentRadius] = useState("full");
  const [currentTheme, setCurrentTheme] = useState("system");

  const handleAccentChange = (accent: string) => {
    setCurrentAccent(accent);
    localStorage.setItem("artifact-theme-accent", accent);
    document.documentElement.setAttribute("data-accent", accent);
  };

  const handleRadiusChange = (radius: string) => {
    setCurrentRadius(radius);
    localStorage.setItem("artifact-theme-radius", radius);
    document.documentElement.setAttribute("data-radius", radius);
  };

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem("artifact-theme", theme);

    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const resolvedTheme =
      theme === "system" ? (systemDark ? "dark" : "light") : theme;

    document.documentElement.setAttribute("data-theme", resolvedTheme);
  };

  return (
    <>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <IconButton
            icon={<Settings />}
            label="Theme settings"
            onClick={() => setOpen(true)}
            className={styles.floatingButton}
            variant="default"
            color="primary"
            size="3"
          />
        </Tooltip.Trigger>
        <Tooltip.Content side="left">Customize theme</Tooltip.Content>
      </Tooltip.Root>

      <Modal.Root open={open} onOpenChange={setOpen}>
        <Modal.Content className={styles.modalContent}>
          <Modal.Header>
            <Modal.Title>Theme Settings</Modal.Title>
            <Modal.Description>
              Customize the appearance of the site
            </Modal.Description>
          </Modal.Header>

          <Modal.Body>
            <Stack gap="6">
              <div>
                <Heading size="3">Accent Color</Heading>
                <Flex gap="2" className={styles.accentGrid} style={{ marginTop: "var(--space-3)" }}>
                  {accents.map((accent) => (
                    <button
                      key={accent.value}
                      onClick={() => handleAccentChange(accent.value)}
                      className={styles.accentSwatch}
                      data-accent={accent.value}
                      data-selected={currentAccent === accent.value}
                      aria-label={accent.label}
                    />
                  ))}
                </Flex>
              </div>

              <div>
                <Heading size="3">Border Radius</Heading>
                <Flex gap="2" style={{ marginTop: "var(--space-3)" }}>
                  {radiusOptions.map((radius) => (
                    <Button
                      key={radius.value}
                      onClick={() => handleRadiusChange(radius.value)}
                      variant={
                        currentRadius === radius.value ? "default" : "outline"
                      }
                      color="neutral"
                      size="2"
                    >
                      {radius.label}
                    </Button>
                  ))}
                </Flex>
              </div>

              <div>
                <Heading size="3">Theme</Heading>
                <Flex gap="2" style={{ marginTop: "var(--space-3)" }}>
                  {themeOptions.map((theme) => (
                    <Button
                      key={theme.value}
                      onClick={() => handleThemeChange(theme.value)}
                      variant={
                        currentTheme === theme.value ? "default" : "outline"
                      }
                      color="neutral"
                      size="2"
                    >
                      {theme.label}
                    </Button>
                  ))}
                </Flex>
              </div>
            </Stack>
          </Modal.Body>

          <Modal.Footer>
            <Button
              onClick={() => setOpen(false)}
              variant="default"
              color="primary"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </>
  );
}
