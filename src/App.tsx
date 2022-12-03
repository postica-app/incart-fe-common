import { lazy } from "react"
import { iconList } from "./icons"

const IconComponents = iconList.map((path) =>
    lazy(() => import(/* @vite-ignore */ "./icons/" + path + ".svg"))
)

function App() {
    return (
        <div className="App">
            {IconComponents.map((Icon) => (
                <Icon color="green" />
            ))}
        </div>
    )
}

export default App
