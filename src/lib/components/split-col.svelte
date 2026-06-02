<script>
    let {
        bg = 'sand',
        children,
    } = $props();
</script>

<div class="split-2 {bg}">
    {@render children?.()}
</div>

<style>
    .cream {
        background-color: var(--cream);
    }
    .gold-light {
        background-color: var(--gold-light);
    }
    .gold-pale {
        background-color: var(--gold-pale);
    }
    .ivory {
        background-color: var(--ivory);
    }
    .sand {
        background-color: var(--sand);
    }
    .white {
        background-color: var(--white);
    }
    .split-2 {
        display: grid;
        width: 100%;
        /* gap: 1.5rem; */
    }
    @media (min-width: 48rem) {
        .split-2 {
            grid-template-columns: 1fr 1fr;
            gap: 0;
        }
    }
</style>