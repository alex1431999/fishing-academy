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

// TODO move this logic out of this file, maybe into a workflow?
onMounted(async () => {
    // Check if there is an existing session
    const {data: {session}} = await supabase.auth.getSession()

    let userId

    if (session) {
        // If session exists, get the user ID from the session
        userId = session.user.id
    } else {
        // If no session, sign in anonymously
        const {data: {user}, error} = await supabase.auth.signInAnonymously()

        if (error || !user) {
            throw new Error('Anonymous sign-in has failed')
        }

        userId = user.id
    }

    // Use the userId for your logic
    await userSettingsModel.createIfDoesntExist({userId})
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