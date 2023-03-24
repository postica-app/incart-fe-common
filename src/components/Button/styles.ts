import { keyframes, styled } from '../../stitches.config'

const shake = keyframes({
    // shake rotate
    '0%': { transform: 'rotate(0deg)' },
    '10%, 30%, 50%, 70%, 90%': { transform: 'rotate(-10deg)' },
    '20%, 40%, 60%, 80%': { transform: 'rotate(10deg)' },
})

export const styles = {
    Wrapper: styled('button', {
        display: 'flex',
        outline: 'none',
        gap: '1rem',
        borderRadius: '12rem',
        border: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        animated: true,
        boxSizing: 'border-box',
        compoundVariants: [
            {
                ghost: true,
                active: true,
                css: {
                    border: '0.5rem solid $purpleLight',
                    color: '$purple',
                    backgroundColor: 'white',
                    elevated: true,
                    '&:active': {
                        filter: 'blur(1px) brightness(97%) saturate(90%)',
                        boxShadow: 'inset 0px 1rem 2rem rgba(0, 0, 0, 0.1)',
                    },
                    '&:focus, &:hover': {
                        backgroundColor: '$purpleLight',
                        '& svg': {
                            animation: `${shake} 3s ease-in-out infinite`,
                        },
                    },
                },
            },
            {
                ghost: true,
                active: false,
                css: {
                    border: '0.5rem solid $grey2',
                    color: '$grey4',
                    backgroundColor: 'white',
                },
            },
            {
                ghost: false,
                active: true,
                css: {
                    '&:active': {
                        filter: 'brightness(150%) saturate(80%)',
                        opacity: 1,
                    },
                    '&:focus:not(:active), &:hover:not(:active)': {
                        opacity: 0.8,
                    },
                    '&:focus, &:hover': {
                        elevated: true,
                        lightBorder: {
                            withShadow: true,
                        },
                        '& svg': {
                            animation: `${shake} 3s ease-in-out infinite`,
                        },
                    },
                    backgroundColor: '$purple',
                    color: 'white',
                },
            },
            {
                ghost: false,
                active: false,
                css: {
                    backgroundColor: '$grey4',
                    color: 'white',
                },
            },
        ],
        // "--border-color": "$grey2",
        // "--fill-color": "$grey4",
        variants: {
            size: {
                normal: {
                    padding: '3rem 5rem',
                },
                small: {
                    padding: '2rem 3rem',
                },
            },
            active: {
                false: {
                    cursor: 'not-allowed',
                },
                true: {
                    cursor: 'pointer',
                    '&:active': {
                        transform: 'scale(0.98)',
                    },
                },
            },
            ghost: {
                true: {},
                false: {},
            },
        },
        defaultVariants: {
            active: true,
            ghost: false,
            size: 'normal',
        },
    }),
}
