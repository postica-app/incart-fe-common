import React from "react"
import colors from "../../colors"
import { styles } from "./styles"

export const Input: React.FC<
    Omit<
        React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >,
        "ref"
    > & {
        icon: (props: {
            color: string
            width: string
            flexShrink: number
        }) => JSX.Element
    }
> = ({ icon: Icon, ...props }) => (
    <label>
        <styles.Wrapper>
            <styles.IconWrapper>
                <Icon color={colors.grey5} flexShrink={0} width="6rem" />
            </styles.IconWrapper>
            <styles.LogicalInput {...props} />
        </styles.Wrapper>
    </label>
)

export default Input
