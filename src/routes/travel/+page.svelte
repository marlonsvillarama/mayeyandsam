<script>
    import { Map, PlaneTakeoff, TreePine, ShipWheel } from "@lucide/svelte";

    import Anahaw from "$lib/components/v2/global/anahaw.svelte";
    import Nav from "$lib/components/v2/global/nav.svelte";
    import Quadbar from "$lib/components/v2/global/quadbar.svelte";
    import QuadbarSection from "$lib/components/v2/global/quadbar-section.svelte";
    import TornImage from "$lib/components/v2/global/torn-image.svelte";
    import Footer from "$lib/components/v2/global/footer.svelte";
    import SplitPic from "$lib/components/v2/global/split-pic.svelte";
    import FAQ from "$lib/components/v2/global/faq.svelte";
    // import BackLink from "$lib/components/v2/global/faq-link.svelte";
    import BackToHome from "$lib/components/v2/global/back-to-home.svelte";

    let quad = [
        { Icon: PlaneTakeoff, title: "Getting There", text: "Fly to Manila, then Caticlan" },
        { Icon: ShipWheel, title: "Boracay Transfer", text: "Arrange with your hotel" },
        { Icon: TreePine, title: "Arrive by Christmas", text: "Give yourself time to rest" },
        { Icon: Map, title: "Explore", text: "Travel to other islands in the Philippines" },
    ];
    let faq = [
        {
            label: 'Do I need a visa to visit the Philippines?',
            content: `
                <p>
                    Most guests traveling on a Canadian, UK, Australian, or US passport do not need a visa for tourist stays up to 30 days in the Philippines.
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
                    It's all part of the Boracay experience. :)
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
                    We recommend arriving by December 24 if you can, but it won't be the end of the world if you arrive by December 25.
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
                        <li>Something nicer for wedding events (refer to <a href="/ceremony" target="_blank"><strong>this FAQ</strong></a> for dress codes)</li>
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
        },
        {
            label: 'Where should I go after the wedding?',
            content: `
                <p>
                    Since you're already flying all the way to the Philippines, it's worth adding a few extra days if you can.
                </p>
                <p>
                    <strong>Bohol</strong> is home to the Chocolate Hills, Philippine tarsiers, and the famous Loboc River.
                </p>
                <img src="/images/bohol.webp" border="0" title="Tropical cocktail outfit suggestions">
                <p>
                    <strong>Cebu</strong> has a good mix of beaches, waterfalls, and history. It is where Catholicism started in the Philippines. You can also swim with whale sharks year-round.
                </p>
                <img src="/images/cebu.webp" border="0" title="Tropical cocktail outfit suggestions">
                <p>
                    <strong>Siargao</strong> is the Surfing Capital of the Philippines, also famous for its night life.
                </p>
                <img src="/images/siargao.webp" border="0" title="Tropical cocktail outfit suggestions">
                <p>
                    <strong>Palawan</strong> is famous for dramatic limestone cliffs, island-hopping, and some of the clearest water you'll ever see. It is also home to the subterranean river, a UNESCO World Heritage Site and one of the New 7 Wonders of Nature.
                </p>
                <img src="/images/palawan-kayak.jpg" border="0" title="Tropical cocktail outfit suggestions">
                <p>
                    If you're spending time in Manila, there's lots to explore too.
                </p>
                <p>
                        <b>Intramuros</b> is the old walled city and a good place to start if you want a piece of Spanish-era history.
                        <img src="/images/intramuros.webp" border="0" title="Tropical cocktail outfit suggestions">
                    </p>
                    <p>
                        The <b>National Museum</b> is an amazing place to understand more of the Philippine history, culture, and biodiversity.
                        <img src="/images/museum.webp" border="0" title="Tropical cocktail outfit suggestions">
                    </p>
                    <p><b>Quezon City</b> has great food and shopping malls.</p>
                    <p>
                        <b>Corregidor</b> is a powerful day trip if you're interested in World War II history. It was once an island fortress at the entrance of Manila Bay, with old barracks, tunnels, and ruins that tell a huge part of the Philippines' wartime history.
                        <img src="/images/corregidor.webp" border="0" title="Tropical cocktail outfit suggestions">
                    </p>
                <p>
                    Pick one or two places that match your travel style and give yourself enough time to actually enjoy them.
                </p>
            `
        }
    ];
</script>

<svelte:head>
	<title>Sam & Marielle - Getting To Boracay</title>
</svelte:head>

<div class="page-wrapper">
    <Anahaw fixed={true} />
    <Nav />
    <div class="content">
        <div class="hero">
            <div class="wrapper">
                <div>
                    <h1>Getting to <br/><span class="em">Boracay</span></h1>
                    <p>Here is everything you need to know before making the trip.</p>
                    <BackToHome />
                </div>
                <div></div>
            </div>
        </div>
        <div class="hero-img">
            <div></div>

            <TornImage left={true} bottom={true} image="/images/big_003.png" height="500" />
        </div>

        <Quadbar>
            {#each quad as q}
            <QuadbarSection Icon={q.Icon} label={q.title}>{q.text}</QuadbarSection>
            {/each}
        </Quadbar>

        <FAQ items={faq} />
        <Footer />
    </div>
    <Anahaw position="bottom-right" />
</div>

<style>
    .page-wrapper {
        position: relative;
    }
    .content {
        margin-top: 4rem;
        display: grid;
    }
    .hero-img { display: none; }
    @media (min-width: 64rem) {
        .hero-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            display: grid;
            grid-template-columns: 45% 55%;
        }
    }

    /* .hero { */
        /* display: grid;
        grid-template-columns: 1fr 1fr; */
        /* overflow-x: visible; */
        /* border: 1px solid red; */
    /* } */
    .hero > .wrapper {
        padding-top: 3rem;
        padding-bottom: 3rem;
        /* border: 1px solid green; */
    }
    .hero > .wrapper > div:first-child {
        /* border: 1px solid red; */
        color: var(--espresso);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: clamp(1.25rem, calc(1.25rem + 1vw), 2.5rem);
    }
    .hero > .wrapper > div:last-child {
        display: none;
    }
    @media (min-width: 64rem) {
        /* .hero { */
            /* padding-bottom: 4rem; */
        /* } */
        .hero > .wrapper {
            display: grid;
            grid-template-columns: 45% 55%;
            /* padding-top: 6rem;
            padding-bottom: 7rem; */
            /* max-width: 45%; */
        }
        .hero > .wrapper > div:last-child {
            display: none;
        }
    }
    /* .details {
        display: grid;
        gap: 0.5rem;
    } */
    /* .detail-row {
        display: flex;
        align-items: center;
        gap: 0.625rem;
        color: var(--espresso);
    } */
    /* .detail-row > span {
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 2px;
        text-transform: uppercase;
    } */
    .hero > .wrapper > div > p {
        color: var(--chocolate);
        /* font-size: 1.125rem; */
        font-weight: 300;
        letter-spacing: 0.25px;
        /* border: 1px solid red; */
    }
</style>
