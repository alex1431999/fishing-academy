<template>
    <StateSelector :states="states" :state-selected="stateSelected" @selected="onStateSelected"></StateSelector>
</template>

<script setup lang="ts">
import StateSelector from "~/components/states/StateSelector.vue";
import {stateModel, userSettingsModel, auth} from 'fishing-academy-database'
import type {State} from 'fishing-academy-types'

const states = await stateModel.getAll();
let stateSelected = ref<State | null>(null)


onMounted(async () => {
    const userSettings = await userSettingsModel.get()
    stateSelected.value = states.find(state => state.id === userSettings.stateSelectedId) || null
})

async function onStateSelected(state: State) {
    stateSelected.value = state
    const userId = await auth.getUserIdSafe()
    await userSettingsModel.update(userId, {stateSelectedId: state.id})
}
</script>