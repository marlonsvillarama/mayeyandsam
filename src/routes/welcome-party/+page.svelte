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

    let quad = [
        { Icon: Clock, title: "5:00 PM", text: "Party starts around sunset" },
        { Icon: MapPin, title: "SeaWind Boracay", text: "Beachfront, weather-permitting" },
        { Icon: Shirt, title: "Casual", text: "White and beige, see below for details" },
        { Icon: Martini, title: "Welcome Feast", text: "Filipino food, drinks, and karaoke" }
    ];
    let faq = [
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
                <img src="/images/boracay-sunset.webp" border="0" title="Boracay Sunset">
            `
        },
        {
            label: 'Where is it being held?',
            content: `
                <p>
                    The Welcome Party will be at Seawind Boracay in Station 1. About a 9-minute tricycle ride from Mövenpick.
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
                <img src="/images/welcome-party-dress-code.webp" border="0" title="Welcome Party Dress Code">
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

<svelte:head>
	<title>Sam & Marielle - Welcome Party</title>
</svelte:head>

<div class="page-wrapper">
    <Anahaw fixed={true} />
    <Nav />
    <div class="content">
        <div class="hero">
            <div class="wrapper">
                <div>
                    <h1>Join us at the <span class="em">Welcome Party.</span></h1>
                    <p>The unofficial start of our beautiful weekend in Boracay.</p>
                    <BackToHome />
                </div>
                <div></div>
            </div>
        </div>
        <div class="hero-img">
            <div></div>

            <TornImage left={true} bottom={true} image="/images/welcome-party.png" height="500" />
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
