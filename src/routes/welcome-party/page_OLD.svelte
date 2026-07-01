<script>
    import Nav from "$lib/components/nav.svelte";
    import Rsvp from "$lib/components/rsvp.svelte";
    import TravelHero from "../../../DEPR/travel/travel-hero.svelte";
    import FAQ from "$lib/components/faq.svelte";

    let items = [
        {
            label: 'What is the Welcome Party?',
            content: `
                <p>
                    Think of it as the unofficial start of the wedding weekend.
                </p>
                <p>
                    We wanted a relaxed night where friends and family from both sides could meet properly before the wedding day.
                </p>
                <p>
                    No formalities. No big schedule. just good food, drinks, karaoke, and a Boracay sunset with people we love.
                </p>
            `
        },
        {
            label: 'Do I have to come to the Welcome Party?',
            content: `
                <p>
                    Not at all, but we'd really love to see you there if you can make it.
                </p>
                <p>
                    The wedding day itself flies by so quickly, so this is our chance to actually spend proper time with everyone before things get really busy.
                </p>
            `
        },
        {
            label: 'What time does it start and how long does it go?',
            content: `
                <p>
                    The Welcome Party will start at 5pm. We're planning it around sunset because Boracay sunsets are kind of ridiculous in the best way. Here is a sneak peek:
                </p>
            `
        },
        {
            label: 'Where is it being held?',
            content: `
                <p>
                    The Welcome Party will be at ___________.
                </p>
            `
        },
        {
            label: 'What should I wear?',
            content: `
                <p>
                    The theme is white and beige.
                </p>
                <p>
                    Think breezy casual vacation dinner by the beach. Linen, sandals, flowy dresses, relaxed shirts, shorts, light fabrics, all of that works perfectly.
                </p>
            `
        },
        {
            label: 'Is the party outdoors? What should I expect weather-wise?',
            content: `
                <p>
                    It will be outdoors, weather-permitting.
                </p>
                <p>
                    December in Boracay is usually warm, breezy, and pretty ideal, especially in the evening. Expect tropical weather around 26-30 degrees Celsius.
                </p>
            `
        },
        {
            label: 'Are food and drinks included at the Welcome Party?',
            content: `
                <p>
                    Yes, so please come hungry.
                </p>
            `
        },
        {
            label: 'Will there be Filipino food?',
            content: `
                <p>
                    We're very excited for people to try Filipino food properly, especially for guests visiting the Philippines for the first time. Expect lots of Filipino flavours mixed in with other dishes, too.
                </p>
                <p>
                    If you have any food restrictions, please let us know when you RSVP.
                </p>
            `
        }
    ];
</script>

<div class="nav-wrapper">
    <Nav />
    <Rsvp floating={true} />
</div>
<!-- <TravelHero /> -->
<!-- <section>
    <h2 class="reveal">Welcome <em>Party</em></h2>
    <p class="section-intro">Everything you need to know before making the trip to Boracay.</p>

    <FAQ {items} />
</section> -->

<div class="faq-wrapper">
    <div class="faq-header">
        <h2 class="reveal">Welcome <em>Party</em></h2>
        <!-- <p>Boracay is a small island that requires a short journey from the Luzon mainland.</p> -->
        <p>Here is everything you need to know before making the trip.</p>
        <div class="faq-img"></div>
        <!-- <img src="/images/big_003.png"> -->
    </div>
    <div class="faq-content">
        <FAQ {items} />
    </div>
</div>
<!-- <img class="stamp" src="/images/plants-footer.png"> -->

<style>
    .faq-wrapper {
        padding: 0 1.5rem;
        display: grid;
        gap: 1rem;
        /* border: 1px solid red; */
        margin: 3rem auto 4rem;
    }
    .faq-header {
        display: grid;
        gap: 0.75rem;
        /* border: 1px solid red; */
    }
    .faq-header p {
        font-size: 1rem;
    }
    /* .faq-header h2 {
        border: 1px solid red;
    } */
    .faq-img {
        background-image: url(/images/big_004.png);
        background-size: cover;
        background-position: 40% 0;
        border-radius: 0.5rem;
        /* border: 0.5rem solid var(--gold); */
        box-shadow: 0 4px 20px rgba(197,163,90,0.4);
        height: 25rem;
    }
    .faq-content {
        position: relative;
    }
    .stamp {
        display: none;
    }
    @media (min-width: 30rem) {
        .stamp {
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            /* width: clamp(25rem, calc(25rem + 10vw), 35rem); */
            opacity: 10%;
            transform: translateY(-50%);
            z-index: 1;
            /* border: 1px solid red; */
        }
    }
    @media (min-width: 48rem) {
        .faq-wrapper {
            grid-template-columns: auto 1fr;
            gap: 3rem;
            padding: 0;
            max-width: 80rem;
            width: 100%;
        }
        .faq-header {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            max-width: 25rem;
        }
        .faq-img {
            margin-top: 1rem;
            height: 60rem;
            background-position: 35% 0;
            background-repeat: no-repeat;
        }
        .faq-content {
            margin-top: 0.875rem;
        }
    }
    section {
        /* padding-top: 1.5rem; */
        /* border: 1px solid red; */
        display: grid;
        gap: 1rem;
    }
    .section-intro {
        color: var(--chocolate);
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: 0.5rem;
    }
    
</style>
