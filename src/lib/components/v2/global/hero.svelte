<script>
    import { MapPin, CalendarDays } from "@lucide/svelte";
    import Countdown from "./countdown.svelte";
    import FaqLink from "./faq-link.svelte";
</script>

<div class="hero wrapper">
    <div class="content">
        <!-- <div class="details">
            <div class="detail-row" style="color: #382a20;">
                <CalendarDays />
                <span>December 27, 2026</span>
            </div>
            <div class="detail-row" style="color: #382a20;">
                <MapPin />
                <span>Boracay, Philippines</span>
            </div>
        </div> -->

        <h1>A celebration in <em>paradise.</em></h1>

        <p>We can't wait to celebrate our love with you in beautiful Boracay.</p>

        <FaqLink label="Read Our Story" link="travel" />

        <Countdown />
    </div>
    <div></div>
</div>

<style>
    .hero {
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* border: 1px solid red; */
        /* overflow-x: visible; */
        padding-top: 3rem;
        padding-bottom: 4rem;
    }
    .hero > .content {
        color: var(--espresso);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2.5rem;
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
    .content > p {
        color: var(--chocolate);
        /* font-size: 1.125rem; */
        font-weight: 300;
        letter-spacing: 0.25px;
    }
</style>
