import { ComponentProps } from '@stitches/react'
import React, { useMemo } from 'react'
import { Header2, Header3 } from '../Text'
import { styles } from './styles'

export const Button: React.FC<
    ComponentProps<typeof styles.Wrapper> & {
        icon?: (props: React.CSSProperties) => JSX.Element
    }
> = ({ children: text, icon: Icon, ...props }) => {
    const { TextComponent, iconSize } = useMemo(
        () =>
            props.size === 'small'
                ? {
                      TextComponent: Header3,
                      iconSize: '4rem',
                  }
                : {
                      TextComponent: Header2,
                      iconSize: '5rem',
                  },
        [props.size]
    )

    return (
        <styles.Wrapper
            {...props}
            disabled={props.active === false || props.active === 'false'}
        >
            {Icon && <Icon width={iconSize} height={iconSize} />}
            <TextComponent>{text}</TextComponent>
        </styles.Wrapper>
    )
}

export default Button
