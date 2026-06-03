<script>
    import FaqNav from "$lib/components/faq-nav.svelte";
    // import Nav from "$lib/components/nav.svelte";
    // import Rsvp from "$lib/components/rsvp.svelte";
    import TravelHero from "$lib/components/travel/travel-hero.svelte";
    import FAQ from "$lib/components/faq.svelte";
    import Footer from "$lib/components/footer.svelte";

    let items = [
        {
            label: 'Do I need a visa to visit the Philippines?',
            content: `
                <p>
                    Most guests traveling on a Canadian, UK, Australian, or US passport do not need a visa for tourist stays up to 30 days in the Philippines
                </p>
                <p>
                    Your passport should generally be valid for at least 6 months after your trip, and you may be asked to show proof of onward travel when checking in for your flight.
                </p>
                <p>
                    Please fill out the online eTravel through <a href="https://etravel.gov.ph/" title="eTravel" target="_blank"><strong>https://etravel.gov.ph/</strong></a> up to 72 hours before your flight (arrival and departure) to lessen immigration delays.
                </p>
            `
        },
        {
            label: 'How do flights from Canada usually work?',
            content: `
                <p>
                    Most flights leave from Vancouver or Toronto and connect through places like Los Angeles, Tokyo, Seoul, Hong Kong, or Taipei before continuing to the Philippines. There are direct flight options as well.
                </p>
                <p>
                    For Boracay specifically, you'll usually fly:
                </p>
                <p>
                    Canada
                    <i class="ph ph-arrow-right"></i>
                    Asian hub 
                    <i class="ph ph-arrow-right"></i>
                    Manila
                    <i class="ph ph-arrow-right"></i>
                    Caticlan
                    <i class="ph ph-arrow-right"></i>
                    Boracay
                </p>
                <p>
                    It sounds chaotic written out like that, but thousands of tourists do this route everyday and it's much smoother than it looks on paper.
                </p>
            `
        },
        {
            label: 'How do land and sea transfers work in Boracay?',
            content: `
                <p>
                    Getting to Boracay is easier than it sounds, but it does involve a few steps.
                </p>
                <p>
                    After landing at Caticlan Airport, you'll take a short land transfer to the jetty port. This is followed by a quick boat ride to Boracay Island. Once you arrive on the island, you'll hop into a van to your hotel.
                </p>
                <p>
                    We highly encourage you to have the land + sea transfer arranged with your hotel to make the trip seamless, especially after a long flight.
                </p>
                <p>
                    The entire transfer process from Caticlan Airport to your hotel usually takes around 30 to 45 minutes, depending on boat wait times and traffic. Just prepare for a little organized chaos and you'll be completely fine.
                </p>
                <p>
                    It's all part of the Boracay experience. :-)
                </p>
            `
        },
        {
            label: 'What about jet lag? How bad is it?',
            content: `
                <p>
                    It's real, but manageable. Boracay is about 15 to 17 hours ahead of Canada depending on the time of year, so your body will definitely notice.
                </p>
                <p>
                    The best thing you can do is get sunlight when you arrive, stay awake until local bedtime, and immediately start operating on island time.
                </p>
                <p>
                    Luckily, the Philippine sunrise is always at 6:00am and sunset is at 5:30pm year-round.
                </p>
                <p>
                    A swim in the ocean also fixes at least 40% of problems.
                </p>
            `
        },
        {
            label: 'I\'ve never done a flight this long. Any tips?',
            content: `
                <p>
                    A few things that help a lot: bring layers because planes get freezing, drink way more water than you think you need, and try to sleep based on Philippine time when you can.
                </p>
                <p>
                    Plane seat selection is also very critical. In coach, we found that aisle or bulkhead seats provide the most comfort. You can stand up anytime and freely move along the cabin (you also get first dibs on in-flight meals).
                </p>
                <p>
                    Also, if you have dietary restrictions, Asian airlines will require you to include this in your bookings as they usually do not carry any vegetarian/gluten-free/allergen-free meals on board.
                </p>
            `
        },
        {
            label: 'What currency do I need and where do I get it?',
            content: `
                <p>
                    The Philippines uses Philippine Pesos (PHP). We recommend getting some cash in Manila during your connection or using ATMs once you arrive.
                </p>
                <p>
                    Hotels and larger places usually take cards, but smaller vendors and public transit are often cash only. Also, USD is not accepted as legal tender, so pesos are the way to go.
                </p>
                <p>
                    For our Canadian guests, a rough benchmark is aiming for exchange rates around 1 CAD = ~40 PHP.
                </p>
            `
        },
        {
            label: 'When should I plan to arrive?',
            content: `
                <p>
                    We recommend arriving by December 24 if you can.
                </p>
                <p>
                    That gives you time to settle in, recover from the flight, unpack, and actually enjoy Boracay a bit before wedding events start.
                </p>
                <p>
                    Future you will probably be happier with one extra recovery day.
                </p>
            `
        },
        {
            label: 'Should I book my domestic flight separately from my international flight?',
            content: `
                <p>
                    If you would like to go straight to Boracay, it would be best to book your domestic flight with your international flight.
                </p>
                <p>
                    If you want to spend a day or two in Manila to adjust to the local time and explore before you go to Boracay, we recommend booking your domestic flight separately.
                </p>
            `
        },
        {
            label: 'What should I pack?',
            content: `
                <p>
                    You really do not need heavy clothing in Boracay, although it might be good to bring a folding umbrella. Not only would it be helpful for light drizzles, but it would let you keep exploring despite the mid-morning sun.
                </p>
                <p>
                    Make sure to bring at least the following:
                    <ul>
                        <li>Light clothing</li>
                        <li>Swimsuits</li>
                        <li>Sandals</li>
                        <li>Reef-safe sunscreen</li>
                        <li>Something nicer for wedding events (refer to <strong>this FAQ</strong> for dress codes)</li>
                        <li>Something casual for wandering the island</li>
                        <li>Books</li>
                    </ul>
                </p>
                <p>
                    Please take note that if you plan on bringing a Dyson hair tool, it will not work in the Philippines. Appliances made in North America operate at 120V while the Philippines is at 220V. Also, the Philippines is humid. Your hair will make its own decisions.
                </p>
            `
        },
        {
            label: 'What adapters should I bring along?',
            content: `
                <p>
                    The Philippines uses Type A outlets and plugs. Refer to the diagram below.
                </p>
                <img src="/images/ph-sockets.png" border="0" title="Philippines Power Outlets and Plugs">
            `
        },
        {
            label: 'Is Boracay safe?',
            content: `
                <p>
                    Yes! Tourism is Boracay's main industry, so the locals do their very best to ensure tourist safety.
                </p>
                <p>
                    Like anywhere, use common sense with valuables, keep an eye on your belongings at the beach, and maybe don't carry your passport around unnecessarily to avoid losing it.
                </p>
                <p>
                    The biggest danger is honestly sunburn and overconfidence with tropical cocktails.
                </p>
            `
        },
        {
            label: 'Will I get sick from the food?',
            content: `
                <p>
                    It's very rare to get sick off of the food in Boracay.
                </p>
                <p>
                    Just use normal travel common sense: drink bottled or filtered water, be cautious with food that's been sitting in the heat for a long time, and ease into street food if your stomach isn't adventurous.
                </p>
                <p>
                    That said, Boracay is extremely tourist-friendly and used to international visitors.
                </p>
            `
        },
        {
            label: 'What kind of food should I expect?',
            content: `
                <p>
                    A bit of everything. Boracay has Filipino food, Korean BBQ, Italian, Japanese, Mediterranean, etc. It is also the perfect place to get seafood as they are caught just hours before.
                </p>
                <p>
                    Please try the mangoes. This is not optional.
                </p>
            `
        },
        {
            label: 'Are mosquitoes bad?',
            content: `
                <p>
                    They're around especially during sunset, but usually manageable. Bring bug spray if mosquitoes tend to love you personally.
                </p>
                <p>
                    There are no sand flies on the beach.
                </p>
            `
        },
        {
            label: 'Do people speak English in the Philippines?',
            content: `
                <p>
                    Yes, very widely. English is one of the official languages of the Philippines, so communication is generally very easy for international travelers. All the signs, menus, and information boards are in English. 
                </p>
                <p>
                    You do not need to learn Tagalog, although <i>"salamat po"</i> (sah-LAH-mat poh - which means "thank you") will absolutely earn you points.
                </p>
            `
        },
        {
            label: 'Any other Boracay tips we should know?',
            content: `
                <p>
                    A few things we'd pass along:
                    <ul>
                        <li>Bring reef-safe sunscreen (Boracay encourages people to protect the reef).</li>
                        <li>Check roaming plans or grab a local eSIM.</li>
                        <li>Always carry cash with you.</li>
                        <li>Things can occasionally run on "Filipino time" (translation: relaxed and slightly flexible), and honestly, that's part of the charm!</li>
                        <li>E-tricycles (e-trikes) are the easiest way to get around. If you hop on a shared ride ("joiner"), it's around PHP 15 minimum per person. Private rides can jump to around PHP 100+, so save your pesos where you can.</li>
                        <li>Vendors will approach you for trinkets, photos, and other services. Do not feel bad if you say no. You are not expected to stop and listen to what they have to offer.</li>
                        <li>Tipping isn't expected everywhere, but it is highly appreciated for things like massages, tours, water activities, and personal services. Tips are also not percentage based. PHP 100 ($2.25) is acceptable, and PHP 300 ($6.75) is already generous. Almost all restaurant bills include service charge, so tipping is not expected.</li>
                        <li>Tap water is NOT potable. That is the surest way to ruin your trip.</li>
                    </ul>
                </p>
                <p>
                    Try local food, swim lots, order the mango shake from Jonah's.
                </p>
                <p>
                    Most importantly, enjoy Boracay!
                </p>
            `
        }
    ];
