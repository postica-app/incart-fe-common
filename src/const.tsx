import { OrderStage, PaymentReceiveAccountType } from './types'

export const ORDER_STAGE_MAP: {
    [key in OrderStage]: string
} = {
    created: '접수 됨',
    paid: '결제 완료',
    departed: '발송 완료',
    canceled: '취소',
} as const

export const PAYMENT_PROVIDER_MAP: {
    [key in PaymentReceiveAccountType['provider']]: string
} = {
    BANK_ACCOUNT: '계좌이체',
    KAKAOPAY_TRANSFER: '카카오페이',
    TOSS_ID: '토스',
} as const
