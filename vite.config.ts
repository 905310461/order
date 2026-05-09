import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub Project Pages serves the app at https://<user>.github.io/<repo>/
 * Set BASE_PATH in CI (e.g. /my-repo/). User/org site repos named *.github.io use /.
 */
function resolveBase(): string {
  const raw = process.env.BASE_PATH?.trim();
  if (!raw || raw === "/") return "/";
  const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
}

export default defineConfig({
  plugins: [react()],
  base: resolveBase(),
});
