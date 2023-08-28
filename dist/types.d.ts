export interface ItemType {
    name?: string;
    key: string;
}
export interface ProductOptionType {
    name: string;
    priceDelta?: number;
    info?: string;
}
export interface ProductType {
    name: string;
    price: number;
    info?: string;
    store_rid: number;
    options: {
        name: string;
        items: ProductOptionType[];
    }[];
}
export declare type Optionality = 'required' | 'optional' | 'no';
export interface ShippingMethodType {
    name: string;
    price: number;
    info?: string;
    form: {
        address: Optionality;
        message: Optionality;
    };
}
export interface PaymentReceiveAccount {
    provider: string;
    data: unknown;
}
export interface BankAccount extends PaymentReceiveAccount {
    provider: 'BANK_ACCOUNT';
    data: {
        bank: string;
        name: string;
        account: string;
    };
}
export interface TossId extends PaymentReceiveAccount {
    provider: 'TOSS_ID';
    data: {
        id: string;
    };
}
export declare type PaymentReceiveAccountType = BankAccount | TossId;
export interface StoreType {
    rid: number;
    name: string;
    payment_receive_account?: PaymentReceiveAccountType[];
    shipping_method: ShippingMethodType[];
}
export declare type Doc<T> = T & {
    id: string;
};
export interface CartItemType {
    product: Doc<ProductType>;
    amount: number;
    selectedOptions: string[];
}
export interface OrdererInfoType {
    name: string;
    phoneNumber: string;
    email: string;
}
export interface ReceiverInfoType {
    name: string;
    phoneNumber: string;
}
export interface ShippingInfoType {
    address?: {
        roadname: string;
        detail: string;
    };
    method: string;
    message: string;
}
export interface CreateOrderType {
    cart: (Omit<CartItemType, 'product'> & {
        product_id: string;
    })[];
    shipping: ShippingInfoType;
    orderer: OrdererInfoType;
    receiver: ReceiverInfoType;
}
export interface OrderType {
    store_rid: number;
    shipping_info: ShippingInfoType;
    orderer_name: string;
    orderer_phone: string;
    orderer_email: string;
    receiver_name: string;
    receiver_phone: string;
}
export declare const OrderStage: {
    readonly created: "created";
    readonly paid: "paid";
    readonly departed: "departed";
    readonly canceled: "canceled";
};
export declare type OrderStage = keyof typeof OrderStage;
