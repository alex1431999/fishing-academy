<template>
    <NuxtLayout>
        <v-app>
            <AppHeader></AppHeader>
            <div class="mt-16 pa-5">
                <NuxtPage/>
            </div>
        </v-app>
    </NuxtLayout>
</template>
<script setup lang="ts">
import AppHeader from "~/components/header/AppHeader.vue";
import {supabase, userSettingsModel} from 'fishing-academy-database'

onMounted(async () => {
    const {data: {user}} = await supabase.auth.signInAnonymously()
    const userId = user?.id

    if (!userId) throw new Error('anonymous sign in has failed')

    await userSettingsModel.create({userId})
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
</style>