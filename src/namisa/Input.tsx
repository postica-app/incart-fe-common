import { lazy, Suspense } from "react"
import Input from "../components/Input"
import { iconList } from "../icons"

export default (props: {
    args: {
        icon: typeof iconList[number]
        placeholder: string
        showIcon: boolean
    }
}) => {
    const Icon = lazy(
        () => import(/* @vite-ignore */ "../icons/" + props.args.icon + ".svg")
    )
    return (
        <Input
            icon={
                props.args.showIcon
                    ? (style) => (
                          <Suspense>
                              <Icon style={style} />
                          </Suspense>
                      )
                    : undefined
            }
            placeholder={props.args.placeholder}
        />
    )
}
