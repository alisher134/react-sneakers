import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@/api': path.resolve(__dirname, './src/api'),
			'@/assets': path.resolve(__dirname, './src/assets'),
			'@/components': path.resolve(__dirname, './src/components'),
			'@/providers': path.resolve(__dirname, './src/providers'),
			'@/services': path.resolve(__dirname, './src/services'),
			'@/pages': path.resolve(__dirname, './src/pages'),
			'@/constants': path.resolve(__dirname, './src/constants'),
			'@/hooks': path.resolve(__dirname, './src/hooks'),
			'@/utils': path.resolve(__dirname, './src/utils'),
			'@/styles': path.resolve(__dirname, './src/styles'),
		},
	},
});
