import React from "react"
import { useField } from "formik"
import { styles } from "./styles"

type InputProps = Omit<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >,
    "ref"
> & {
    icon: (props: { width: string; flexShrink: number }) => JSX.Element
}

export const Input: React.FC<InputProps> = ({ icon: Icon, ...props }) => (
    <label>
        <styles.Wrapper>
            <styles.IconWrapper>
                <Icon flexShrink={0} width="6rem" />
            </styles.IconWrapper>
            <styles.LogicalInput {...props} />
        </styles.Wrapper>
    </label>
)

export const FInput: React.FC<
    InputProps & {
        name: string
    }
> = (props) => {
    const [input] = useField(props.name)
    return <Input {...props} {...input} />
}

export default Input
