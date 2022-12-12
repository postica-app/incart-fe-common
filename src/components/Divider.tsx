import { styled } from "../stitches.config"

export const Divider = styled("hr", {
    margin: "0px",
    border: "none",
    backgroundColor: "$grey2",
    variants: {
        orientation: {
            landscape: {
                height: "0.5rem",
            },
            portrait: {
                width: "0.5rem",
            },
        },
    },
    defaultVariants: {
        orientation: "landscape",
    },
})
