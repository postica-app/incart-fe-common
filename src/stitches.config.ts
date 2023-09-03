import { createStitches } from '@stitches/react'
import colors from './colors'

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
        shadows: colors,
    },
    utils: {
        elevated: () => ({
            boxShadow: '0px 1rem 2rem rgba(0, 0, 0, 0.1)',
        }),
        lightBorder: (config: { withShadow?: boolean; color?: string }) =>
            config.withShadow
                ? {
                      boxShadow:
                          '0px 1rem 2rem rgba(0, 0, 0, 0.1), inset 0rem 0rem 0rem 0.5rem ' +
                          (config.color || '$purpleLight'),
                  }
                : {
                      boxShadow:
                          'inset 0rem 0rem 0rem 0.5rem ' +
                          (config.color || '$purpleLight'),
                  },
        animated: () => ({
            transition: '300ms cubic-bezier(0,.67,0,.99)',
            animationTimingFunction: 'cubic-bezier(0,.67,0,.99)',
            animationDuration: '300ms',
        }),
        clickAnimation: () => ({
            animated: true,
            cursor: 'pointer',
            '&:active': {
                filter: 'blur(1px) brightness(97%) saturate(90%)',
                boxShadow: 'inset 0px 1rem 2rem rgba(0, 0, 0, 0.1)',
                transform: 'scale(0.98)',
            },
        }),
    },
    media: {
        phone: '(max-width: 480px)',
        tablet: '(max-width: 1200px)',
    },
})
