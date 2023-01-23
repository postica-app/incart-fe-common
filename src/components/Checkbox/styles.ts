import { styled } from '../../stitches.config'

export const styles = {
    Box: styled('input', {
        margin: '0px',
        width: '6rem',
        height: '6rem',
        appearance: 'none',
        boxShadow: 'inset 0px 0px 0px 1rem $grey3',
        borderRadius: '2rem',
        flexShrink: 0,
        '&:checked': {
            boxShadow: 'inset 0px 0px 0px 1rem $purple',
            display: 'grid',
            placeItems: 'center',
            '&::after': {
                width: '2rem',
                height: '2rem',
                backgroundColor: '$purple',
                display: 'block',
                content: '',
                borderRadius: '0.5rem',
            },
        },
    }),
}

styles.Box.defaultProps = {
    type: 'checkbox',
}
