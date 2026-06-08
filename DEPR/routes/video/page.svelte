<script>
    import BackgroundVideo from '$lib/assets/background_01.mp4';
</script>

<section>
    <video autoplay muted loop playsinline>
        <source src={BackgroundVideo} type="video/mp4">
    </video>
    <h1>WEBSITE TITLE HERE</h1>
</section>

<style>
    section {
        overflow: hidden;
        padding: 0;
        position: relative;
        min-height: 100vh;
        padding: 24px;
    }
    video {
        height: 100%;
        width: 177.77777778vh;
        min-width: 100%;
        min-height: 56.25vw;
        position: absolute;
        z-index: -1;
        /* opacity: 75%; */
        /* top: 0;
        left: 0;
        right: 0;
        bottom: 0; */
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    h1 {
        color: white;
        font-size: 32px;
        font-weight: bold;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>