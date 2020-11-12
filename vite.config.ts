import { ServerConfig } from "vite";
import path from "path";
const fs = require("fs");
const dotenv = require("dotenv");
const envFiles = [
  /** default file */ `.env`,
  /** mode file */ `.env.${process.env.NODE_ENV}`,
];
for (const file of envFiles) {
  const envConfig = dotenv.parse(fs.readFileSync(file));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}
const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};
const config: ServerConfig = {
  port: Number(process.env.VITE_PORT),
  alias: {
    "/@/": pathResolve("./src"),
  },
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    }
  },
  assetsInclude(file) {
    return /\.(hdr|glb|usdz|png)$/.test(file)
  },
  optimizeDeps: {
    include: ["@ant-design-vue/use"],
  },
};

module.exports = config;
