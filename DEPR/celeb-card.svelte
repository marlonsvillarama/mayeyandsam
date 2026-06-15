<script>
    import FaqLink from "./faq-link.svelte";
</script>

<div class="celeb">
    <div class="celeb-img"></div>
    <div class="celeb-content">
        <div class="celeb-header">
            <div class="celeb-title">Welcome Party</div>
            <p>December 26, 2026</p>
            <!-- <p class="celeb-desc">A perfect evening to get to know each other while enjoying good food and drinks.</p> -->
        </div>
        
        <div class="celeb-detail">
            <!-- <p class="celeb-date">December 26, 2026</p> -->
            <p>-----------------</p>
            <p>Tropical cocktail</p>
        </div>

        <FaqLink label="More info" link="welcome-party" />
    </div>
</div>

<style>
    .celeb {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        border-radius: 2rem;
        width: 100%;
        max-width: 35rem;
        display: grid;
        /* flex-direction: column; */
        gap: 0.5rem;
        /* text-align: center; */
        /* border: 1px solid red; */
        padding: 0.75rem 0.9rem;
        display: flex;
        flex-direction: column;
    }
    .celeb-img {
        border: 1px solid red;
        border-radius: 1.5rem;
        width: 100%;
        height: 8rem;
        /* display: none; */
    }
    @media (min-width: 48rem) {
        .celeb {
            flex-direction: row;
        }
        .celeb-img {
            width: 35%;
        }
    }
    .celeb-content {
        border: 1px solid red;
        flex: 1;
        /* width: 100%; */
    }
    /* .celeb:first-of-type {
        margin-bottom: 4rem;
    } */
    /* @media (min-width: 48rem) {
        .celeb:first-of-type {
            margin-bottom: 0;
        }
    } */
    .celeb-header {
        display: grid;
        /* gap: 1.5rem; */
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
        /* text-decoration: underline;
        text-decoration-color: var(--border);
        text-decoration-thickness: 3px;
        text-underline-offset: 1.5rem; */
        font-weight: 500;
        /* text-align: center; */
        /* padding-bottom: 0.125rem; */
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
    p.celeb-desc {
        font-weight: 300;
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
