<script>
    import { Dot } from "@lucide/svelte";
</script>

<footer>
    <div class="wrapper">
        <span class="title">Sam & Marielle</span>
        <span class="date-place">December 27, 2026</span>
        <div class="date-place">Boracay, Philippines</div>
    </div>
</footer>

<style>
    footer {
        background-color: var(--chocolate);
        color: var(--sand);
    }
    .wrapper {
        padding-top: 2rem;
        padding-bottom: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .title {
        font-size: 1.125rem;
        font-weight: 400;
        letter-spacing: 4px;
        text-transform: uppercase;
    }
    .date-place {
        font-size: 0.975rem;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
</style>
