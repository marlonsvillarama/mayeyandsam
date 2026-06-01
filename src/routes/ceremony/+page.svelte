<script>
    import Nav from "$lib/components/nav.svelte";
    import Rsvp from "$lib/components/rsvp.svelte";
    import TravelHero from "$lib/components/travel/travel-hero.svelte";
    import FAQ from "$lib/components/faq.svelte";

    let items = [
        {
            label: 'What time should I arrive?',
            content: `
                <p>
                    Think of it as the unofficial start of the wedding weekend.
                </p>
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
                    We kindly ask guests to avoid all white, since we'd like to keep that one reserved for the bride. Everything else is fair game.
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
                    Save your luggage space for outfits and pasalubong.
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

<div class="nav-wrapper">
    <Nav />
    <Rsvp floating={true} />
</div>
<!-- <TravelHero /> -->

<div class="faq-wrapper">
    <div class="faq-header">
        <h2 class="reveal">Ceremony & <em>Reception</em></h2>
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
        background-image: url(/images/big_001.png);
        background-size: cover;
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
            background-position: 20% 0;
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
