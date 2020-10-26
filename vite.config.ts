import { ServerConfig } from 'vite';
import path from 'path';

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};

const config: ServerConfig = {
  alias: {
    '/@/': pathResolve('./src'),
  },
  proxy:{
    '/api':{
      target:"http://localhost:3000",
      changeOrigin:true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  },
  optimizeDeps: {
    include: [
        '@ant-design-vue/use'
    ]
}
};

module.exports = config;