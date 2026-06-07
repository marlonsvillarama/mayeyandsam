<script>
    let {
        fixed = false,
        position = "top-left",
    } = $props();

    let bg = $derived(`anahaw ${fixed === true ? 'anahaw-fixed' : ''} ${position}`);
</script>

<div class={bg}></div>

<style>
    .anahaw {
        background-repeat: no-repeat;
        opacity: 0.3;
        display: none;
        z-index: -1;
    }
    .anahaw-fixed {
        display: none;
    }
    @media (min-width: 40rem) {
        .anahaw {
            display: block;
        }
        .anahaw-fixed {
            display: block;
            position: fixed;
        }
    }
    .top-left {
        background-image: url(/images/SVG/anahaw-2.svg);
        height: clamp(18rem, calc(18rem + 2vw), 24rem);
        width: clamp(18rem, calc(18rem + 2vw), 24rem);
        /* position: fixed; */
        top: 0;
        left: 0;
    }
    :global(.bottom-right) {
        background-image: url(/images/SVG/anahaw-3.svg);
        height: clamp(18rem, calc(18rem + 2vw), 24rem);
        width: clamp(18rem, calc(18rem + 2vw), 24rem);
        position: absolute;
        bottom: 0;
        right: 0;
        transform: rotate(180deg);
    }
</style>
