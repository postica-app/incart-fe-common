import { CartItemType, ProductOptionType } from '../types'

export const getCartItemPrice = (item: CartItemType) => {
    const options = item.product.options
    const selections = item.selectedOptions
    const itemPrice = item.product.price

    if (options === undefined || selections.length === 0)
        return itemPrice * item.amount

    const deltas = selections.map((selection, index) => {
        const selectedOption: ProductOptionType | undefined = options[
            index
        ].items.find((option) => option.name === selection)
        if (!selectedOption) throw new Error('옵션 정보가 올바르지 않습니다')

        return selectedOption.priceDelta || 0
    })

    const optionPrice = deltas.reduce((a, b) => a + b)

    return (itemPrice + optionPrice) * item.amount
}
