export interface ItemType {
    name?: string
    key: string
}

export interface ProductOptionType {
    name: string
    priceDelta?: number
    info?: string
}

export interface ProductType {
    name: string
    price: number
    info?: string
    options?: {
        name: string
        items: ProductOptionType[]
    }[]
}

export interface StoreType {
    name: string
    payment_receive_account: {
        bankAccount: {
            bank: string
            accountNumber: string
        }
        other: {
            key: string
            type: 'tossID' | 'KakaopayQR'
        }[]
    }
}
