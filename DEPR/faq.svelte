<script>
    import FaqItem from "./faq-item.svelte";

    let { items } = $props();
</script>

<div class="faq-wrapper">
    {#each items as item}
    <FaqItem question={item.label} answer={item.content} preview={item.preview} />
    {/each}
</div>

<style>
    .faq-wrapper {
        display: grid;
        /* border: 1px solid red; */
        gap: 1rem;
    }
</style>
