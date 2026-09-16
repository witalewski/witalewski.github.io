"use client";

import { PaperTexture } from "@paper-design/shaders-react";
import { useSyncExternalStore } from "react";

const darkModeQuery = "(prefers-color-scheme: dark)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(darkModeQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(darkModeQuery).matches;
}

function getServerSnapshot() {
  return null;
}

export function PaperSurface({ image }: { image?: string }) {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return isDark === null ? null : (
    <PaperTexture
      image={image}
      width="100%"
      height="100%"
      colorBack={isDark ? "#000000" : "#ffffff"}
      colorFront={isDark ? "#978653" : "#d4cbaa"}
      contrast={0.07}
      roughness={0.4}
      fiber={0.3}
      fiberSize={0.2}
      crumples={0.3}
      crumpleSize={0.35}
      folds={0.65}
      foldCount={5}
      fade={0}
      drops={0}
      seed={6}
      // Image UVs share the texture scale; fill the circular crop with a small bleed.
      scale={image ? 1.05 : 0.6}
      fit="cover"
    />
  );
}

export default function PaperBackground() {
  return (
    <div className="paper-background" aria-hidden="true">
      <PaperSurface />
    </div>
  );
}
