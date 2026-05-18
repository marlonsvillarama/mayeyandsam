<script>
    let {
        bg = 'trees',
        title = 'Ceremony',
        date = '27',
        venue = 'Mövenpick Beachfront',
        code = 'Tropical cocktail'
    } = $props();
</script>

<div class="vc">
    <div class="vc-bg bg-{bg}"></div>

    <div class="vc-blur"></div>
    <div class="vc-blur"></div>
    <div class="vc-blur"></div>
    <div class="vc-blur"></div>

    <div class="vc-title">
        <span class="title">{title}</span>
        <div class="subtitle">
            <span class="title-date">{date}th</span>
            <span>&#8226;</span>
            <span class="title-venue">{venue}</span>
        </div>
        <span class="code">{code}</span>
    </div>
</div>

<style>
    .vc {
        /* border: 1px solid red; */
        height: 24rem;
        /* max-height: 36rem; */
        width: 100%;
        border: none;
        border-radius: 12px;
        transition: all 150ms ease-in-out;
        position: relative;
        /* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */
    }
    .vc:hover {
        /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
        transform: translateY(-2px);
    }
    /* @media (min-width: 48rem) {
        .vc {
            height: 36rem;
        }
    } */
    .vc-bg {
        border: none;
        border-radius: 12px;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center;
        opacity: 1.0;
        cursor: pointer;
        transition: all 150ms ease-in-out;
        /* filter: blur(2px); */
    }
    /* .vc-bg::after {
        content: "";
        border-radius: 12px;
        position: absolute;
        top: 40%; left: 0; width: 100%; height: 60%;
        background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 1));
    } */
    /* .vc-bg:hover {
        opacity: 1.0;
        filter: none;
    } */
    .vc-blur {
        position: absolute;
        border-radius: 12px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /* inset: 0;
        backdrop-filter: blur(8px);
        -webkit-mask-image: linear-gradient(to bottom, transparent, white);
        mask-image: linear-gradient(to bottom, transparent, white);
        z-index: 100; */
    }
    .vc-blur:nth-child(2) {
        backdrop-filter: blur(1px);
        mask: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 60%);
        /* mask: linear-gradient(rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 50%); */
    }
    .vc-blur:nth-child(3) {
        backdrop-filter: blur(8px);
        mask: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 70%);
        /* mask: linear-gradient(rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 50%); */
    }
    .vc-blur:nth-child(4) {
        backdrop-filter: blur(32px);
        mask: linear-gradient(rgba(0, 0, 0, 0) 60%, rgba(255, 255, 255, 1) 80%);
    }
    .vc-blur:nth-child(5) {
        backdrop-filter: blur(64px);
        mask: linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(255, 255, 255, 1) 100%);
    }
    .bg-beach {
        background-image: url(/images/boracay_beach.jpg);
        transform: scaleX(-1);
    }
    .bg-boats {
        background-image: url(/images/boracay_boats.jpg);
    }
    .bg-trees {
        background-image: url(/images/boracay_trees.jpg);
        transform: scaleX(-1);
    }
    .vc-title {
        position: absolute;
        text-align: center;
        /* border: 1px solid red; */
        top: 70%;
        /* top: clamp(70%, calc(70% + 2vw), 75%); */
        left: 0;
        right: 0;
        z-index: 100;
    }
    .vc-title > .title {
        font-size: clamp(1.25rem, calc(1.25rem + 0.5vw), 1.75rem);
        font-weight: 500;
        /* border: 1px solid red; */
        letter-spacing: 2px;
        text-box: trim-end ex alphabetic;
        text-transform: uppercase;
        color: var(--primary);
    }
    .subtitle {
        font-size: clamp(1rem, calc(1rem + 0.5vw), 1.25rem);
        font-weight: 300;
        letter-spacing: 1px;
        color: var(--ivory);
        display: flex;
        gap: 0.25rem;
        text-align: center;
        justify-content: center;
    }
    .subtitle > .title-venue {
        font-style: italic;
    }
    .subtitle > .title-date {
        font-size: clamp(1rem, calc(1rem + 0.5vw), 1.25rem);
        /* font-size: 1.125rem; */
        font-weight: 500;
        letter-spacing: 1px;
        color: var(--ivory);
    }
    .subtitle > .title-venue {
        font-size: clamp(1rem, calc(1rem + 0.5vw), 1.25rem);
        font-weight: 300;
        letter-spacing: 1px;
        color: var(--ivory);
        font-style: italic;
    }
    .code {
        font-size: clamp(0.875rem, calc(0.875rem + 0.5vw), 1rem);
        font-weight: 300;
        letter-spacing: 1px;
        color: var(--ivory);
        /* font-style: italic; */
    }
    /* .vc-title-bg {
        background-color: var(--brown);
        opacity: 0.4;
        height: 3rem;
    } */
</style>
