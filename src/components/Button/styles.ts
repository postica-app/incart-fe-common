import { styled } from "../../stitches.config"

export const styles = {
    Wrapper: styled("button", {
        display: "flex",
        outline: "none",
        gap: "1rem",
        borderRadius: "12rem",
        border: "none",
        alignItems: "center",
        compoundVariants: [
            {
                ghost: true,
                active: true,
                css: {
                    border: "0.5rem solid $purpleLight",
                    color: "$purple",
                    backgroundColor: "white",
                },
            },
            {
                ghost: true,
                active: false,
                css: {
                    border: "0.5rem solid $grey2",
                    color: "$grey4",
                    backgroundColor: "white",
                },
            },
            {
                ghost: false,
                active: true,
                css: {
                    backgroundColor: "$purple",
                    color: "white",
                },
            },
            {
                ghost: false,
                active: false,
                css: {
                    backgroundColor: "$grey4",
                    color: "white",
                },
            },
        ],
        // "--border-color": "$grey2",
        // "--fill-color": "$grey4",
        variants: {
            size: {
                normal: {
                    padding: "3rem 5rem",
                },
                small: {
                    padding: "2rem 3rem",
                },
            },
            active: {
                false: {
                    // "--border-color": "$purpleLight",
                    // "--fill-color": "$purple",
                },
                true: {
                    // "--border-color": "$grey2",
                    // "--fill-color": "$grey4",
                },
            },
            ghost: {
                true: {
                    // border: "0.5rem solid var(--fill-color)",
                    // color: "var(--fill-color)",
                    // backgroundColor: "white",
                    elevated: true,
                },
                false: {
                    // backgroundColor: "var(--fill-color)",
                    // color: "white",
                },
            },
        },
        defaultVariants: {
            active: true,
            ghost: false,
            size: "normal",
        },
    }),
}
