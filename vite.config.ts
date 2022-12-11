import { resolve } from "path"
import { defineConfig } from "vite"
import mdx from "@mdx-js/rollup"
import dts from "vite-plugin-dts"
import svgrPlugin from "vite-plugin-svgr"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [
        dts({
            skipDiagnostics: true,
        }),
        react(),
        svgrPlugin({
            svgrOptions: {},
            exportAsDefault: true,
        }),
        mdx(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/lib.ts"),
            name: "IncartCommon",
            fileName: "incart-common",
        },
        rollupOptions: {
            external: ["react", "@stitches/react", "@stitches/core"],
        },
        minify: true,
    },
})
