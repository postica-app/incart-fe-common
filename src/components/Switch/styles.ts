import { Hexile } from '@haechi/flexile'
import { styled } from '../../stitches.config'

export default {
    Background: styled(Hexile, {
        backgroundColor: '$grey1',
        borderRadius: '3rem',
    }),
    Item: styled(Hexile, {
        color: '$grey5',
        zIndex: 1,
        variants: {
            active: {
                true: {
                    color: 'black',
                },
            },
        },
    }),
    IndicatorWrapper: styled('div', {
        position: 'absolute',
        height: '100%',
        top: '0px',
        left: '0px',
        padding: '1rem',
        boxSizing: 'border-box',
        animated: true,
    }),
    Indicator: styled('div', {
        backgroundColor: 'white',
        height: '100%',
        borderRadius: '2rem',
        elevated: true,
        clickAnimation: true,
        lightBorder: {
            withShadow: true,
        },
    }),
}
