import { Hexile } from '@haechi/flexile'
import { ComponentProps } from '@stitches/react'
import { useField } from 'formik'
import { styles } from './styles'

type CheckboxProps = ComponentProps<(typeof styles)['Box']> & {
    children: JSX.Element
}

export const Checkbox: React.FC<CheckboxProps> = ({
    children,
    value,
    ...props
}) => (
    <label>
        <Hexile gap={3} y="center">
            <styles.Box
                {...props}
                checked={
                    typeof value === 'boolean'
                        ? value
                        : typeof value === 'number'
                        ? !!value
                        : value === 'true'
                }
            />
            {children}
        </Hexile>
    </label>
)

export const FCheckbox: React.FC<
    CheckboxProps & {
        name: string
    }
> = (props) => {
    const [input] = useField(props.name)
    console.log(input)

    return <Checkbox {...props} {...input} />
}
