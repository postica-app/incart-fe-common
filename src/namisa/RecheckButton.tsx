import Arrow from '../icons/Right Arrow.svg'
import { RecheckButton } from '../lib'

export default (props: {
    active: boolean
    danger: boolean
    ghost: boolean
}) => {
    return (
        <RecheckButton
            {...props}
            icon={(props) => <Arrow {...props} />}
            onClick={() => console.log('축하드립니다~')}
        >
            눌러보셈
        </RecheckButton>
    )
}
