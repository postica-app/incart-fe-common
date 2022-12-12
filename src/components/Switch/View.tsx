import styles from "./styles"
import { Item } from "../../types"
import { Text2 } from "../Text"
import { useEffect } from "react"
import { Vexile } from "@haechi/flexile"

export interface SwitchProps {
    items: Item[]
    selectedKey?: string
    onClick?: (selectedKey: string) => void
}

export const SwitchView: React.FC<
    SwitchProps & {
        errorMessage?: string
    }
> = (props) => {
    return (
        <Vexile gap={2} style={{ flex: 1 }}>
            <styles.Background padding={1} gap={3} relative>
                {props.items.map((item) => (
                    <styles.Item
                        key={item.key}
                        padding={3}
                        fillx
                        x="center"
                        active={props.selectedKey === item.key}
                        onClick={
                            props.onClick && (() => props.onClick?.(item.key))
                        }
                    >
                        <Text2>{item.name || item.key}</Text2>
                    </styles.Item>
                ))}
                <styles.IndicatorWrapper
                    style={{
                        width: `calc(100% / ${props.items.length})`,
                        left: `calc(100% / ${
                            props.items.length
                        } * ${props.items.findIndex(
                            (e) => e.key == props.selectedKey
                        )})`,
                    }}
                >
                    <styles.Indicator />
                </styles.IndicatorWrapper>
            </styles.Background>
            {props.errorMessage && <Text2 blue>{props.errorMessage}</Text2>}
        </Vexile>
    )
}
