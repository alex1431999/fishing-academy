<template>
    <div>
        <v-text-field
            class="ml-auto"
            variant="outlined"
            width="400"
            prepend-inner-icon="mdi-magnify"
            placeholder="Suchen..."
            :color="colorPrimary"
            @input="filterKey = $event.target.value">
        </v-text-field>
    </div>
    <div class="d-flex ga-10">
        <State
            v-for="state in statesFiltered"
            :key="state.id"
            :state="state"
            @selected="$emit('selected', state)">
        </State>
    </div>
</template>

<script setup lang="ts">
import type {State as StateType} from 'fishing-academy-types'
import State from "~/components/states/State.vue";
import _ from 'lodash'
import {colorPrimary} from "~/constants/colors";

const {states} = defineProps<{ states: StateType[] }>()

const emit = defineEmits(['selected'])

const filterKey = ref<string>('')

const statesSorted = _.sortBy(states, 'name')

const statesFiltered = computed(() => {
    return statesSorted.filter(state => state.name.toLowerCase().includes(filterKey.value.toLocaleLowerCase()))
})
</script>