<script>
    import Anahaw from "$lib/components/v2/global/anahaw.svelte";
    import Nav from "$lib/components/v2/global/nav.svelte";
    import TornImage from "$lib/components/v2/global/torn-image.svelte";
</script>

<div class="page-wrapper">
    <Anahaw />
    <Nav />
    <div class="content">
        <div class="hero wrapper">
            <div>header</div>
            <TornImage left={true} bottom={true} image="/images/big_002.png" height="800">
                <!-- <img  height="400"> -->
            </TornImage>
        </div>
    </div>
    <Anahaw position="bottom-right" />
</div>

<style>
    .page-wrapper {
        /* border: 1px solid red; */
        position: relative;
    }
    .content {
        /* border-top: 1px solid red; */
        margin-top: 3.25rem;
        /* height: 1000px; */
    }
    .hero {
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* border: 1px solid red; */
        overflow-x:visible;
    }
    /* .hero:first-child {
    } */
</style>
