import { ComponentProps } from '@stitches/react'
import React, { useMemo } from 'react'
import { Header2, Header3 } from '../Text'
import { styles } from './styles'

export const Button: React.FC<
    ComponentProps<typeof styles.Wrapper> & {
        icon?: (props: React.CSSProperties) => JSX.Element
        onDisabledClick?: (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => void
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
            onClick={(e) => {
                if (props.active === false || props.active === 'false') {
                    props?.onDisabledClick?.(e)
                } else {
                    props?.onClick?.(e)
                }
            }}
        >
            {Icon && <Icon width={iconSize} height={iconSize} />}
            <TextComponent>{text}</TextComponent>
        </styles.Wrapper>
    )
}

export default Button
