<script>
    import SplitCol from "./split-col.svelte";
    import CelebCard from "./celeb-card.svelte";
    // import JourneySplit from "./journey-split.svelte";
    import FaqLink from "./faq-link.svelte";
</script>

<div class="celebration">
    <!-- <img class="travel-stamp" src="/images/time-to-travel.png"> -->
    <!-- <h2 class="reveal">A celebration in <em>paradise.</em></h2>s -->

    <!-- <SplitCol>
        <div class="celeb">col 1</div>
        <div class="celeb">col 2</div>
    </SplitCol> -->
    <!-- <SplitCol bg="ivory"> -->
        <CelebCard />
        <CelebCard />
        <!-- <div class="celeb">
            <div class="celeb-header">
                <div class="celeb-title">Ceremony & Reception</div>
                <p>December 27, 2026</p>
                <p class="celeb-desc">Join us as we exchange vows by the sea and celebrate the beginning of our forever.</p>
            </div>
            
            <div class="celeb-detail">
                <p>Mövenpick Beachfront</p>
                <p>Tropical cocktail</p>
            </div>

            <FaqLink label="More info" link="ceremony" />
        </div> -->
    <!-- </SplitCol> -->
</div>

<style>
    .celebration {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5rem 0;
        margin: 0 1.5rem;
        position: relative;
        gap: 1.5rem;
    }
    @media (min-width: 40rem) {
        .celebration {
            flex-direction: row;
        }
    }
</style>
