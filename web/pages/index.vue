<script setup lang="ts">

</script>

<template>
    <main class="max-w-5xl mx-auto py-5 flex flex-col gap-4">
        <h1 class="text-6xl font-medium text-gray-700 tracking-widest">
            Wise Gals
        </h1>

        <img src="@/assets/auto-bot-ani.gif" class="h-32 w-32" />

        <section>
            <h2 class="text-4xl text-fuchsia-500  tracking-widest">
                Coming Soonish...
            </h2>

            <p class="my-3 text-xl font-light italic">
                We're working very hard to make your smart contracts even SMARTER!
            </p>

            <ol class="pl-7 leading-9">
                <li>
                    <h3 class="text-fuchsia-700 text-lg font-medium">
                        Automation for UTXO smart contracts on multiple networks, including:
                    </h3>

                    <ul class="pl-8 list-disc text-lg tracking-wider leading-9">
                        <li>Bitcoin (BTC)</li>
                        <li>Bitcoin Cash (BCH)</li>
                        <li>Nexa (NEXA)</li>
                    </ul>
                </li>

                <li>
                    <h3 class="text-fuchsia-700 text-lg font-medium">
                        Earn passive income 24x7x365 as an auto-bot manager:
                    </h3>

                    <ol class="pl-8 list-decimal text-lg tracking-wider leading-9">
                        <li><NuxtLink to="/marie" class="text-blue-500 hover:underline">
                            Marie Chanel <small>— Advanced (GPU) Math &amp; Physics</small>
                        </NuxtLink></li>

                        <li><NuxtLink to="/ruth" class="text-blue-500 hover:underline">
                            Ruth Laurent <small>— Restaurateur</small>
                        </NuxtLink></li>
                    </ol>
                </li>
            </ol>
        </section>
    </main>

    <Footer />
</template>
