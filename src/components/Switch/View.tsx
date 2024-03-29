import styles from './styles'
import { ItemType } from '../../types'
import { Text2 } from '../Text'
import { Vexile } from '@haechi/flexile'

export interface SwitchProps {
    items: ItemType[]
    selectedKey?: string
    onClick?: (selectedKey: string) => void
    verticalText?: boolean
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
                        y="center"
                        active={props.selectedKey === item.key}
                        onClick={
                            props.onClick && (() => props.onClick?.(item.key))
                        }
                    >
                        <Text2 linebreak={!!props.verticalText} center>
                            {item.name || item.key}
                        </Text2>
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
