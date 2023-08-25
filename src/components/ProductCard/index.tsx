import { Hexile, Vexile } from '@haechi/flexile'
import Button from '../Button'
import { Divider } from '../Divider'
import useSwitch from '../Switch'
import { Header2, Header3, Text2 } from '../Text'
import Cart from '../../icons/Cart.svg'
import Info from '../../icons/Info.svg'
import Styles from './styles'
import { useMemo } from 'react'
import Callout from '../Callout'
import { ProductType } from '../../types'

export const ProductCard: React.FC<{
    product: ProductType
    onPurchase?: (selectedOptionKey?: string) => void
}> = ({ product, onPurchase }) => {
    const [selectedOptionKey, _, __, Switch] = useSwitch({
        items:
            product.options?.[0]?.items?.map((option) => ({
                key: option.name,
            })) || [],
    })

    const selectedOption = useMemo(
        () =>
            product.options?.[0]?.items?.find(
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
            <Hexile y="center" gap={6}>
                {product.options.length ? (
                    <Vexile gap={3} y="center" fillx>
                        <Header3>{product.options?.[0].name}</Header3>
                        {Switch}
                    </Vexile>
                ) : (
                    <></>
                )}
                <Vexile y="center" gap={3}>
                    <Header2 purple>
                        ￦
                        {(
                            product.price + (selectedOption?.priceDelta || 0)
                        ).toLocaleString()}
                    </Header2>
                    <Button
                        icon={(props) => <Cart {...props} />}
                        onClick={() => onPurchase?.(selectedOptionKey)}
                    >
                        구매하기
                    </Button>
                </Vexile>
            </Hexile>
            {selectedOption?.info && (
                <Callout icon={(style) => <Info style={style} />}>
                    {selectedOption?.info}
                </Callout>
            )}
        </Styles.Wrapper>
    )
}
