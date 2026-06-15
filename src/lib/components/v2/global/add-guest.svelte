<script>
    import { UserRoundCheck, UserRoundPlus } from "@lucide/svelte";
    import FieldText from "./field-text.svelte";

    let {
        onclick
    } = $props();

    let firstName = $state('');
    let lastName = $state('');
    let restrictions = $state('');
    let guestStyle = $derived.by(() => {
        if (!firstName && !lastName) { return 'opacity:0.6;' }
        return `opacity:1;color:var(--chocolate);font-weight:500;background-color:var(--ivory);`;
    });
</script>

<div class="guest-row">
    <button type="button" {onclick}>
        <UserRoundPlus size={20} />
    </button>
    <button type="button" class="edit" {onclick}>Add a guest...</button>
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
        background-color: var(--cream);
        border: 0;
        border-radius: 0.5rem;
        cursor: pointer;
        padding: 0.5rem;
        transition: all 100ms ease-in-out;
    }
    .guest-row > button:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .guest-row > span {
        font-size: 0.875rem;
        letter-spacing: 0.25px;
    }
    .guest-row > button.edit {
        /* border: 1px solid red; */
        background-color: transparent;
        flex: 1;
        opacity:0.3;
        padding: 0.7rem 0.75rem;
        text-align: left;
    }
</style>
