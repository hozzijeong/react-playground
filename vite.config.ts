import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';
import stylelint from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass,
			},
		},
	},
});
