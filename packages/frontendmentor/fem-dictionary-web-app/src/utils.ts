import { ColorScheme, FontConfig } from "./types";

export function getPreferredTheme(): ColorScheme {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ?
        ColorScheme.dark :
        ColorScheme.light
}


export function getFontString(font: FontConfig): string {
    switch (FontConfig) {
            case FontConfig.serif:
              return "serif";
            case FontConfig.mono:
              return "mono";
            case FontConfig.sans:
              return "sans";
            default:
              return "sans";
    }

}
