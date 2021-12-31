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
			<div>Time Stamp: <span v-text="timeStamp"></span></div>
			<div>Global Uuid: <span v-text="globalUuidGetter"></span></div>
		</div>
		<div>
			<button @click="reduceClickAction">-</button>
			<span v-text="form.count"></span>
			<button @click="increaseClickAction">+</button>
		</div>
		<div>
			<button @click="updateTimeStampClickAction">Update Time Stamp</button>
		</div>
		<div>
			<button @click="updateGlobalUuidClickAction">Update Global Uuid</button>
		</div>
	</section>
</template>

<script lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { mapState, mapGetters } from 'vuex'
import { MutationNamesEnum } from './store/mutations'
import { ActionNamesEnum } from './store/actions'
import { mapStateNames } from './store/state'
import { mapGetterNames } from './store/getters'

export default {
	name: 'App',
	data() {
		return {
			appName: `Vue2 Application`,
			form: {
				count: 0,
			},
		}
	},
	created() {
		console.log(`Component Created`)
	},
	computed: {
		...mapState([...mapStateNames]),
		...mapGetters([...mapGetterNames]),
	},
	mounted() {
		console.log(`Component Mounted`)
		console.log(this.$store)
	},
	methods: {
		increaseClickAction(): void {
			this.form.count++
		},
		reduceClickAction(): void {
			this.form.count--
		},
		updateTimeStampClickAction() {
			this.$store.commit(MutationNamesEnum.UPDAT_TIME_STAMP, new Date().getTime())
		},
		updateGlobalUuidClickAction() {
			this.$store.dispatch(ActionNamesEnum.UPDATE_GLOBAL_UUID_ACTION, uuidv4())
		},
	},
}
</script>
