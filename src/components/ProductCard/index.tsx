import { Hexile, Vexile } from "@haechi/flexile"
import Button from "../Button"
import { Divider } from "../Divider"
import useSwitch from "../Switch"
import { Header2, Text2 } from "../Text"
import Cart from "../../icons/Cart.svg"
import Info from "../../icons/Info.svg"
import Styles from "./styles"
import { useMemo } from "react"
import Callout from "../Callout"

interface Product {
    name: string
    info?: string
    option?: {
        name: string
        options: {
            label: string
            delta?: number
            info?: string
        }[]
    }
    price: number
}

export const ProductCard: React.FC<{
    product: Product
    onPurchase?: () => void
}> = ({ product, onPurchase }) => {
    const [selectedOptionKey, _, __, Switch] = useSwitch({
        items:
            product.option?.options.map((option) => ({
                key: option.label,
            })) || [],
    })

    const selectedOption = useMemo(
        () =>
            product.option?.options.find(
                (option) => option.label === selectedOptionKey
            ),
        [selectedOptionKey, product]
    )

    return (
        <Styles.Wrapper padding={6} gap={4}>
            <Vexile gap={1}>
                <Header2>{product.name}</Header2>
                {product.info && <Text2>{product.info}</Text2>}
            </Vexile>
            <Divider />
            <Hexile x="right" y="center" gap={6}>
                {product.option && (
                    <Hexile gap={6} y="center" fillx>
                        <Text2>{product.option.name}</Text2>
                        {Switch}
                    </Hexile>
                )}
                <Hexile y="center" gap={4} keepsize>
                    <Header2 purple>￦{product.price.toLocaleString()}</Header2>
                    <Button
                        icon={(style) => <Cart style={style} />}
                        onClick={onPurchase}
                    >
                        구매하기
                    </Button>
                </Hexile>
            </Hexile>
            {selectedOption?.info && (
                <Callout icon={(style) => <Info style={style} />}>
                    {selectedOption?.info}
                </Callout>
            )}
        </Styles.Wrapper>
    )
}
