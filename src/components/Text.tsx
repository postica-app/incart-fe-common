import { styled } from "@stitches/react"
import colors from "../colors"
import "../fonts/seed.css"

const commonStyle = {
    margin: "0px",
    variants: {
        white: {
            true: {
                color: "white",
            },
        },
        spatial: {
            true: {
                lineHeight: 1.5,
            },
        },
        ...(Object.fromEntries(
            Object.entries(colors).map(([colorName, value]) => [
                colorName,
                {
                    true: {
                        color: value,
                    },
                },
            ])
        ) as {
            [key in keyof typeof colors]: {
                true: {
                    color: string
                }
            }
        }),
    },
}

export const Header1 = styled("h1", {
    fontSize: "6rem",
    ...commonStyle,
})

export const Header2 = styled("h2", {
    fontSize: "5rem",
    ...commonStyle,
})

export const Header3 = styled("h3", {
    fontSize: "4rem",
    ...commonStyle,
})

export const Text1 = styled("p", {
    fontSize: "5rem",
    ...commonStyle,
})

export const Text2 = styled("p", {
    fontSize: "4rem",
    ...commonStyle,
})
