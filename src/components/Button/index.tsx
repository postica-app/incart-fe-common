import { ComponentProps } from "@stitches/react"
import { useMemo } from "react"
import { Header2, Header3, Text2 } from "../Text"
import { styles } from "./styles"

export const Button: React.FC<
    ComponentProps<typeof styles.Wrapper> & {
        icon?: (props: { width: string }) => JSX.Element
    }
> = ({ children: text, icon: Icon, ...props }) => {
    const { TextComponent, iconWidth } = useMemo(
        () =>
            props.size === "small"
                ? {
                      TextComponent: Header3,
                      iconWidth: "4rem",
                  }
                : {
                      TextComponent: Header2,
                      iconWidth: "5rem",
                  },
        [props.size]
    )

    return (
        <styles.Wrapper {...props} disabled={!props.active}>
            {Icon && <Icon width={iconWidth} />}
            <TextComponent>{text}</TextComponent>
        </styles.Wrapper>
    )
}

export default Button
