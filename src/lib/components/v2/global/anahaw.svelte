<script>
    let {
        position = "top-left"
    } = $props();

    let bg = $derived(`anahaw ${position}`);
</script>

<div class={bg}></div>

<style>
    .anahaw {
        position: fixed;
        background-repeat: no-repeat;
        opacity: 0.3;
        display: none;
        /* border: 1px solid red; */
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
    @media (min-width: 48rem) {
        .anahaw {
            display: block;
        }
    }
</style>
