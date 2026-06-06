<script>
    import FaqLink from "./faq-link.svelte";
    import TapedPaper from "$lib/components/taped-paper.svelte";
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

        <TapedPaper />
    </div>
</div>

<style>
    .explore {
        margin-top: 6rem;
        margin-bottom: 6rem;
        /* border: 1px solid red; */
    }
    .explore > .wrapper {
        display: flex;
        justify-content: space-between;
        /* grid-template-columns: 1fr 1fr; */
        /* border: 1px solid red; */
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
