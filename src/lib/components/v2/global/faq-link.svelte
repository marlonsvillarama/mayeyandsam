<script>
    let {
        label,
        link = ""
    } = $props();
</script>

<!-- <div class="faq-link"> -->
    <a href="/{link}" title={label}>
        <span>{label}</span>
        <i class="ph ph-arrow-right"></i>
    </a>
<!-- </div> -->

<style>
    /* .faq-link {
        border: 1px solid red;
        display: flex;
        text-align: center;
        justify-content: center;
        /* align-items: start; *
    } */
    a {
        background-color: var(--terracota);
        border-radius: 100px;
        /* border: 1.5px solid var(--gold-light); */
        /* background: transparent; */
        /* font-family: 'Jost', sans-serif; */
        /* font-size: 0.875rem; */
        color: var(--ivory);
        font-size: clamp(0.875rem, 2vw, 0.875rem);
        font-weight: 400;
        letter-spacing: 0.75px;
        cursor: pointer;
        /* color: var(--charcoal); */
        transition: all 0.2s;
        /* display: flex; */
        /* flex: 0; */
        margin: 0 auto;
        padding: 0.5rem 2rem;
        align-items: center;
        gap: 0.5rem;
        text-transform: uppercase;
        text-decoration: none;
    }
    a:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
        /* transform: translateY(-2px); */
    }
</style>