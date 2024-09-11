<script setup lang="ts">
definePageMeta({
    layout: 'admin',
})

useHead({
    title: `Admin — Wise Gals`,
    meta: [
        { name: 'description', content: `Manage your Wise Gals from this convenient web manager.` }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

// onMounted(() => {
//     console.log('Mounted!')
//     // Now it's safe to perform setup operations.
// })

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <main class="max-w-5xl mx-auto py-5 flex flex-col gap-4">
        <h1 class="text-5xl font-medium">
            Manage Your Wise Gals
        </h1>

        <p>
            Conveniently manage everything you need to from one place.
        </p>

        <img src="@/assets/auto-bot-ani.gif" class="h-32 w-32" />

    </main>

    <Footer />
</template>
