<script>
    import MainNav from "$lib/components/nav.svelte";
    import Hero from "$lib/components/hero.svelte";
    import Venue from "$lib/components/venue.svelte";
    import Journey from "$lib/components/journey.svelte";
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

<MainNav />
<Hero />
<Venue />
<Journey />
<Explore />

<Budget /> <!-- Remove -->
<!-- Summer Party -->
<!-- FAQs -->
<!-- RSVP -->

<Footer />

<!-- <section>venue</section> -->
<!-- <section>how to get there</section> -->

<style>
</style>
