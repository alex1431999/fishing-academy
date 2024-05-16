<template>
    <v-card @click="$emit('selected')" elevation="2" width="200" height="170">
        <v-card-title>
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

const {state} = defineProps<{ state: State }>()

const flagUrl = await stateFlagModel.getUrl(state.flagId)
</script>

<style scoped>
.stateFlag {
    max-width: 100%;
    max-height: 100%;
}
</style>