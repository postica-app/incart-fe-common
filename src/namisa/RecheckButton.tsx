import Arrow from '../icons/Right Arrow.svg'
import { RecheckButton } from '../lib'

export default (props: { active: boolean }) => {
    return (
        <RecheckButton
            icon={(props) => <Arrow {...props} />}
            onClick={() => console.log('축하드립니다~')}
            active={props.active}
        >
            눌러보셈
        </RecheckButton>
    )
}
