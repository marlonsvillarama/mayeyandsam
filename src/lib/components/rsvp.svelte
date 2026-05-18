<script>
    let {
        floating = false
    } = $props();
</script>

<button class="rsvp {floating ? 'fixed' : ''}">
    <i class="ph ph-envelope-open"></i>
    <span>RSVP</span>
</button>

<style>
    .rsvp {
        padding: 16px 32px;
        border: 0;
        outline: 0;
        border-radius: 32px;
        background-color: var(--gold-light);
        color: var(--charcoal);
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 150ms ease-in-out;
    }
    .rsvp:hover {
        background-color: var(--primary);
    }
    .rsvp span {
        letter-spacing: 2px;
    }
    .fixed {
        position: fixed;
        top: 12px;
        right: 24px;
        z-index: 100;
    }
    i {
        font-size: 20px;
    }
</style>
