import React, { CSSProperties, useMemo } from 'react'
import { ComponentProps } from '@stitches/react'

import { ViewArea, IconStack, styles, Spinner } from './styles'
import { Header2, Header3 } from '../Text'
import { css } from '../../lib'

export const Button: React.FC<
    ComponentProps<typeof styles.Wrapper> & {
        icon?: (props: { className: string }) => JSX.Element
        onDisabledClick?: (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => void
        loading?: boolean
    }
> = React.forwardRef(
    ({ children: text, icon: Icon, loading, active = true, ...props }, ref) => {
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

        const disabled = props.disabled || loading || !active

        return (
            <styles.Wrapper
                ref={ref}
                {...props}
                disabled={disabled}
                active={!disabled}
                onClick={(e) => {
                    if (!active || active === 'false') {
                        props?.onDisabledClick?.(e)
                    } else {
                        props?.onClick?.(e)
                    }
                }}
            >
                {Icon && (
                    <ViewArea
                        style={{
                            width: iconSize,
                            height: iconSize,
                        }}
                    >
                        <IconStack
                            showBottom={loading}
                            style={
                                {
                                    '--icon-size': iconSize,
                                } as CSSProperties
                            }
                        >
                            <Icon
                                className={css({
                                    width: iconSize,
                                    height: iconSize,
                                    opacity: +!loading,
                                    animated: true,
                                })()}
                            />
                            <Spinner
                                style={{
                                    width: iconSize,
                                    height: iconSize,
                                    opacity: +!!loading,
                                }}
                            />
                        </IconStack>
                    </ViewArea>
                )}
                <TextComponent linebreak={false}>{text}</TextComponent>
            </styles.Wrapper>
        )
    }
)

export default Button
