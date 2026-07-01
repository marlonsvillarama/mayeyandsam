<script>
    import QuadbarSection from "./quadbar-section.svelte";

    let { children } = $props();
</script>

<div class="tribar wrapper">
    <div class="wrapper">
        {@render children?.()}
        <!-- <QuadbarSection label="5:00 PM"
            image="/images/SVG/cocktail copy.svg"
            link="See The Schedule"
            href="/travel"
            icon="clock"
        >
            Party starts around sunset
        </QuadbarSection> -->

        <!-- <QuadbarSection label="Boracay"
            image="/images/SVG/luggage.svg"
            link="Plan Your Trip"
            href="/travel"
            icon="map"
        >
            Outdoor venue weather-permitting
        </QuadbarSection> -->

        <!-- <QuadbarSection label="White & Beige"
            image="/images/SVG/heart-mail.svg"
            link="RSVP Now"
            href="/travel"
            icon="shirt"
        >
            Casual Dress Code
        </QuadbarSection> -->

        <!-- <QuadbarSection label="Food, Drinks & Karaoke"
            image="/images/SVG/heart-mail.svg"
            link="RSVP Now"
            href="/travel"
            icon="drinks"
        >
            Filipino food, drinks, & karaoke
        </QuadbarSection> -->
    </div>
</div>

<style>
    /* .tribar {
        border: 1px solid red;
    } */
    .tribar {
        /* background-color: var(--cream); */
        z-index: 100;
    }
    .tribar > .wrapper {
        border-radius: 1.5rem;
        padding: 0.5rem;
        display: grid;
        background-color: var(--cream);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        /* width: 100%; */
    }
    @media (min-width: 40rem) {
        .tribar > .wrapper {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 60rem) {
        .tribar > .wrapper {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>
