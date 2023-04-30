import { OrderStage } from './types'

export const ORDER_STAGE_MAP: {
    [key in OrderStage]: string
} = {
    created: '접수 됨',
    paid: '결제 완료',
    departed: '배송 출발함',
    canceled: '취소',
} as const
