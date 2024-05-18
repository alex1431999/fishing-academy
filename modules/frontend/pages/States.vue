<template>
    <StateSelector :states="states" @selected="onStateSelected"></StateSelector>
</template>

<script setup lang="ts">
import StateSelector from "~/components/states/StateSelector.vue";
import {stateModel, userSettingsModel, auth} from 'fishing-academy-database'
import type {State} from 'fishing-academy-types'

const states = await stateModel.getAll();

async function onStateSelected(state: State) {
    const userId = await auth.getUserIdSafe()
    await userSettingsModel.update(userId, {stateSelectedId: state.id})
}
</script>