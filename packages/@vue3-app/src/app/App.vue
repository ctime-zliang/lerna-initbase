<style scoped>
.app-entry {
	width: 100%;
	color: red;
}
</style>

<template>
	<section class="app-entry">
		<div>
			<div>App Name: <span v-text="appName"></span></div>
		</div>
		<div>
			<button @click="reduceClickAction">-</button>
			<span v-text="form.count"></span>
			<button @click="increaseClickAction">+</button>
		</div>
	</section>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'

export default {
	name: 'App',
	setup() {
		const appName = ref('Vue3 Application')
		const form = reactive({
			count: 0,
		})
		const increaseClickAction = () => {
			form.count++
		}
		const reduceClickAction = () => {
			form.count--
		}
		return {
			appName,
			form,
			increaseClickAction,
			reduceClickAction,
		}
	},
}
</script>
