<script>
    import Rsvp from "$lib/components/rsvp.svelte";
    import TravelHero from "$lib/components/travel/travel-hero.svelte";
    import FAQ from "$lib/components/faq.svelte";

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
                    It's real, but manageable.
                </p>
                <p>
                    Boracay is about 15 to 17 hours ahead of Canada depending on the time of year, so your body will definitely notice.
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
                    You really do not need heavy clothing in Boracay, although it might be good to bring a folding umbrella. Not only would it be helpful for light drizzles, but it would let you keep exploring despite the mid-morning sun.
                </p>
                <p>
                    Please take note that if you plan on bringing a Dyson hair tool, it will not work in the Philippines. Appliances made in North America operate at 120V while the Philippines is at 220V. Also, the Philippines is humid. Your hair will make its own decisions.
                </p>
            `
        }
    ];
</script>

<Rsvp floating={true} />
<TravelHero />
<section>
<!-- <div class="faq-wrapper"> -->
    <FAQ {items} />
<!-- </div> -->
</section>

<style>
    section {
        padding-top: 1.5rem;
        /* border: 1px solid red; */
    }
</style>
