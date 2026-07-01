<script>
  import { goto } from "$app/navigation";

    let {
        label,
        link = ""
    } = $props();
</script>

<!-- <div class="faq-link"> -->
    <button onclick={() => goto('/')}>
        <i class="ph ph-arrow-left"></i>
        Back To Home
    </button>
<!-- </div> -->

<style>
    button {
        background-color: var(--terracota);
        border: 0;
        border-radius: 100px;
        /* border: 1.5px solid var(--gold-light); */
        /* background: transparent; */
        /* font-family: 'Jost', sans-serif; */
        /* font-size: 0.875rem; */
        color: var(--ivory);
        cursor: pointer;
        font-size: clamp(0.875rem, 2vw, 0.875rem);
        font-weight: 400;
        letter-spacing: 0.75px;
        cursor: pointer;
        /* color: var(--charcoal); */
        transition: all 0.2s;
        display: inline;
        z-index: 999;
        /* display: flex; */
        /* flex: 0; */
        /* margin: 0 auto; */
        padding: 0.75rem 2rem;
        align-items: center;
        gap: 0.5rem;
        text-transform: uppercase;
        text-decoration: none;
    }
    button:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
        transform: translateY(-2px);
    }
</style>