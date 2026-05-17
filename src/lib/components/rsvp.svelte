<script>
    let {
        floating = false
    } = $props();
</script>

<button class="rsvp {floating ? 'fixed' : ''}">
    <span>R S V P</span>
</button>

<style>
    .rsvp {
        padding: 16px 32px;
        border: 0;
        outline: 0;
        border-radius: 32px;
        background-color: var(--gold-light);
        color: var(--charcoal);
        font-weight: 500;
        cursor: pointer;
        transition: background-color 150ms ease-in-out;
    }
    .rsvp:hover {
        background-color: var(--primary);
    }
    .fixed {
        position: fixed;
        bottom: 48px;
        right: 64px;
        z-index: 100;
    }
</style>
