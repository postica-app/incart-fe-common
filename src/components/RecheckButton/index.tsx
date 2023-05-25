import { ComponentProps, useState } from 'react'
import { Button, css } from '../../lib'
import Refresh from '../../icons/Refresh.svg'
import { Wrapper } from './style'

export const RecheckButton: React.FC<
    ComponentProps<typeof Button> & {
        onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
        onDisabledClick?: (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => void
    }
> = (props) => {
    const [isTouched, setIsTouched] = useState(false)
    const [itemHeight, setItemHeight] = useState<number | null>(null)

    return (
        <Wrapper
            css={{
                height: itemHeight + 'px',
            }}
        >
            <Button
                {...props}
                ref={(e) =>
                    setItemHeight(e?.getBoundingClientRect()?.height || null)
                }
                style={{
                    position: 'absolute',
                    top: isTouched ? '-100%' : 0,
                    width: '100%',
                }}
                onClick={() => setIsTouched(true)}
            >
                {props.children}
            </Button>
            <Button
                style={{
                    position: 'absolute',
                    top: isTouched ? 0 : '100%',
                    width: '100%',
                }}
                icon={(props) => <Refresh {...props} />}
                onClick={(e) => props.onClick(e)}
            >
                한번 더 눌러주세요
            </Button>
        </Wrapper>
    )
}

export default RecheckButton
