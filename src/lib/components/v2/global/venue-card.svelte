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
        <span class="location">{location}</span>
        <span class="location">Tropical Cocktail</span>
    </div>
</div>

<style>
    .venue-card {
        /* border: 1px solid red; */
        border-radius: 1.5rem;
        padding: 0.5rem;
        display: grid;
        grid-template-columns: auto 1fr;
        /* gap: 1rem; */
        background-color: var(--cream);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        width: 100%;
        /* box-shadow: var(--chocolate) 0px 3px 8px; */
    }
    :global(.img) {
        width: 15rem;
        height: 13rem;
        background-size: cover;
        background-position: center;
        border-radius: 1rem;
    }
    .details {
        padding: 0.75rem 1.25rem;
        width: 18rem;
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
        /* border: 1px solid red; */
        font-family: 'Cormorant Garamond', serif;
        font-size: 3.5rem;
        font-weight: 200;
        line-height: 2.25rem;
        padding-bottom: 0.75rem;
        border-bottom: 1.5px dotted var(--chocolate);
        margin-bottom: 0.25rem;
    }
    .details > .date::after {
        content: "th";
        font-size: 1rem;
        vertical-align: super;
    }
    .details > .location {
        color: var(--espresso);
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0.5px;
        opacity: 0.7;
        /* text-transform: uppercase; */
    }
</style>
