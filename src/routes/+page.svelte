<script>
    // import Nav from "$lib/components/nav.svelte";
    import Rsvp from "$lib/components/rsvp.svelte";
    import Hero from "$lib/components/hero.svelte";
    import Venue from "$lib/components/venue.svelte";
    import Journey from "$lib/components/journey.svelte";
    import WhatToBring from "$lib/components/whattobring.svelte";
    import Explore from "$lib/components/explore.svelte";
    import Budget from "$lib/components/budget.svelte";
    import Footer from "$lib/components/footer.svelte";
    // const obs = new IntersectionObserver((entries) => {
    //     entries.forEach((en, i) => {
    //         if (en.isIntersecting) {
    //         setTimeout(() => en.target.classList.add('on'), i * 70);
    //         obs.unobserve(en.target);
    //         }
    //     });
    //     }, { threshold: 0.1 });
    // document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
</script>

<Rsvp floating={true} />
<Hero />
<Venue />
<Journey />
<!-- <WhatToBring /> -->
<Explore />

<section class="faqs" id="faqs"></section>

<!-- <Budget /> -->
<!-- Summer Party -->
<!-- FAQs -->
<!-- RSVP -->

<Footer />

<!-- <section>venue</section> -->
<!-- <section>how to get there</section> -->

<style>
    /* .nav-wrapper {
        position: absolute; top: 0; left: 0; right: 0; z-index: 200;
        display: flex; justify-content: space-between; align-items: center;
        padding: 16px clamp(9px, calc(2px + 3vw), 24px) 0 clamp(24px, calc(8px + 3vw), 36px);
    } */
</style>
