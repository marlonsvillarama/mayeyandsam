<script>
    import FaqItem from "./faq-item.svelte";

    let { items } = $props();
</script>

<div class="faq">
    <div class="wrapper">
        <!-- <h2>FAQs</h2> -->

        {#each items as item}
        <FaqItem question={item.label} answer={item.content} />
        {/each}
    </div>
</div>

<style>
    .faq {
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    .faq > .wrapper > h2 {
        text-align: center;
        margin-bottom: 1rem;
    }
</style>
