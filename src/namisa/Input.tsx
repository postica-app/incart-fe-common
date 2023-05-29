import { lazy, Suspense } from 'react'
import Input from '../components/Input'
import { iconList } from '../icons'

export default (props: {
    icon: (typeof iconList)[number]
    placeholder: string
    showIcon: boolean
    disabled: boolean
}) => {
    const Icon = lazy(
        () => import('../icons/' + props.icon + '.svg' /* @vite-ignore */)
    )
    return (
        <Input
            icon={
                props.showIcon
                    ? (style) => (
                          <Suspense>
                              <Icon style={style} />
                          </Suspense>
                      )
                    : undefined
            }
            placeholder={props.placeholder}
            disabled={props.disabled}
        />
    )
}
