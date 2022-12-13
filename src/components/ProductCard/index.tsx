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
import { ProductType } from "../../types"

export const ProductCard: React.FC<{
    product: ProductType
    onPurchase?: () => void
}> = ({ product, onPurchase }) => {
    const [selectedOptionKey, _, __, Switch] = useSwitch({
        items:
            product.options?.[0].items.map((option) => ({
                key: option.name,
            })) || [],
    })

    const selectedOption = useMemo(
        () =>
            product.options?.[0].items.find(
                (option) => option.name === selectedOptionKey
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
                {product.options && (
                    <Hexile gap={6} y="center" fillx>
                        <Text2>{product.options[0].name}</Text2>
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
