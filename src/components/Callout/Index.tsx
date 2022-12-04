import { Text2 } from "../Text"
import { styles } from "./styles"

export const Callout: React.FC<{
    icon?: (props: { width: string; flexShrink: number }) => JSX.Element
    children: string
}> = ({ children, icon: Icon }) => {
    return (
        <styles.Container gap={2} padding={3} y="center">
            {Icon && <Icon width="6rem" flexShrink={0} />}
            <Text2>{children}</Text2>
        </styles.Container>
    )
}

export default Callout
