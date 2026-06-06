<script>
    import Anahaw from "$lib/components/v2/global/anahaw.svelte";
    import Nav from "$lib/components/v2/global/nav.svelte";
    import Hero from "$lib/components/v2/global/hero.svelte";
    import TornImage from "$lib/components/v2/global/torn-image.svelte";
    import Venue from "$lib/components/v2/global/venue.svelte";
    import Explore from "$lib/components/v2/global/explore.svelte";
    import TriBar from "$lib/components/v2/global/tribar.svelte";
    import WithLove from "$lib/components/v2/global/with-love.svelte";
    import Footer from "$lib/components/v2/global/footer.svelte";
</script>

<div class="page-wrapper">
    <Anahaw fixed={true} />
    <Nav />
    <div class="content">
        <Hero />
        <div class="hero-img">
            <div></div>

            <TornImage left={true} bottom={true} image="/images/marielle_and_sam_01.jpg" height="600" />
        </div>

        <Venue />
        <Explore />
        <TriBar />
        <WithLove />
        <Footer />
    </div>
    <Anahaw position="bottom-right" />
</div>

<style>
    .page-wrapper {
        /* border: 1px solid red; */
        position: relative;
    }
    .content {
        /* border: 1px solid red; */
        margin-top: 3.25rem;
        display: grid;
        /* padding-bottom: 6rem; */
        /* gap: 1rem; */
        /* height: 1000px; */
    }
    .hero-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    /* .hero:first-child {
    } */
</style>
