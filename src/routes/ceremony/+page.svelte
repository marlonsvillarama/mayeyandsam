<script>
    import { Clock, MapPin, Martini, Shirt } from "@lucide/svelte";
    
    import Anahaw from "$lib/components/v2/global/anahaw.svelte";
    import Nav from "$lib/components/v2/global/nav.svelte";
    import Quadbar from "$lib/components/v2/global/quadbar.svelte";
    import QuadbarSection from "$lib/components/v2/global/quadbar-section.svelte";
    import TornImage from "$lib/components/v2/global/torn-image.svelte";
    import Footer from "$lib/components/v2/global/footer.svelte";
    import SplitPic from "$lib/components/v2/global/split-pic.svelte";
    import FAQ from "$lib/components/v2/global/faq.svelte";
    import BackToHome from "$lib/components/v2/global/back-to-home.svelte";
    import Rsvp from "$lib/components/v2/global/rsvp.svelte";

    let quad = [
        { Icon: Clock, title: "4:30 PM", text: "Ceremony begins right before sunset" },
        { Icon: MapPin, title: "Mövenpick Boracay", text: "Beachfront ceremony and garden reception" },
        { Icon: Shirt, title: "Tropical cocktail", text: "Light and airy, prints and colours encouraged" },
        { Icon: Martini, title: "Cocktails and reception", text: "Sol Marina Gardens, Mövenpick" }
    ];
    let faq = [
        {
            label: 'What time should I arrive?',
            content: `
                <p>
                    The ceremony starts at 4:30 PM, but we'd love for you to arrive by 4:15 PM so you can settle in, grab some fresh <i>buko</i> juice, find your seat, and enjoy the view before things get started.
                </p>
            `
        },
        {
            label: 'Where exactly is the ceremony happening?',
            content: `
                <p>
                    The ceremony will be held beachfront at Mövenpick. The cocktail hour, dinner, and reception will be at Sol Marina Beachfront Garden, which is on the same property, so no traveling around Boracay between events.
                </p>
            `
        },
        {
            label: 'How long does the ceremony go for?',
            content: `
                <p>
                    About 30-45 minutes. It's short enough that nobody gets sunburnt, but long enough to read the <i>sheva brachot</i>.
                </p>
                <p>
                    Cocktail hour will follow right after while we sneak away for photos.
                </p>
            `
        },
        {
            label: 'Can I take photos during the ceremony?',
            content: `
                <p>
                    We're having an unplugged ceremony, so we'd really appreciate phones and cameras staying away during the ceremony itself.
                </p>
                <p>
                    We know it's a bit of an ask, but having everyone fully present means so much to us. We've got an amazing photo team capturing everything, so you can relax, enjoy the moment, and save your camera roll space for cocktail hour.
                </p>
            `
        },
        {
            label: 'What\'s the rough run of the day?',
            content: `
                <p>
                    Ceremony. Cocktails and hors d'oeuvres. Dinner. Speeches. Dancing. Questionable dance moves.
                </p>
                <p>
                    Pretty much exactly what you'd want from a Boracay wedding.
                </p>
            `
        },
        {
            label: 'What\'s the dress code for the wedding?',
            content: `
                <p>
                    Tropical cocktail. Think resort wedding, Filipino summer, and beach vacation.
                </p>
                <p>
                    For women, midi/maxi dresses, linen suits, jumpsuits, tropical prints, and bright colours are great.
                </p>
                <p>
                    For men, linen shirts, light suits, dress pants, and bold patterns all work.
                </p>
                <p>
                    This is your chance to wear something fun! Here's a helpful guide:
                </p>
                <img src="/images/dress-code.png" border="0" title="Tropical cocktail outfit suggestions">
            `
        },
        {
            label: 'Are there any colours I should avoid?',
            content: `
                <p>
                    We kindly ask guests to avoid white, since we'd like to keep that one reserved for the bride. Everything else is fair game.
                </p>
            `
        },
        {
            label: 'What shoes make sense for a beach ceremony?',
            content: `
                <p>
                    The ceremony is on sand, so consider this your warning that stilettos and beaches are not friends.
                </p>
                <p>
                    Wedges, block heels, sandals, flats, loafers, or boat shoes are perfect.
                </p>
            `
        },
        {
            label: 'Do I need to stay at Mövenpick?',
            content: `
                <p>
                    Not at all.
                </p>
                <p>
                    Boracay has wonderful accommodations at a range of price points and the island is small enough that you can easily get to the venue from anywhere.
                </p>
                <p>
                    If you do stay at Mövenpick, the convenience on the wedding day is a huge plus. Our hotel's event manager, <strong>Hero &lt;herald.lajo@movenpick.com&gt;</strong>, can also help guests across our block room rates.
                </p>
                <p>
                    Boracay is split into different "stations" along White Beach, and each area has a slightly different vibe:
                </p>
                <ul>
                    <li class="indent">
                        <strong>Station 0</strong>
                        <p>
                            Quiet, private, and more upscale. This is where Mövenpick is located. Fewer crowds, calmer beaches, and more of a resort feel.
                        </p>
                    </li>
                    <li>
                        <strong>Station 1</strong>
                        <p>
                            The prettiest stretch of White Beach with soft powdery sand and lots of higher-end resorts. Greate if you want a more relaxed and scenic area while still being close to restaurants and activity.
                        </p>
                    </li>
                    <li>
                        <strong>Station 2</strong>
                        <p>
                            The busiest and most central part of Boracay. This is where D'Mall, lots of restaurants, bars, nightlife, and shops are located. Best if you want to be in the middle of everything.
                        </p>
                    </li>
                    <li>
                        <strong>Station 3</strong>
                        <p>
                            More laid-back, local, and budget-friendly. Quieter than Station 2 with a slower pace and lots of smaller hotels and local eateries.
                        </p>
                    </li>
                </ul>
            `
        },
        {
            label: 'Will dietary restrictions be catered for?',
            content: `
                <p>
                    Absolutely!
                </p>
                <p>
                    Please include any allergies or dietary restrictions on your RSVP (vegetarian, vegan, gluten-free, etc.) and we'll make sure the catering team has everything they need.
                </p>
            `
        },
        {
            label: 'Is there a gift registry?',
            content: `
                <p>
                    We don't have a formal registry.
                </p>
                <p>
                    The fact that you're flying across the world to be with us is already the most extraordinary gift we could ask for. If you'd like to give something, a monetary gift is genuinely and warmly appreciated and will go towards building our life together, but please know there is absolutely no expectation. Just having you there means everything.
                </p>
            `
        },
        {
            label: 'Should I bring a physical gift to Boracay?',
            content: `
                <p>
                    Please don't stress about packing gifts into your suitcase.
                </p>
                <p>
                    A card, kind message, or monetary gift is more than enough.
                </p>
                <p>
                    Save your luggage space for outfits and <em>pasalubong</em>.
                </p>
            `
        },
        {
            label: 'Who do I contact if I have more questions?',
            content: `
                <p>
                    Reach out to any of our family members and we'll point you in the right direction.
                </p>
            `
        }
    ];
</script>

<svelte:head>
	<title>Sam & Marielle - Ceremony</title>
</svelte:head>

<Rsvp />
<div class="page-wrapper">
    <Anahaw fixed={true} />
    <Nav />
    <div class="content">
        <div class="hero">
            <div class="wrapper">
                <div>
                    <h1>Ceremony & <br/><span class="em">Reception</span></h1>
                    <p>A beachfront ceremony followed by cocktails, dinner, and a night of celebration.</p>
                    <BackToHome />
                </div>
                <div></div>
            </div>
        </div>
        <div class="hero-img">
            <div></div>

            <TornImage left={true} bottom={true} image="/images/ceremony.jpg" height="500" />
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
