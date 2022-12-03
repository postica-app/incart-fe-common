import { resolve } from "path"
import { defineConfig } from "vite"
import mdx from "@mdx-js/rollup"
import svgrPlugin from "vite-plugin-svgr"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgrPlugin({
            svgrOptions: {},
            exportAsDefault: true,
        }),
        mdx(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/lib.js"),
            name: "IncartCommon",
            fileName: "incart-common",
        },
        rollupOptions: {
            external: ["react", "@stitches/react", "@stitches/core"],
        },
    },
})
