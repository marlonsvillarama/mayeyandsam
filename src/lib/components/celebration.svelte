<script>
    import SplitCol from "./split-col.svelte";
    // import JourneySplit from "./journey-split.svelte";
    import FaqLink from "./faq-link.svelte";
</script>

<div class="celebration">
    <!-- <img class="travel-stamp" src="/images/time-to-travel.png"> -->
    <h2 class="reveal">A celebration in <em>paradise.</em></h2>

    <!-- <SplitCol>
        <div class="celeb">col 1</div>
        <div class="celeb">col 2</div>
    </SplitCol> -->
    <SplitCol bg="ivory">
        <div class="celeb">
            <div class="celeb-header">
                <div class="celeb-title">Welcome Party</div>
                <p>A perfect evening to get to know each other while enjoying good food and drinks.</p>
            </div>
            
            <div class="celeb-detail">
                <p class="celeb-date">December 26, 2026</p>
                <p>-----------------</p>
                <p>Tropical cocktail</p>
            </div>

            <FaqLink label="More info" link="welcome-party" />
        </div>
        <div class="celeb">
            <div class="celeb-header">
                <div class="celeb-title">Ceremony & Reception</div>
                <p>Join us as we exchange vows by the sea and celebrate the beginning of our forever.</p>
            </div>
            
            <div class="celeb-detail">
                <p class="celeb-date">December 27, 2026</p>
                <p>Mövenpick Beachfront</p>
                <p>Tropical cocktail</p>
            </div>

            <FaqLink label="More info" link="ceremony" />
        </div>
    </SplitCol>
</div>

<style>
    .celebration {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 8rem 0;
        position: relative;
    }
    .celeb {
        display: grid;
        /* flex-direction: column; */
        gap: 1.5rem;
        text-align: center;
        /* border: 1px solid red; */
    }
    .celeb:first-of-type {
        margin-bottom: 4rem;
    }
    @media (min-width: 48rem) {
        .celeb:first-of-type {
            margin-bottom: 0;
        }
    }
    .celeb-header {
        display: grid;
        gap: 1.5rem;
    }
    .celeb-header p {
        font-size: 1rem;
        font-weight: 400;
        margin: 0 auto;
        /* text-align: center; */
        width: 70%;
    }
    .celeb-title {
        color: var(--rose);
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(1rem, calc(1rem + 2vw), 2rem);
        /* font-style: italic; */
        display: inline-block;
        text-decoration: underline;
        text-decoration-color: var(--border);
        text-decoration-thickness: 3px;
        text-underline-offset: 1.5rem;
        font-weight: 500;
        text-align: center;
        padding-bottom: 0.25rem;
        /* border-bottom: 1.5px solid var(--gold-light); */
    }
    .celeb-detail p {
        font-size: 1rem;
        margin: 0 auto;
        /* text-align: center; */
        width: 70%;
        /* border: 1px solid red; */
    }
    .celeb-detail .celeb-date {
        color: var(--gold);
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.5rem;
        font-weight: 700;
    }
    /* .travel-stamp {
        position: absolute;
        top: 50%;
        left: 0;
        height: 20rem;
        opacity: 15%;
        transform: translateX(-20%) translateY(-62%) rotate(15deg);
        z-index: 1;
    } */
</style>
