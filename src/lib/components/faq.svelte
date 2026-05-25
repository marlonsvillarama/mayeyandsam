<script>
    import FaqItem from "./faq-item.svelte";

    let { items } = $props();
</script>

<div class="faq-wrapper">
    {#each items as item}
    <FaqItem question={item.label} answer={item.content} />
    {/each}
</div>

<style>
    .faq-wrapper {
        display: grid;
    }
</style>
