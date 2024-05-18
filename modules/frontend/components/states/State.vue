<template>
    <v-card :color="backgroundColor" @click="$emit('selected')" elevation="2" width="200" height="170">
        <v-card-title class="d-flex justify-space-between">
            {{ state.name }}

        </v-card-title>
        <v-card-text>
            <img alt="image of the state" class="stateFlag" :src="flagUrl">
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import type {State} from 'fishing-academy-types'
import {stateFlagModel} from 'fishing-academy-database'
import {colorPrimary} from "~/constants/colors";

const props = defineProps<{ state: State, isSelected: boolean }>()
const {state, isSelected} = toRefs(props)

const flagUrl = await stateFlagModel.getUrl(state.value.flagId)

const backgroundColor = computed(() => {
    return isSelected.value ? colorPrimary : ''
})
</script>

<style scoped>
.stateFlag {
    max-width: 100%;
    max-height: 100%;
}
</style>