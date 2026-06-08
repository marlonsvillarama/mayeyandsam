<script>
    import FaqLink from "./faq-link.svelte";
    import TapedPaper from "$lib/components/v2/global/taped-paper.svelte";
</script>

<div class="explore">
    <div class="wrapper">
        <div class="details">
            <!-- <div class="heading"> -->
                <span class="script">Come for the love,</span>
                <h3>Stay for the island.</h3>
                <p>
                    White sand, turquoise water, golden sunsets - Boracay is the perfect place to celebrate and make unforgettable memories together.
                </p>

                <FaqLink label="Travel & Stay" link="travel" />
            <!-- </div> -->
        </div>

        <div class="pic">
            <TapedPaper />
        </div>
    </div>
</div>

<style>
    .explore {
        margin-top: 6rem;
        margin-bottom: 6rem;
        /* border: 1px solid red; */
    }
    .explore > .wrapper {
        display: grid;
        /* flex-direction: column; */
        gap: 4rem;
        /* grid-template-columns: 1fr 1fr; */
        /* border: 1px solid red; */
    }
    .explore > .wrapper > .pic {
        display: none;
    }
    /* .wrapper > div {
        border: 1px solid red;
    } */
    @media (min-width: 40rem) {
        .explore > .wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            /* grid-template-columns: 1fr 1fr; */
        }
    }
    @media (min-width: 60rem) {
        .explore > .wrapper > .pic {
            display: block;
            transform: translateX(-4rem);
        }
    }
    .details {
        /* border: 1px solid red; */
        max-width: 35rem;
    }
    .details > h3 {
        margin-bottom: 2rem;
    }
    .details > p {
        color: var(--chocolate);
        font-weight: 300;
        letter-spacing: 0.25px;
        margin-bottom: 3rem;
    }
    /* .explore > .wrapper > *:last-of-type {
        border: 1px solid red;
    } */
</style>
