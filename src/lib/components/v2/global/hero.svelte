<script>
    import { MapPin, CalendarDays } from "@lucide/svelte";
    import Countdown from "./countdown.svelte";
    import FaqLink from "./faq-link.svelte";
</script>

<div class="hero">
    <div class="wrapper">
        <div>
            <h1>A celebration in <em>paradise.</em></h1>

            <p>We can't wait to celebrate our love with you in beautiful Boracay.</p>

            <Countdown />
        </div>
        <div></div>
    </div>
</div>

<style>
    .hero {
        /* display: grid;
        grid-template-columns: 1fr 1fr; */
        /* overflow-x: visible; */
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    .hero > .wrapper > div:first-child {
        /* border: 1px solid red; */
        color: var(--espresso);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: clamp(1.25rem, calc(1.25rem + 1vw), 2.5rem);
    }
    .hero > .wrapper > div:last-child {
        display: none;
    }
    @media (min-width: 64rem) {
        .hero {
            padding-bottom: 4rem;
        }
        .hero > .wrapper {
            display: grid;
            grid-template-columns: 45% 55%;
            /* max-width: 45%; */
        }
        .hero > .wrapper > div:last-child {
            display: none;
        }
    }
    /* .details {
        display: grid;
        gap: 0.5rem;
    } */
    /* .detail-row {
        display: flex;
        align-items: center;
        gap: 0.625rem;
        color: var(--espresso);
    } */
    /* .detail-row > span {
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 2px;
        text-transform: uppercase;
    } */
    .hero > .wrapper > div > p {
        color: var(--chocolate);
        /* font-size: 1.125rem; */
        font-weight: 300;
        letter-spacing: 0.25px;
        /* border: 1px solid red; */
    }
</style>
