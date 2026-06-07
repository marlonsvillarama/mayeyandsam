<script>
    let {
        children,
        image,
        label = "label",
        date = "26",
        location = "Mövenpick Hotel"
    } = $props();

    let imageClass = $derived(`background-image:url("${image}");`);
</script>

<div class="venue-card">
    <div class="img" style="{imageClass}"></div>
    <div class="details">
        <span class="label">{label}</span>
        <span class="date">{date}</span>
        <span class="location">
            <div class="image"></div>
            {location}
        </span>
        <div class="attire">
            <div class="image"></div>
            Tropical Cocktail
        </div>
    </div>
</div>

<style>
    .venue-card {
        /* border: 1px solid red; */
        border-radius: 1.5rem;
        padding: 0.5rem;
        /* gap: 1rem; */
        background-color: var(--cream);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        width: 100%;
        margin: 0 auto;
        /* box-shadow: var(--chocolate) 0px 3px 8px; */
    }
    :global(.img) {
        /* width: 15rem; */
        width: 100%;
        height: 13rem;
        background-size: cover;
        background-position: center;
        border-radius: 1rem;
    }
    @media (min-width: 40rem) {
        .venue-card {
            display: grid;
            grid-template-columns: auto 1fr;
        }
        :global(.img) {
            /* width: clamp(10rem, calc(10rem + 6vw), 15rem); */
            width: 13rem;
            height: 100%;
        }
    }
    .details {
        padding: 0.75rem 1.25rem;
        /* width: 18rem; */
        display: flex;
        flex-direction: column;
        color: var(--chocolate);
        /* border: 1px solid red; */
    }
    .details > .label {
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    .details > .date {
        color: var(--espresso);
        font-family: 'Cormorant Garamond', serif;
        font-size: 3.5rem;
        font-weight: 200;
        line-height: 2.25rem;
        padding-bottom: 1.5rem;
        border-bottom: 1.5px dotted var(--chocolate);
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }
    .details > .date::after {
        content: "th";
        font-size: 1rem;
        vertical-align: super;
    }
    .details > .location,
    .details > .attire {
        color: var(--espresso);
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        opacity: 0.7;
        display: flex;
        align-items: center;
    }
    .details > .location {
        text-transform: uppercase;
        margin-bottom: 1rem;
    }
    /* .details > .attire {
        display: flex;
        align-items: center;
    } */
    .location > .image,
    .attire > .image {
        background-repeat: no-repeat;
        height: 1.5rem;
        width: 1.75rem;
        /* width: 50px; */
    }
    .location > .image {
        background-image: url("/images/SVG/map-pin.svg");
    }
    .attire > .image {
        background-image: url("/images/SVG/dress.svg");
    }
</style>
