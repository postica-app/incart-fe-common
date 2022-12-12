import { ProductCard } from "../components/ProductCard"

export default () => (
    <ProductCard
        product={{
            info: "강원도산 감자전분으로 만든 바람떡입니다",
            name: "아주 맛있는 바람 떡",
            price: 10000,
            option: {
                name: "떡소",
                options: [
                    {
                        label: "치즈떡",
                        delta: 10,
                        info: "매울 수 있어요",
                    },
                    {
                        label: "김치",
                        delta: -100,
                    },
                ],
            },
        }}
        onPurchase={() => console.log("넵!")}
    />
)
