import { Hexile } from "@haechi/flexile"
import { ComponentProps } from "react"
import { Text2 } from "../Text"
import { styles } from "./styles"

export const Callout: React.FC<
    {
        icon?: (props: {
            width: string
            flexShrink: number
            height: string
        }) => JSX.Element
        children: string
    } & ComponentProps<typeof Hexile>
> = ({ children, icon: Icon, ...props }) => {
    return (
        <styles.Container gap={2} padding={3} y="center" {...props}>
            {Icon && <Icon width="6rem" height="6rem" flexShrink={0} />}
            <Text2>{children}</Text2>
        </styles.Container>
    )
}

export default Callout
