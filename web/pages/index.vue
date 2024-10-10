<script setup lang="ts">

</script>

<template>
    <main class="max-w-5xl mx-auto py-5 flex flex-col gap-4">
        <h1 class="text-6xl font-medium text-gray-700 tracking-widest">
            Wise Gals
        </h1>

        <img src="@/assets/auto-bot-ani.gif" class="h-32 w-32" />

        <section>
            <h2 class="text-3xl text-fuchsia-500  tracking-widest">
                What's Coming Soon...
            </h2>

            <p class="my-3 text-xl font-light italic">
                We working hard to make your smart contracts even SMARTER!
            </p>

            <ol class="pl-10 list-decimal leading-8">
                <li>
                    Automation for UTXO smart contracts on multiple networks, including:
                    <ul class="pl-8 list-disc">
                        <li>Bitcoin</li>
                        <li>Bitcoin Cash</li>
                        <li>Nexa</li>
                    </ul>
                </li>

                <li>
                    Earn passive income as an Auto-bots managers:
                    <ol class="pl-8 list-decimal">
                        <li><NuxtLink to="/marie" class="text-blue-500 hover:underline">
                            Marie Chanel
                        </NuxtLink></li>

                        <li><NuxtLink to="/ruth" class="text-blue-500 hover:underline">
                            Ruth Laurent
                        </NuxtLink></li>
                    </ol>
                </li>
            </ol>
        </section>
    </main>

    <Footer />
</template>
