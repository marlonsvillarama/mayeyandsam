<script>
    let {
        bg = ""
    } = $props();
</script>

<div class="img-break">
    <h2>Slow down. You're in island time now.</h2>
</div>

<style>
    .img-break {
        height: 30rem;
        width: 100%;
        background-image: url(/images/big_005.png);
        background-position: center;
        background-size: cover;
        position: relative;
    }
    .img-break h2 {
        /* border: 1px solid red; */
        color: var(--ivory);
        font-size: clamp(3rem, calc(3rem + 4vw), 5rem);
        font-weight: 500;
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translateY(-50%) translateX(-50%);
        width: 90%;
    }
</style>
