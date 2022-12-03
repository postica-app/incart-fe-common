import React from "react"
import ReactDOM from "react-dom/client"
import { Viewer } from "namisa"
import "namisa/dist/style.css"
import "./config.css"

const components = import.meta.glob("/src/namisa/**/*.mdx")

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Viewer components={components} />
    </React.StrictMode>
)
