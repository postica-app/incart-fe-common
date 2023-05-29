import { ComponentProps } from 'react'
import { Button } from '../../lib'
export declare const RecheckButton: React.FC<
    ComponentProps<typeof Button> & {
        onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
        onDisabledClick?: (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => void
    }
>
export default RecheckButton
