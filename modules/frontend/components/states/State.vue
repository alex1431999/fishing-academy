<template>
    <v-card @click="$emit('selected')" elevation="2" width="250" height="150">
        <v-card-title>
            {{ state.name }}
        </v-card-title>
    </v-card>
</template>

<script setup lang="ts">
import type {State} from 'fishing-academy-types'


const {state} = defineProps<{ state: State }>()
</script>