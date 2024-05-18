<template>
    <NuxtLayout>
        <v-app>
            <AppHeader></AppHeader>
            <div class="mt-16 pa-5" :class="{ loading: isLoading }">
                <AppLoading v-if="isLoading"></AppLoading>
                <NuxtPage v-else/>
            </div>
        </v-app>
    </NuxtLayout>
</template>
<script setup lang="ts">
import AppHeader from "~/components/header/AppHeader.vue";
import {anonymousSignInWorkflow} from 'fishing-academy-database'

const appStore = useAppStore()

const {isLoading} = storeToRefs(appStore)

appStore.isLoading = true

onMounted(async () => {
    await anonymousSignInWorkflow.execute()
    appStore.isLoading = false
})
</script>

<style>
@font-face {
    font-family: 'alkatra';
    src: url('/fonts/Alkatra.ttf') format('truetype');
}

body {
    font-family: 'alkatra', 'sans-serif';
}

.loading {
    margin-left: auto;
    margin-right: auto;
}
</style>