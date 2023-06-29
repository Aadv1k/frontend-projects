import { ColorScheme } from "./types";

export function getPreferredTheme(): ColorScheme {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ?
        ColorScheme.dark :
        ColorScheme.light
}
