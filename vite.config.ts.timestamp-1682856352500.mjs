// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///home/ubuntu/incart/incart-fe-common/node_modules/vite/dist/node/index.js";
import mdx from "file:///home/ubuntu/incart/incart-fe-common/node_modules/@mdx-js/rollup/index.js";
import dts from "file:///home/ubuntu/incart/incart-fe-common/node_modules/vite-plugin-dts/dist/index.mjs";
import svgrPlugin from "file:///home/ubuntu/incart/incart-fe-common/node_modules/vite-plugin-svgr/dist/index.mjs";
import react from "file:///home/ubuntu/incart/incart-fe-common/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "/home/ubuntu/incart/incart-fe-common";
var vite_config_default = defineConfig({
  plugins: [
    dts({
      skipDiagnostics: true
    }),
    react(),
    svgrPlugin({
      svgrOptions: {},
      exportAsDefault: true
    }),
    mdx()
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/lib.ts"),
      name: "IncartCommon",
      fileName: "incart-common"
    },
    rollupOptions: {
      external: ["react", "@stitches/react", "@stitches/core"]
    },
    minify: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS91YnVudHUvaW5jYXJ0L2luY2FydC1mZS1jb21tb25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3VidW50dS9pbmNhcnQvaW5jYXJ0LWZlLWNvbW1vbi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS91YnVudHUvaW5jYXJ0L2luY2FydC1mZS1jb21tb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIlxuaW1wb3J0IG1keCBmcm9tIFwiQG1keC1qcy9yb2xsdXBcIlxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCJcbmltcG9ydCBzdmdyUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgZHRzKHtcbiAgICAgICAgICAgIHNraXBEaWFnbm9zdGljczogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICAgIHJlYWN0KCksXG4gICAgICAgIHN2Z3JQbHVnaW4oe1xuICAgICAgICAgICAgc3Znck9wdGlvbnM6IHt9LFxuICAgICAgICAgICAgZXhwb3J0QXNEZWZhdWx0OiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgbWR4KCksXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvbGliLnRzXCIpLFxuICAgICAgICAgICAgbmFtZTogXCJJbmNhcnRDb21tb25cIixcbiAgICAgICAgICAgIGZpbGVOYW1lOiBcImluY2FydC1jb21tb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwiQHN0aXRjaGVzL3JlYWN0XCIsIFwiQHN0aXRjaGVzL2NvcmVcIl0sXG4gICAgICAgIH0sXG4gICAgICAgIG1pbmlmeTogdHJ1ZSxcbiAgICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFIsU0FBUyxlQUFlO0FBQ3RULFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxXQUFXO0FBTGxCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLElBQUk7QUFBQSxNQUNBLGlCQUFpQjtBQUFBLElBQ3JCLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxNQUNQLGFBQWEsQ0FBQztBQUFBLE1BQ2QsaUJBQWlCO0FBQUEsSUFDckIsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILEtBQUs7QUFBQSxNQUNELE9BQU8sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDdEMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ2Q7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNYLFVBQVUsQ0FBQyxTQUFTLG1CQUFtQixnQkFBZ0I7QUFBQSxJQUMzRDtBQUFBLElBQ0EsUUFBUTtBQUFBLEVBQ1o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
