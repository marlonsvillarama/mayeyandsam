<script>
    let {
        id,
        label,
        transform = "capitalize",
        value = $bindable()
    } = $props();

    // let textCasing = $derived(`text-transform:${transform};`);
</script>

<div class="field">
    <label for={id}>{label}</label>
    <input type="text" {id} bind:value onfocus={(e) => e.currentTarget.select()}>
</div>

<style>
    .field {
        display: grid;
        gap: 0.25rem;
        position: relative;
    }
    .field > label {
        color: var(--espresso);
        font-size: 0.875rem;
        font-weight: 400;
        opacity: 0.6;
    }
    .field > input[type=text] {
        background-color: var(--white);
        border: 0;
        color: var(--espresso);
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0.5px;
        padding: 0.5rem 1rem;
        /* text-transform: uppercase; */
        width: 100%;
    }
</style>
