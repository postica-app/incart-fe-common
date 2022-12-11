import { lazy, Suspense } from "react"
import Callout from "../components/Callout"
import { iconList } from "../icons"

export default (props: {
    args: { text: string; icon: typeof iconList[number] }
}) => {
    const Icon = lazy(
        () => import(/* @vite-ignore */ "../icons/" + props.args.icon + ".svg")
    )
    return (
        <Callout
            icon={(style) => (
                <Suspense fallback={<>네?</>}>
                    <Icon style={style} />
                </Suspense>
            )}
        >
            {props.args.text}
        </Callout>
    )
}
