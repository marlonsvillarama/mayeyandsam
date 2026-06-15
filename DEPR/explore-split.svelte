<script>
    import SplitCol from "./split-col.svelte";
    import FaqLink from "./faq-link.svelte";
</script>

<div class="explore">
    <!-- <h2 class="reveal">Explore the <em>island.</em></h2> -->
    <h2>From <em>sunrise</em> shores to <em>sunset</em> skies.</h2>

    <div class="explore-layout">
        <div>
            <div class="explore-img eat"></div>
            <span class="explore-title">Eat & Drink</span>
        </div>
        <div>
            <!-- <div class="explore-mask"></div> -->
            <div class="explore-img land"></div>
            <span class="explore-title">Land Adventures</span>
        </div>
        <div>
            <div class="explore-img water"></div>
            <span class="explore-title">Water Activities</span>
        </div>
        <div>
            <div class="explore-img night"></div>
            <span class="explore-title">Nightlife</span>
        </div>
    </div>
    <!-- <SplitCol bg="ivory">
        <SplitCol bg="ivory">
        </SplitCol>

        <SplitCol bg="ivory">
        </SplitCol>
    </SplitCol> -->
</div>

<style>
    .explore {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
        padding: 5rem 0 1.5rem;
        position: relative;
        /* margin: 0 2rem; */
    }
    .explore h2 {
        /* margin: 0 auto;
        border: 1px solid red; */
        text-align: center;
    }
    .explore-layout {
        /* max-width: 68.75rem; */
        /* border: 1px solid red; */
        /* background-color: var(--brown); */
        width: 100%;
        display: grid;
        gap: 1.5rem;
    }
    @media (min-width: 30rem) {
        .explore {
            padding-bottom: 3px;
        }
        .explore-layout {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 3px;
        }
    }
    @media (min-width: 60rem) {
        /* .explore {
            margin: 0 4rem;
        } */
        .explore-layout {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            /* align-items: flex-start; */
            /* justify-content: space-between; */
            /* grid-template-columns: repeat(4, 1fr); */
        }
    }
    .explore-layout > div {
        /* border: 1px solid green; */
        position: relative;
        display: grid;
        /* flex-direction: column; */
        gap: 0.5rem;
        text-align: center;
        background-color: var(--white);
        /* border-radius: 1rem; */
        /* box-shadow: 0 4px 20px rgba(197,163,90,0.4); */
    }
    .explore-header {
        align-items: center;
        /* background-color: var(--sand); */
        display: flex;
        font-size: 1.125rem;
        font-weight: 500;
        gap: 0.75rem;
        padding: 0.5rem 0.75rem 0;
        /* justify-content: space-between; */
        /* padding-bottom: 0.25rem;
        border-bottom: 3px solid var(--border); */
    }
    .explore-header > i {
        font-size: 24px;
    }
    .explore-img {
        background-position: center;
        background-size: cover;
        /* border-bottom-left-radius: 1rem; */
        /* border-bottom-right-radius: 1rem; */
        height: 20rem;
        width: 100%;
    }
    .explore-title {
        position: absolute;
        left: 50%;
        background-color: var(--sand);
        /* display: block; */
        width: 100%;
        /* border: 1px solid red; */
        transform: translateX(-50%);
        color: var(--brown);
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(1.25rem, calc(1.25rem + 2vw), 1.5rem);
        font-weight: 400;
        letter-spacing: 0.25px;
        line-height: 2.5rem;
        padding: 0.5rem 0;
        /* text-transform: uppercase; */
        z-index: 100;
    }
    .explore-img.eat {
        background-image: url(/images/sunnyside-cafe.jpg);
    }
    .explore-img.land {
        /* background-image: url(/images/dmall.webp); */
        background-image: url(/images/dmall-02.webp);
    }
    .explore-img.water {
        background-image: url(/images/boracay-ufo.webp);
    }
    .explore-img.night {
        /* background-image: url(/images/boracay-night-life.webp); */
        background-image: url(/images/fire-dancer.webp);
        background-size: cover;
    }
    @media (min-width: 60rem) {
        .explore-img.eat + .explore-title,
        .explore-img.water + .explore-title {
            top: 0;
        }
        .explore-img.land + .explore-title,
        .explore-img.night + .explore-title {
            bottom: 0;
        }
    }
    .explore-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--brown);
        opacity: 0.4;
        cursor: pointer;
        z-index: 10;
    }
</style>
