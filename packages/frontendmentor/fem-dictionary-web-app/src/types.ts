export enum FontConfig {
    mono,
    serif,
    sans
}

export enum ColorScheme {
    dark,
    light,
}


export interface Theme {
    color: ColorScheme,
    font: FontConfig
}
