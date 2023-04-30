import { Vexile } from '@haechi/flexile'
import { Text1, Text2 } from './Text'

export const FormField: React.FC<{
    name: string
    info?: string
    required?: boolean
    fillx?: boolean
    children: JSX.Element
}> = (props) => (
    <Vexile gap={3} fillx={props.fillx}>
        <Vexile gap={1}>
            <Text1>
                {props.name} {props.required && '*'}
            </Text1>
            {props.info && <Text2 grey5>{props.info}</Text2>}
        </Vexile>
        {props.children}
    </Vexile>
)

export default FormField
