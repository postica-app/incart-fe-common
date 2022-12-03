import { lazy, Suspense } from "react"
import Input from "../components/Input"
import { iconList } from "../icons"

export default (props: {
    args: { icon: typeof iconList[number]; placeholder: string }
}) => {
    const Icon = lazy(
        () => import(/* @vite-ignore */ "../icons/" + props.args.icon + ".svg")
    )
    return (
        <Input
            icon={(style) => (
                <Suspense>
                    <Icon style={style} />
                </Suspense>
            )}
            placeholder={props.args.placeholder}
        />
    )
}
