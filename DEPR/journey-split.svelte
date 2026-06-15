<script>
    import FaqLink from "./faq-link.svelte";
    import SplitCol from "./split-col.svelte";
    import TapedPaper from "./taped-paper.svelte";
</script>

<SplitCol bg="ivory">
    <!-- <div class="journey-img"></div> -->
    <div class="journey-main">
        <h2 class="reveal">Your journey to Boracay starts here.</h2>
        <p>A few steps, but totally worth it. We'll guide you through the whole journey from airport to island.</p>
        <FaqLink label="More info" link="travel" />
    </div>
    <TapedPaper />
</SplitCol>

<style>
    .journey-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 4rem 2.5rem;
        /* border: 1px solid red; */
    }
    .journey-main > p {
        color: var(--chocolate);
        /* font-size: clamp(0.75rem, calc(0.75rem + 2vw), 1rem); */
        letter-spacing: 0.5px;
        margin-bottom: 0.5rem;
    }
    @media (min-width: 48rem) {
        .journey-main {
            /* display: flex; */
            max-width: 70%;
            margin: auto auto;
            padding: 0;
        }
    }
    .journey-img {
        background-image: url(/images/big_002.png);
        background-size: cover;
        background-position: center;
        height: clamp(40vh, calc(40vh + 10vw), 65vh);
        /* min-height: 60vh; */
        width: 100%;
    }
</style>