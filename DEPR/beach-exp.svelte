<script>
</script>

<div class="beach-exp">
    <h2>Fall in love with Boracay.</h2>
    <div class="beach-mask"></div>
</div>

<style>
    .beach-exp {
        height: 30rem;
        width: 100%;
        background-image: url(/images/boracay_02.jpg);
        background-position: center;
        background-size: cover;
        position: relative;
    }
    .beach-exp h2 {
        /* border: 1px solid red; */
        color: var(--ivory);
        font-size: clamp(2rem, calc(2rem + 4vw), 3.5rem);
        font-weight: 500;
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translateY(-50%) translateX(-50%);
        width: 80%;
        z-index: 100;
    }
    .beach-mask {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: var(--brown);
        opacity: 0.5;
        z-index: 10;
    }
</style>
