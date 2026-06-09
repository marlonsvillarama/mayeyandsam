<script>
    let {
        id,
        label,
        value = $bindable()
    } = $props();
</script>

<div class="field">
    <label for={id}>{label}</label>
    <input type="text" {id}>
</div>

<style>
    .field {
        display: grid;
        gap: 0.25rem;
        position: relative;
    }
    .field > label {
        color: var(--espresso);
        font-size: 1rem;
        font-weight: 500;
        opacity: 0.6;
    }
    .field > input[type=text] {
        background-color: var(--cream);
        border: 0;
        color: var(--espresso);
        padding: 1rem 1.5rem;
    }
</style>
