<script>
    let {
        children,
        height = "400",
        image,
        top = false,
        left = false,
        right = false,
        bottom = false
    } = $props();

    let bgImage = $derived(`background-image:url("${image}"); background-size:cover;`);
    let bgHeight = $derived(`height:${height}px; width:auto;`);

    let leftWidth = $derived(`width:${height}px;`);
    let leftTransform = $derived.by(() => {
        let half = Math.ceil((height - 27) / 2);
        return `transform: translateX(-${half}px) translateY(${half - 2}px) rotate(90deg);`;
    });
    // console.log('leftWidth', leftWidth);
    // console.log('leftTransform', leftTransform);
</script>

<div class="img-wrapper" style="{bgImage}; {bgHeight}">
    <!-- {@render children?.()} -->

    {#if top}
        <div class="tear top"></div>
    {/if}

    {#if left}
        <div class="tear left" style="{leftWidth} {leftTransform}"></div>
    {/if}

    {#if right}
        <div class="tear right"></div>
    {/if}

    {#if bottom}
        <div class="tear bottom"></div>
    {/if}
</div>

<style>
    .img-wrapper {
        /* display: inline-block; */
        position: relative;
        background-position: center;
        /* border: 1px solid blue; */
    }
    :global(.img-wrapper > img) {
        display: block;
        /* width: 100%;
        height: auto; */
    }
    /* .img-wrapper::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 480px;
        height: auto;
        z-index: -1;
        background-image: url('/images/big_002.png');
        background-size: cover;
        background-position: center;
    } */
    .tear {
        position: absolute;
        z-index: 20;
        background-image: url('/images/SVG/tear-ivory.svg');
    }
    .top {
        top: 0;
        left: 0;
        height: 27px;
        width: 100%;
        transform: translateY(10px) rotate(180deg) scale(2);
    }
    .left {
        /* border: 1px solid red; */
        top: 0;
        left: 0;
        height: 27px;
        /* transform: scaleY(5); */
    }
    .right {
        top: 0;
        right: 0;
        /* bottom: 0; */
        height: 27px;
        width: 400px;
        /* border: 1px solid red; */
        /* background-image: url('/images/SVG/tear-ivory.svg#svgView(viewBox(0, 0, 480, 27))'); */
        transform: translateX(188px) translateY(187px) rotate(-90deg) scale(4);
    }
    .bottom {
        /* background-image: url('/images/SVG/tear-ivory.svg#svgView(viewBox(0, 0, 480, 27))'); */
        /* border: 1px solid red; */
        bottom: 0;
        left: 0;
        height: 27px;
        width: 100%;
    }
</style>