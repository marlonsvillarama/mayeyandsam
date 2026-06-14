<script>
    import { ArrowRight } from "@lucide/svelte";
    let {
        children,
        image,
        label = "label",
        date = "26",
        day = "Saturday",
        link = "/",
        location = "Mövenpick Hotel"
    } = $props();

    let imageClass = $derived(`background-image:url("${image}");`);
</script>

<div class="venue-card">
    <div class="img" style={imageClass}></div>
    <div class="details">
        <span class="label">{label}</span>
        <div class="date"><span class="month">December</span>{date}</div>
        <!-- <span class="location">
            <div class="image"></div>
            {location}
        </span> -->
        <!-- <div class="attire">
            <div class="image"></div>
            Tropical Cocktail
        </div> -->
        <a href={link} title={label} class="more-info">
            More Info
            <ArrowRight />
        </a>
    </div>
</div>

<style>
    .venue-card {
        /* border: 1px solid red; */
        border-radius: 1.5rem;
        padding: 0.5rem;
        /* gap: 1rem; */
        background-color: var(--cream);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
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
    @media (min-width: 60rem) {
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
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    .details > .date {
        align-items: baseline;
        /* border: 1px solid red; */
        color: var(--espresso);
        display: flex;
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.75rem;
        font-weight: 600;
        gap: 0.5rem;
        line-height: 2.25rem;
        padding-bottom: 1rem;
        border-bottom: 1.5px dotted var(--chocolate);
        /* margin-top: 0.5rem; */
        margin-bottom: 0.75rem;
    }
    .details > .date > .month {
        font-size: 1.75rem;
        font-weight: 600;
    }
    /* .details > .date::after {
        content: "th";
        font-size: 1.5rem;
        vertical-align: super;
    } */
    .details > .more-info {
        display: flex;
        flex: 0;
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
    .details > .more-info:hover {
        transform: translateX(8px);
    }
    .details > .location,
    .details > .attire {
        /* border: 1px solid red; */
        color: var(--espresso);
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        opacity: 0.7;
        display: flex;
        align-items: center;
    }
    .details > .location {
        text-transform: uppercase;
        margin-bottom: 0.5rem;
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
