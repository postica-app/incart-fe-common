import { ProductType } from '../../types';
export declare const ProductCard: React.FC<{
    product: ProductType;
    onPurchase?: (selectedOptionKey?: string) => void;
}>;
