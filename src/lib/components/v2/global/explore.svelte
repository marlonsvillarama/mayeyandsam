<script>
    import { ArrowRight } from "@lucide/svelte";
    import FaqLink from "./faq-link.svelte";
    import BookingForm from "./booking-form.svelte";
    import TapedPaper from "$lib/components/v2/global/taped-paper.svelte";
    
    let showModal = $state(false);
</script>

<div class="explore">
    <div class="wrapper">
        <div class="details">
            <!-- <div class="heading"> -->
                <span class="script">Come for the love,</span>
                <h3>Stay for the island.</h3>
                <p>
                    Come celebrate with us, then stay a little longer for the beach, sunsets, food, and everything that makes Boracay so special.
                </p>

                <div class="links">
                    <!-- <FaqLink label="Book Now" link="travel" /> -->
                    <button type="button" onclick={() => showModal = true }>
                        Reserve Now
                    </button>
                    
                    <a href="/travel" title="More Info" class="more-info">
                        More Info
                        <ArrowRight />
                    </a>
                </div>
            <!-- </div> -->
        </div>

        <div class="pic">
            <TapedPaper />
        </div>
    </div>
</div>

<BookingForm bind:show={showModal} />

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
    .details > .links {
        /* border: 1px solid red; */
        display: flex;
        /* grid-templa */
        align-items: center;
        gap: 2rem;
    }
    .links > button {
        background-color: var(--terracota);
        border: 0;
        border-radius: 100px;
        color: var(--ivory);
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 1px;
        text-decoration: none;
        text-transform: uppercase;
        /* margin-right: 1.5rem; */
        padding: 0.75rem 1.25rem;
        transition: all 150ms ease-in-out;
    }
    .links > button:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        /* transform: translateY(-2px); */
    }
    .links > .more-info {
        display: flex;
        flex: 1;
        /* border: 1px solid red; */
        /* background-color: var(--terracota); */
        /* border-radius: 100px; */
        color: var(--chocolate);
        font-size: clamp(0.875rem, 2vw, 0.875rem);
        font-weight: 500;
        letter-spacing: 0.75px;
        cursor: pointer;
        /* padding: 0.5rem; */
        align-items: center;
        gap: 0.5rem;
        text-transform: uppercase;
        text-decoration: none;
        transition: all 100ms ease-in-out;
    }
    .links > .more-info:hover {
        transform: translateX(8px);
    }
</style>
