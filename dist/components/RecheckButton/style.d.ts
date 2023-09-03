export declare const Wrapper: import("@stitches/react/types/styled-component").StyledComponent<"div", {}, {
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
        readonly redTrans: "rgba(230 108 108 / 0.4)";
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
        readonly redTrans: "rgba(230 108 108 / 0.4)";
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
        withShadow?: boolean | undefined;
        color?: string | undefined;
    }) => {
        boxShadow: string;
    };
    animated: () => {
        transition: string;
        animationTimingFunction: string;
        animationDuration: string;
    };
    clickAnimation: () => {
        animated: boolean;
        cursor: string;
        '&:active': {
            filter: string;
            boxShadow: string;
            transform: string;
        };
    };
}>>;
