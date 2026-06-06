<script>
    import { ArrowRight } from "@lucide/svelte";
    let {
        children,
        image,
        label = "Label",
        link = "Link",
        href = "/"
    } = $props();
</script>

<div class="tribar-section">
    <div class="icon">
        <img src={image} style="height: 7rem;" title={label}>
    </div>
    <div class="details">
        <div class="heading">
            <div class="title">{label}</div>
            <p>{@render children?.()}</p>
        </div>
        <div class="link" style="color:#c86a4a">
            <a {href}>{link}</a>
            <ArrowRight />
        </div>
    </div>
</div>

<style>
    .tribar-section {
        /* border: 1px solid red; */
        margin: 1rem;
        display: grid;
        grid-template-columns: 20% auto;
        gap: 1.5rem;
        /* padding-left: 1.5rem; */
        padding-right: 1.5rem;
    }
    .tribar-section:not(:last-of-type) {
        border-right: 1.5px dotted var(--chocolate);
    }
    /* .tribar-section > * {
        border: 1px solid green;
    } */
    .tribar-section > .icon {
        /* border: 1px solid red; */
        display: flex;
        justify-content: center;
        /* text-align: center; */
    }
    :global(.tribar-section > .icon > img) {
        width: 100%;
        height: auto;
        /* max-height: 12rem; */
        /* border: 1px solid green; */
    }
    .details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .heading > .title {
        /* color: var(--es); */
        color: var(--chocolate);
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding-bottom: 0.5rem;
    }
    .heading > p {
        font-size: 0.875rem;
        line-height: 1.25rem;
        opacity: 0.7;
        margin-bottom: 1rem;
    }
    .details > .link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
    }
    .details > .link > a {
        color: var(--terracota);
        cursor: pointer;
        font-size: clamp(0.75rem, 2vw, 0.75rem);
        font-weight: 500;
        letter-spacing: 0.75px;
        text-decoration: none;
        text-transform: uppercase;
    }
</style>
