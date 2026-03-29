/**
 * ThemeScript — Blocking inline script to prevent flash of wrong theme (FOUC).
 *
 * Reads the user's preference from localStorage. Falls back to the system
 * prefers-color-scheme media query. Runs before React hydrates so the
 * correct .dark class is already on <html> when the first paint happens.
 *
 * This is a server component — it renders a <script> tag with
 * dangerouslySetInnerHTML so the code executes synchronously in <head>.
 */

const THEME_SCRIPT = `
(function() {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var dark = stored === "dark" || (!stored && prefersDark);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {}
})();
`;

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }}
    />
  );
}
