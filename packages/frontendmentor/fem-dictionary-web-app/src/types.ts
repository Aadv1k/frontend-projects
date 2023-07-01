export enum FontConfig {
    mono = "mono",
    serif = "serif",
    sans = "sans"
}

export enum ColorScheme {
    dark,
    light,
}


export interface Theme {
    color: ColorScheme,
    font: FontConfig
}
