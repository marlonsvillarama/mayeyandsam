<script>
    import TribarSection from "./tribar-section.svelte";
</script>

<div class="tribar wrapper">
    <div class="wrapper">
        <TribarSection label="The Weekend"
            image="/images/SVG/cocktail copy.svg"
            link="See The Schedule"
            href="/travel"
        >
            Join us for a relaxed welcome party on the 26th and our wedding ceremony on the 27th.
        </TribarSection>

        <TribarSection label="Travel & Stay"
            image="/images/SVG/luggage.svg"
            link="Plan Your Trip"
            href="/travel"
        >
            Find travel tips, hotel recommendations, and everything you need to know for your trip.
        </TribarSection>

        <TribarSection label="RSVP"
            image="/images/SVG/heart-mail.svg"
            link="RSVP Now"
            href="/travel"
        >
            Kindly RSVP by October 31, 2026 so we can save you a seat and plan all the details.
        </TribarSection>
    </div>
</div>

<style>
    /* .tribar {
        border: 1px solid red;
    } */
    .tribar > .wrapper {
        border-radius: 1.5rem;
        padding: 0.5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background-color: var(--cream);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        /* width: 100%; */
    }
</style>
