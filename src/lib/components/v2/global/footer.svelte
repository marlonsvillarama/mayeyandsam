<script>
    import { Dot } from "@lucide/svelte";
</script>

<footer>
    <div class="wrapper">
        <span class="title">Sam & Marielle</span>
        <!-- <div class="details"> -->
            <span class="date-place">December 27, 2026</span>
            <div class="date-place">Boracay, Philippines</div>
        <!-- </div> -->
    </div>
</footer>

<style>
    footer {
        background-color: var(--chocolate);
        color: var(--sand);
    }
    footer > .wrapper {
        padding-top: 2rem;
        padding-bottom: 2.5rem;
        display: grid;
        /* gap: 1rem; */
        /* align-items: center; */
        /* justify-content: space-between; */
    }
    footer > .wrapper > .title {
        font-size: 1.125rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        letter-spacing: 4px;
        text-transform: uppercase;
    }
    @media(min-width: 60rem) {
        footer > .wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        footer > .wrapper > .title {
            margin-bottom: 0;
        }
    }
    /* .title { */
        /* font-size: 1.125rem; */
        /* font-weight: 400; */
    /* } */
    footer > .wrapper > .date-place {
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
</style>