</script>

<div class="travel">
    <FaqNav />
    <!-- <div class="nav-wrapper">
        <Nav />
        <Rsvp />
    </div> -->
    <!-- <TravelHero /> -->
    <!-- <section>
        <h2 class="reveal">Getting to <em>Boracay.</em></h2>
        <p class="section-intro">Everything you need to know before making the trip to Boracay.</p>

        <FAQ {items} />
    </section> -->

    <div class="faq-wrapper">
        <div class="faq-header">
            <h2 class="reveal">Getting to <em>Boracay</em></h2>
            <!-- <p>Boracay is a small island that requires a short journey from the Luzon mainland.</p> -->
            <p>Here is everything you need to know before making the trip.</p>
            <div class="faq-img"></div>
            <!-- <img src="/images/big_003.png"> -->
        </div>
        <div class="faq-content">
            <img class="travel-stamp" src="/images/time-to-travel.png">
            <FAQ {items} />
        </div>
    </div>
</div>
<Footer />

<style>
    .travel {
        position: relative;
        padding-top: 6rem;
        /* border: 1px solid red; */
    }
    .faq-wrapper {
        padding: 0 2.5rem;
        display: grid;
        gap: 1rem;
        /* border: 1px solid red; */
        margin: 0 auto 4rem;
        overflow-x: hidden;
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
        background-image: url(/images/big_003.png);
        background-size: cover;
        border-radius: 0.5rem;
        /* border: 0.5rem solid var(--gold); */
        box-shadow: 0 4px 20px rgba(197,163,90,0.4);
        height: 25rem;
    }
    .faq-content {
        position: relative;
    }
    .travel-stamp {
        display: none;
    }
    @media (min-width: 30rem) {
        .travel-stamp {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            width: clamp(25rem, calc(25rem + 10vw), 35rem);
            opacity: 5%;
            transform: translateX(50%) translateY(-10%) rotate(-15deg);
            z-index: 1;
        }
    }
    @media (min-width: 60rem) {
        .faq-wrapper {
            padding-left: 30%;
            /* padding-left: clamp(35%, calc(35% + 1vw), 40%); */
            /* grid-template-columns: auto 1fr; */
            /* gap: 3rem; */
            /* padding: 0; */
            max-width: 90%;
            width: 100%;
        }
        .faq-header {
            position: fixed;
            display: flex;
            flex-direction: column;
            width: 27%;
            margin-top: 0.5rem;
            margin-left: -30%;
            gap: 0.75rem;
            /* max-width: 25rem; */
        }
        .faq-img {
            margin-top: 1rem;
            /* height: 35rem; */
            height: clamp(25rem, calc(25rem + 2vw), 35rem);
            background-position: 20% 0;
            background-repeat: no-repeat;
        }
        .faq-content {
            margin-top: 0.875rem;
        }
    }
    /* section {
        display: grid;
        gap: 1rem;
    } */
    /* .section-intro {
        color: var(--chocolate);
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 0;
        margin-bottom: 0.5rem;
    } */
</style>
