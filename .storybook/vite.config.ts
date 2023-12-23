import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

export default defineConfig({
	resolve: {
		alias: {
			'~': fileURLToPath(new URL('../', import.meta.url)),
			'@': fileURLToPath(new URL('../', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import "@/assets/styles/_variables.scss";
				`
			}
		}
	}
});
