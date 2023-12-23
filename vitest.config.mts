import { resolve } from 'path';
import { defineVitestConfig } from 'nuxt-vitest';



export default defineVitestConfig({
	test: {
		globals: true,
		environment: 'nuxt'
	},
	resolve: {
		alias: {
			'~': resolve(__dirname, '.'),
			'~/': resolve(__dirname, './'),
			'@': resolve(__dirname, '.'),
			'@/': resolve(__dirname, './')
		}
	}
});
