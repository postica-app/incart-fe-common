interface Product {
    name: string;
    info?: string;
    option?: {
        name: string;
        options: {
            label: string;
            delta?: number;
            info?: string;
        }[];
    };
    price: number;
}
export declare const ProductCard: React.FC<{
    product: Product;
    onPurchase?: () => void;
}>;
export {};
