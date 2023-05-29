import { Hexile } from '@haechi/flexile'
import { styled } from '../../stitches.config'

export const styles = {
    Wrapper: styled(Hexile, {
        backgroundColor: '$grey1',
        borderRadius: '3rem',
        animated: true,
        '&:focus-within': {
            backgroundColor: 'white',
            lightBorder: {
                withShadow: true,
            },
        },
        '&:focus-within div': {
            color: '$purple',
        },
    }),
    IconWrapper: styled('div', {
        padding: '3rem',
        paddingRight: '0rem',
        display: 'grid',
        color: '$grey5',
        variants: {
            disabled: {
                true: {
                    color: '$grey3',
                },
            },
        },
    }),
    LogicalInput: styled('input', {
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        padding: '3rem',
        flex: 1,
        '&:disabled': {
            color: '$grey3',
            '&::placeholder': {
                color: '$grey3',
            },
        },
    }),
    LabelWithDisableTooltip: styled('label', {
        variants: {
            disabled: {
                true: {
                    cursor: 'not-allowed',

                    '&::after': {
                        content: '수정할 수 없습니다',
                        backgroundColor: 'white',
                        borderRadius: '3rem',
                        color: '$purple',
                        fontSize: '4rem',
                        lineHeight: '6.5rem',

                        lightBorder: {
                            withShadow: true,
                        },
                        padding: '3rem 4rem',
                        position: 'absolute',
                        marginTop: '-12rem',

                        height: '6rem',
                        marginLeft: '9rem',
                        opacity: 0,
                        animated: true,
                    },
                    '&:hover::after': {
                        opacity: 1,
                        marginLeft: '10rem',
                    },
                },
            },
        },
    }),
}
