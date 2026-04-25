import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.AI_TOKEN': JSON.stringify(env.AI_TOKEN),
      'process.env.EMAIL_API_KEY': JSON.stringify(env.EMAIL_API_KEY),
      'process.env.EMAIL_SECRET_KEY': JSON.stringify(env.EMAIL_SECRET_KEY),
      'process.env.SYSTEM_INSTRUCTION': JSON.stringify(env.SYSTEM_INSTRUCTION)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
