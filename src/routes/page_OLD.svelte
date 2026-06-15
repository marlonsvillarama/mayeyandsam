<script>
    import Nav from "$lib/components/nav.svelte";
    import Rsvp from "$lib/components/rsvp.svelte";
    import Hero from "$lib/components/hero.svelte";
    import Venue from "$lib/components/venue.svelte";
    import JourneySplit from "$lib/components/journey-split.svelte";
    // import Journey from "$lib/components/journey.svelte";
    import WhatToBring from "$lib/components/whattobring.svelte";
    import ExploreSplit from "$lib/components/explore-split.svelte";
    import Explore from "$lib/components/explore.svelte";
    import Budget from "$lib/components/budget.svelte";
    import Footer from "$lib/components/footer.svelte";
    import Celebration from "$lib/components/celebration.svelte";
    // import BeachExp from "$lib/components/beach-exp.svelte";
    import SlowDown from "$lib/components/slow-down.svelte";
    import IslandToRemember from "$lib/components/island-to-remember.svelte";
    // const obs = new IntersectionObserver((entries) => {
    //     entries.forEach((en, i) => {
    //         if (en.isIntersecting) {
    //         setTimeout(() => en.target.classList.add('on'), i * 70);
    //         obs.unobserve(en.target);
    //         }
    //     });
    //     }, { threshold: 0.1 });
    // document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    const scrollNav = () => {
        const navWrapper = document.getElementById('nav-wrapper');

        if (window.scrollY > 50) {
            navWrapper.classList.add('scrolled');
        }
        else {
            navWrapper.classList.remove('scrolled');
        }
    };
</script>

<svelte:window onscroll={scrollNav} />

<!-- <div id="nav-wrapper" class="nav-wrapper"> -->
    <!-- <span></span> -->
    <!-- <Nav /> -->
    <Rsvp floating={true} />
<!-- </div> -->

<!-- <Rsvp floating={true} /> -->
<Hero />

<Celebration />
<!-- <Venue /> -->
<!-- <IslandToRemember /> -->
<!-- <BeachExp /> -->

<JourneySplit />
<!-- <Journey /> -->
<!-- <WhatToBring /> -->
<ExploreSplit />
<SlowDown />

<!-- <Explore /> -->
<!--  -->

<!-- <section class="faqs" id="faqs"></section> -->

<!-- <Budget /> -->
<!-- Summer Party -->
<!-- FAQs -->
<!-- RSVP -->

<Footer />

<!-- <section>venue</section> -->
<!-- <section>how to get there</section> -->

<style>
    .nav-wrapper {
        position: fixed; top: 0; left: 0; right: 0; z-index: 200;
        display: flex; justify-content: space-between; align-items: center;
        padding: 16px clamp(9px, calc(2px + 3vw), 24px) 16px clamp(24px, calc(8px + 3vw), 36px);
        transition: background-color 200ms ease-in-out, box-shadow 200ms ease-in-out;
    }
    :global(.nav-wrapper.scrolled) {
        background-color: var(--sand);
        /* background: linear-gradient(var(--sand) 0%, var(--sand) 50%, var(--sand) 80%, transparent); */
        box-shadow: 0 4px 20px rgba(197,163,90,0.4);
    }
    /* .nav-wrapper {
        position: absolute; top: 0; left: 0; right: 0; z-index: 200;
        display: flex; justify-content: space-between; align-items: center;
        padding: 16px clamp(9px, calc(2px + 3vw), 24px) 0 clamp(24px, calc(8px + 3vw), 36px);
    } */
</style>
