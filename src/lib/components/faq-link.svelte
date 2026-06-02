<script>
    let {
        label,
        link = ""
    } = $props();
</script>

<div class="faq-link">
    <a href="/{link}" title={label}>
        <span>{label}</span>
        <i class="ph ph-arrow-right"></i>
    </a>
</div>

<style>
    .faq-link {
        /* border: 1px solid red; */
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: start;
    }
    .faq-link > a {
        padding: 0.625rem 4rem;
        background-color: var(--sand);
        border-radius: 100px;
        border: 0;
        /* border: 1.5px solid var(--gold-light); */
        /* background: transparent; */
        font-family: 'Jost', sans-serif;
        /* font-size: 0.875rem; */
        font-size: clamp(0.875rem, calc(0.875rem + 2vw), 1rem);
        font-weight: 400;
        letter-spacing: 0.75px;
        cursor: pointer;
        color: var(--charcoal);
        transition: all 0.2s;
        display: flex;
        /* flex: 0; */
        margin: 0 auto;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
    }
    .faq-link > a:hover {
        background: var(--sand);
    }
</style>