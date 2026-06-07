<script>
    import VenueCard from "./venue-card.svelte";
</script>

<div class="celebration">
    <div class="wrapper">
        <VenueCard image="/images/welcome-party.png"
            label="Welcome Party"
            date="26"
            location="Basta sa beach"
        />
        <VenueCard image="/images/ceremony.jpg"
            label="Ceremony"
            date="27"
            location="Mövenpick Beachfront"
        />
    </div>
</div>

<style>
    .celebration {
        /* margin-top: 8rem; */
        /* border: 1px solid red; */
        /* background-color: red; */
        /* display: grid;
        grid-template-columns: 1fr 1fr; */
        /* border: 1px solid red; */
        z-index: 999;
    }
    .celebration > .wrapper {
        /* border: 1px solid red; */
        display: grid;
        align-items: center;
        gap: 1.5rem;
    }
    @media (min-width: 60rem) {
        .celebration > .wrapper {
            /* border: 1px solid red; */
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
    }
</style>