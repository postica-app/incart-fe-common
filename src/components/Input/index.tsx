import React from "react"
import { useField } from "formik"
import { styles } from "./styles"
import { Vexile } from "@haechi/flexile"
import { Text2 } from "../Text"

type InputProps = Omit<
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >,
    "ref"
> & {
    icon?: (props: { width: string; flexShrink: number }) => JSX.Element
    errorMessage?: string
}

export const Input: React.FC<InputProps> = ({ icon: Icon, ...props }) => (
    <label>
        <Vexile gap={2}>
            <styles.Wrapper>
                {Icon && (
                    <styles.IconWrapper>
                        <Icon flexShrink={0} width="6rem" />
                    </styles.IconWrapper>
                )}
                <styles.LogicalInput {...props} />
            </styles.Wrapper>
            {props.errorMessage && <Text2 blue>{props.errorMessage}</Text2>}
        </Vexile>
    </label>
)

export const FInput: React.FC<
    InputProps & {
        name: string
    }
> = (props) => {
    const [input, meta] = useField(props.name)

    return <Input {...props} {...input} errorMessage={meta.error} />
}

export default Input
