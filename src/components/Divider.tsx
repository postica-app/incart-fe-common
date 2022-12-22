import colors from '../colors'
import { styled } from '../stitches.config'

export const Divider = styled('hr', {
    margin: '0px',
    border: 'none',
    backgroundColor: '$grey2',
    variants: {
        orientation: {
            landscape: {
                height: '0.5rem',
            },
            portrait: {
                width: '0.5rem',
            },
        },
        ...(Object.fromEntries(
            Object.entries(colors).map(([colorName, value]) => [
                colorName,
                {
                    true: {
                        backgroundColor: value,
                    },
                },
            ])
        ) as {
            [key in keyof typeof colors]: {
                true: {
                    backgroundColor: string
                }
            }
        }),
    },
    defaultVariants: {
        orientation: 'landscape',
    },
})
