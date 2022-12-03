import { createStitches } from "@stitches/react"
import colors from "./colors"

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors,
    },
    utils: {
        elevated: () => ({
            boxShadow: "0px 1rem 2rem rgba(0, 0, 0, 0.1)",
        }),
        lightBorder: () => ({
            border: "0.5rem solid $purpleLight",
            boxSizing: "border-box",
        }),
        animated: () => ({
            transition: "300ms cubic-bezier(0,.67,0,.99)",
        }),
    },
})
