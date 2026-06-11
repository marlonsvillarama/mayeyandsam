<script>
    import { X } from "@lucide/svelte";
    import FieldText from "./field-text.svelte";

    let {
        firstName,
        lastName,
        onedit,
        onremove
    } = $props();

    // let firstName = $state('');
    // let lastName = $state('');
    // let restrictions = $state('');
    // let guestName = $derived.by(() => {
        // if (!firstName && !lastName) { return 'Add a guest...' }
        // return `${firstName} ${lastName}`;
    // });
    let guestStyle = $derived.by(() => {
        if (firstName && lastName) { return `opacity:1;color:var(--chocolate);font-weight:500;background-color:var(--ivory);`; }
        return 'opacity:0.6;'
    });
</script>

<div class="guest-row">
    <button type="button" class="remove" onclick={onremove}>
        <X size={20} />
    </button>
    <button type="button" class="edit" onclick={onedit}>{firstName} {lastName}</button>
</div>

<dialog>
    add guest
</dialog>

<style>
    .guest-row {
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }
    .guest-row > button {
        /* background-color: var(--cream); */
        border: 0;
        border-radius: 0.5rem;
        color:var(--chocolate);
        cursor: pointer;
        padding: 0.5rem;
        transition: all 100ms ease-in-out;
    }
    .guest-row > button:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .guest-row > button.remove {
        background-color: var(--cream);
        font-size: 0.875rem;
        font-weight:500;
        letter-spacing: 0.25px;
    }
    .guest-row > button.edit {
        background-color: var(--white);
        flex: 1;
        padding: 0.7rem 0.75rem;
        text-align: left;
        text-transform: uppercase;
    }
</style>
