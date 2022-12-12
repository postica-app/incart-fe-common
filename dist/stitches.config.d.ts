export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
    phone: "(max-width: 480px)";
    tablet: "(max-width: 1200px)";
}, {
    colors: {
        readonly purple: "#6A23C6";
        readonly purpleLight: "#E5D4FA";
        readonly blue: "#238FC6";
        readonly blueLight: "#EFF2F3";
        readonly red: "#E66C6C";
        readonly redLight: "#F3EFEF";
        readonly grey1: "#F1EFF3";
        readonly grey2: "#D2CCD9";
        readonly grey3: "#C0B9C8";
        readonly grey4: "#A198AD";
        readonly grey5: "#62576E";
    };
    shadows: {
        readonly purple: "#6A23C6";
        readonly purpleLight: "#E5D4FA";
        readonly blue: "#238FC6";
        readonly blueLight: "#EFF2F3";
        readonly red: "#E66C6C";
        readonly redLight: "#F3EFEF";
        readonly grey1: "#F1EFF3";
        readonly grey2: "#D2CCD9";
        readonly grey3: "#C0B9C8";
        readonly grey4: "#A198AD";
        readonly grey5: "#62576E";
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    elevated: () => {
        boxShadow: string;
    };
    lightBorder: (config: {
        withShadow?: boolean;
        color?: string;
    }) => {
        boxShadow: string;
    };
    animated: () => {
        transition: string;
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    phone: "(max-width: 480px)";
    tablet: "(max-width: 1200px)";
}, import("@stitches/react/types/css-util").CSS<{
    phone: "(max-width: 480px)";
    tablet: "(max-width: 1200px)";
}, {
    colors: {
        readonly purple: "#6A23C6";
        readonly purpleLight: "#E5D4FA";
        readonly blue: "#238FC6";
        readonly blueLight: "#EFF2F3";
        readonly red: "#E66C6C";
        readonly redLight: "#F3EFEF";
        readonly grey1: "#F1EFF3";
        readonly grey2: "#D2CCD9";
        readonly grey3: "#C0B9C8";
        readonly grey4: "#A198AD";
        readonly grey5: "#62576E";
    };
    shadows: {
        readonly purple: "#6A23C6";
        readonly purpleLight: "#E5D4FA";
        readonly blue: "#238FC6";
        readonly blueLight: "#EFF2F3";
        readonly red: "#E66C6C";
        readonly redLight: "#F3EFEF";
        readonly grey1: "#F1EFF3";
        readonly grey2: "#D2CCD9";
        readonly grey3: "#C0B9C8";
        readonly grey4: "#A198AD";
        readonly grey5: "#62576E";
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    elevated: () => {
        boxShadow: string;
    };
    lightBorder: (config: {
        withShadow?: boolean;
        color?: string;
    }) => {
        boxShadow: string;
    };
    animated: () => {
        transition: string;
    };
}>>, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | import("react").JSXElementConstructor<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{
    phone: "(max-width: 480px)";
    tablet: "(max-width: 1200px)";
}, {
    colors: {
        readonly purple: "#6A23C6";
        readonly purpleLight: "#E5D4FA";
        readonly blue: "#238FC6";
        readonly blueLight: "#EFF2F3";
        readonly red: "#E66C6C";
        readonly redLight: "#F3EFEF";
        readonly grey1: "#F1EFF3";
        readonly grey2: "#D2CCD9";
        readonly grey3: "#C0B9C8";
        readonly grey4: "#A198AD";
        readonly grey5: "#62576E";
    };
    shadows: {
        readonly purple: "#6A23C6";
        readonly purpleLight: "#E5D4FA";
        readonly blue: "#238FC6";
        readonly blueLight: "#EFF2F3";
        readonly red: "#E66C6C";
        readonly redLight: "#F3EFEF";
        readonly grey1: "#F1EFF3";
        readonly grey2: "#D2CCD9";
        readonly grey3: "#C0B9C8";
        readonly grey4: "#A198AD";
        readonly grey5: "#62576E";
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    elevated: () => {
        boxShadow: string;
    };
    lightBorder: (config: {
        withShadow?: boolean;
        color?: string;
    }) => {
        boxShadow: string;
    };
    animated: () => {
        transition: string;
    };
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ExoticComponent<any> | import("react").JSXElementConstructor<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : never : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    phone: "(max-width: 480px)";
    tablet: "(max-width: 1200px)";
}, CSS>, globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{
        phone: "(max-width: 480px)";
        tablet: "(max-width: 1200px)";
    }, {
        colors: {
            readonly purple: "#6A23C6";
            readonly purpleLight: "#E5D4FA";
            readonly blue: "#238FC6";
            readonly blueLight: "#EFF2F3";
            readonly red: "#E66C6C";
            readonly redLight: "#F3EFEF";
            readonly grey1: "#F1EFF3";
            readonly grey2: "#D2CCD9";
            readonly grey3: "#C0B9C8";
            readonly grey4: "#A198AD";
            readonly grey5: "#62576E";
        };
        shadows: {
            readonly purple: "#6A23C6";
            readonly purpleLight: "#E5D4FA";
            readonly blue: "#238FC6";
            readonly blueLight: "#EFF2F3";
            readonly red: "#E66C6C";
            readonly redLight: "#F3EFEF";
            readonly grey1: "#F1EFF3";
            readonly grey2: "#D2CCD9";
            readonly grey3: "#C0B9C8";
            readonly grey4: "#A198AD";
            readonly grey5: "#62576E";
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        elevated: () => {
            boxShadow: string;
        };
        lightBorder: (config: {
            withShadow?: boolean;
            color?: string;
        }) => {
            boxShadow: string;
        };
        animated: () => {
            transition: string;
        };
    }>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{
    phone: "(max-width: 480px)";
    tablet: "(max-width: 1200px)";
}, {
    colors: {
        readonly purple: "#6A23C6";
        readonly purpleLight: "#E5D4FA";
        readonly blue: "#238FC6";
        readonly blueLight: "#EFF2F3";
        readonly red: "#E66C6C";
        readonly redLight: "#F3EFEF";
        readonly grey1: "#F1EFF3";
        readonly grey2: "#D2CCD9";
        readonly grey3: "#C0B9C8";
        readonly grey4: "#A198AD";
        readonly grey5: "#62576E";
    };
    shadows: {
        readonly purple: "#6A23C6";
        readonly purpleLight: "#E5D4FA";
        readonly blue: "#238FC6";
        readonly blueLight: "#EFF2F3";
        readonly red: "#E66C6C";
        readonly redLight: "#F3EFEF";
        readonly grey1: "#F1EFF3";
        readonly grey2: "#D2CCD9";
        readonly grey3: "#C0B9C8";
        readonly grey4: "#A198AD";
        readonly grey5: "#62576E";
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    elevated: () => {
        boxShadow: string;
    };
    lightBorder: (config: {
        withShadow?: boolean;
        color?: string;
    }) => {
        boxShadow: string;
    };
    animated: () => {
        transition: string;
    };
}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{
        phone: "(max-width: 480px)";
        tablet: "(max-width: 1200px)";
    }, {
        colors: {
            readonly purple: "#6A23C6";
            readonly purpleLight: "#E5D4FA";
            readonly blue: "#238FC6";
            readonly blueLight: "#EFF2F3";
            readonly red: "#E66C6C";
            readonly redLight: "#F3EFEF";
            readonly grey1: "#F1EFF3";
            readonly grey2: "#D2CCD9";
            readonly grey3: "#C0B9C8";
            readonly grey4: "#A198AD";
            readonly grey5: "#62576E";
        };
        shadows: {
            readonly purple: "#6A23C6";
            readonly purpleLight: "#E5D4FA";
            readonly blue: "#238FC6";
            readonly blueLight: "#EFF2F3";
            readonly red: "#E66C6C";
            readonly redLight: "#F3EFEF";
            readonly grey1: "#F1EFF3";
            readonly grey2: "#D2CCD9";
            readonly grey3: "#C0B9C8";
            readonly grey4: "#A198AD";
            readonly grey5: "#62576E";
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        elevated: () => {
            boxShadow: string;
        };
        lightBorder: (config: {
            withShadow?: boolean;
            color?: string;
        }) => {
            boxShadow: string;
        };
        animated: () => {
            transition: string;
        };
    }>;
}) => {
    (): string;
    name: string;
}, getCssText: () => string, theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        readonly purple: import("@stitches/react/types/theme").Token<"purple", string, "colors", "">;
        readonly purpleLight: import("@stitches/react/types/theme").Token<"purpleLight", string, "colors", "">;
        readonly blue: import("@stitches/react/types/theme").Token<"blue", string, "colors", "">;
        readonly blueLight: import("@stitches/react/types/theme").Token<"blueLight", string, "colors", "">;
        readonly red: import("@stitches/react/types/theme").Token<"red", string, "colors", "">;
        readonly redLight: import("@stitches/react/types/theme").Token<"redLight", string, "colors", "">;
        readonly grey1: import("@stitches/react/types/theme").Token<"grey1", string, "colors", "">;
        readonly grey2: import("@stitches/react/types/theme").Token<"grey2", string, "colors", "">;
        readonly grey3: import("@stitches/react/types/theme").Token<"grey3", string, "colors", "">;
        readonly grey4: import("@stitches/react/types/theme").Token<"grey4", string, "colors", "">;
        readonly grey5: import("@stitches/react/types/theme").Token<"grey5", string, "colors", "">;
    };
    shadows: {
        readonly purple: import("@stitches/react/types/theme").Token<"purple", string, "shadows", "">;
        readonly purpleLight: import("@stitches/react/types/theme").Token<"purpleLight", string, "shadows", "">;
        readonly blue: import("@stitches/react/types/theme").Token<"blue", string, "shadows", "">;
        readonly blueLight: import("@stitches/react/types/theme").Token<"blueLight", string, "shadows", "">;
        readonly red: import("@stitches/react/types/theme").Token<"red", string, "shadows", "">;
        readonly redLight: import("@stitches/react/types/theme").Token<"redLight", string, "shadows", "">;
        readonly grey1: import("@stitches/react/types/theme").Token<"grey1", string, "shadows", "">;
        readonly grey2: import("@stitches/react/types/theme").Token<"grey2", string, "shadows", "">;
        readonly grey3: import("@stitches/react/types/theme").Token<"grey3", string, "shadows", "">;
        readonly grey4: import("@stitches/react/types/theme").Token<"grey4", string, "shadows", "">;
        readonly grey5: import("@stitches/react/types/theme").Token<"grey5", string, "shadows", "">;
    };
}, createTheme: <Argument0 extends string | ({
    colors?: {
        readonly purple?: string | number | boolean | undefined;
        readonly purpleLight?: string | number | boolean | undefined;
        readonly blue?: string | number | boolean | undefined;
        readonly blueLight?: string | number | boolean | undefined;
        readonly red?: string | number | boolean | undefined;
        readonly redLight?: string | number | boolean | undefined;
        readonly grey1?: string | number | boolean | undefined;
        readonly grey2?: string | number | boolean | undefined;
        readonly grey3?: string | number | boolean | undefined;
        readonly grey4?: string | number | boolean | undefined;
        readonly grey5?: string | number | boolean | undefined;
    } | undefined;
    shadows?: {
        readonly purple?: string | number | boolean | undefined;
        readonly purpleLight?: string | number | boolean | undefined;
        readonly blue?: string | number | boolean | undefined;
        readonly blueLight?: string | number | boolean | undefined;
        readonly red?: string | number | boolean | undefined;
        readonly redLight?: string | number | boolean | undefined;
        readonly grey1?: string | number | boolean | undefined;
        readonly grey2?: string | number | boolean | undefined;
        readonly grey3?: string | number | boolean | undefined;
        readonly grey4?: string | number | boolean | undefined;
        readonly grey5?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        readonly purple?: string | number | boolean | undefined;
        readonly purpleLight?: string | number | boolean | undefined;
        readonly blue?: string | number | boolean | undefined;
        readonly blueLight?: string | number | boolean | undefined;
        readonly red?: string | number | boolean | undefined;
        readonly redLight?: string | number | boolean | undefined;
        readonly grey1?: string | number | boolean | undefined;
        readonly grey2?: string | number | boolean | undefined;
        readonly grey3?: string | number | boolean | undefined;
        readonly grey4?: string | number | boolean | undefined;
        readonly grey5?: string | number | boolean | undefined;
    } | undefined;
    shadows?: {
        readonly purple?: string | number | boolean | undefined;
        readonly purpleLight?: string | number | boolean | undefined;
        readonly blue?: string | number | boolean | undefined;
        readonly blueLight?: string | number | boolean | undefined;
        readonly red?: string | number | boolean | undefined;
        readonly redLight?: string | number | boolean | undefined;
        readonly grey1?: string | number | boolean | undefined;
        readonly grey2?: string | number | boolean | undefined;
        readonly grey3?: string | number | boolean | undefined;
        readonly grey4?: string | number | boolean | undefined;
        readonly grey5?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/react/types/stitches").ThemeTokens<Argument1, ""> : import("@stitches/react/types/stitches").ThemeTokens<Argument0, "">), config: {
    prefix: "";
    media: {
        phone: "(max-width: 480px)";
        tablet: "(max-width: 1200px)";
    };
    theme: {
        colors: {
            readonly purple: "#6A23C6";
            readonly purpleLight: "#E5D4FA";
            readonly blue: "#238FC6";
            readonly blueLight: "#EFF2F3";
            readonly red: "#E66C6C";
            readonly redLight: "#F3EFEF";
            readonly grey1: "#F1EFF3";
            readonly grey2: "#D2CCD9";
            readonly grey3: "#C0B9C8";
            readonly grey4: "#A198AD";
            readonly grey5: "#62576E";
        };
        shadows: {
            readonly purple: "#6A23C6";
            readonly purpleLight: "#E5D4FA";
            readonly blue: "#238FC6";
            readonly blueLight: "#EFF2F3";
            readonly red: "#E66C6C";
            readonly redLight: "#F3EFEF";
            readonly grey1: "#F1EFF3";
            readonly grey2: "#D2CCD9";
            readonly grey3: "#C0B9C8";
            readonly grey4: "#A198AD";
            readonly grey5: "#62576E";
        };
    };
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {
        elevated: () => {
            boxShadow: string;
        };
        lightBorder: (config: {
            withShadow?: boolean;
            color?: string;
        }) => {
            boxShadow: string;
        };
        animated: () => {
            transition: string;
        };
    };
};
