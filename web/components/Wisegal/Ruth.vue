<script setup lang="ts">
/* Define properties. */
// https://vuejs.org/guide/components/props.html#props-declaration
const props = defineProps({
    data: {
        type: [Object],
    },
})

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
    <main class="flex flex-col gap-4">
        <input
            type="text"
            placeholder="Enter your delivery address"
            class="px-5 py-2 bg-amber-50 border border-amber-200 rounded-xl shadow"
        />

        <input
            type="text"
            placeholder="Enter a staking contract"
            class="px-5 py-2 bg-amber-50 border border-amber-200 rounded-xl shadow"
        />
    </main>
</template>
