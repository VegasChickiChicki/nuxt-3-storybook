import type { Meta, StoryObj } from '@storybook/vue3'
import type { TProps } from './v-button.types'

import VButton from './v-button.vue'

const meta: Meta<typeof VButton> = {
	title: 'Global/UI/Button',
	component: VButton
};

export const DefaultButton: StoryObj<typeof VButton> = {
	render: (args: TProps) => {
		return {
			components: {
				VButton
			},
			setup() {
				return {
					args: args
				};
			},
			template: `
				<v-button v-bind="args" />
			`
		};
	},
	args: {}
}

export default meta
