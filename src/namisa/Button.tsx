import { ComponentProps, lazy, Suspense } from 'react'
import Button from '../components/Button'

export default ({
    args,
}: {
    args: {
        icon: string
        text: string
        size: ComponentProps<typeof Button>['size']
        ghost: boolean
        active: boolean
    }
}) => {
    const Icon = lazy(
        () => import(/* @vite-ignore */ '../icons/' + args.icon + '.svg')
    )

    return (
        <Button
            size={args.size}
            ghost={args.ghost}
            active={args.active}
            icon={(p) => (
                <Suspense fallback={<></>}>
                    <Icon
                        style={{
                            width: p.width,
                        }}
                    />
                </Suspense>
            )}
            onClick={() => {
                alert('clicked')
            }}
            onDisabledClick={() => {
                alert('disabled but clicked')
            }}
        >
            {args.text}
        </Button>
    )
}
