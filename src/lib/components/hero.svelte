<script>
    // import BookNow from "./book-now.svelte";
    import Countdown from "./countdown.svelte";
    // import Nav from "./nav.svelte";
    // import Rsvp from "./rsvp.svelte";
</script>

<!-- <div class="nav-wrapper">
    <Nav />
    <Rsvp />
</div> -->

<section class="hero" id="hero">
    <div class="parallax"></div>

    <!-- <div class="petals-container" id="petals"></div> -->

    <div class="hero-content">
        <div class="title">
            <span>Sam</span>
            <span>&amp;</span>
            <span>Marielle</span>
        </div>
        <!-- <h1>Sam &amp; Marielle</h1> -->
        <p class="hero-date">December 26-27, 2026</p>
        <p class="hero-venue">Boracay, Philippines</p>
    </div>

    <!-- <div class="hero-scroll">
        <span>Scroll</span>
        <div class="scroll-dot"></div>
    </div> -->

    <div class="countdown">
        <Countdown />
    </div>
</section>

<!-- <section id="hero">
    <div class="parallax"></div>
    <div class="content">
        <div class="header">
            <h1>Save the Date</h1>
            <span>to celebrate the wedding of</span>
            <h2>Sam & Marielle</h2>
        </div>
        <div class="dates">
            <div class="inner">
                <div class="date">
                    <h2>26 December, 2026</h2>
                    <h3>Saturday</h3>
                    <h3>Welcome Party</h3>
                </div>
                <div class="date">
                    <h2>27 December, 2026</h2>
                    <h3>Sunday</h3>
                    <h3>Ceremony and Reception</h3>
                </div>
            </div>

            <BookNow />
        </div>
    </div>
</section> -->

<style>
    .hero {
        min-height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: var(--charcoal);
    }

    /* Layered tropical background via CSS */
    .parallax {
        background-image: url(/images/marielle_and_sam_05.png);
        /* filter: blur(2px); */
        position: absolute;
        inset: 0;
        top: 0;
        left: 0;
        width: 100%;
        /* min-height: 100vh; */
        height: 100%;
        background-size: cover;
        background-position: center;
        /* background-attachment: fixed; */
        z-index: 1;
    }
    /* .nav-wrapper {
        position: fixed; top: 0; left: 0; right: 0; z-index: 200;
        display: flex; justify-content: space-between; align-items: center;
        padding: 16px clamp(9px, calc(2px + 3vw), 24px) 0 clamp(24px, calc(8px + 3vw), 36px);
    } */

    /* .hero-bg {
        position: absolute; inset: 0; z-index: 0;
    } */
    /* .hero-sky {
        position: absolute; inset: 0;
        background: linear-gradient(
            180deg,
            #1a2a3a 0%,
            #2a4060 20%,
            #5a6a8a 40%,
            #c4826a 60%,
            #e0a060 75%,
            #e8c88a 85%,
            #f0d8a0 100%
        );
    } */
    /* Sun glow */
    /* .hero-sun {
        position: absolute;
        width: 160px; height: 160px;
        border-radius: 50%;
        background: radial-gradient(circle, #fce88a 0%, #f0b040 40%, rgba(240,160,60,0) 70%);
        top: 42%; left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.9;
        animation: sun-glow 4s ease-in-out infinite;
    }
    @keyframes sun-glow {
        0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.9}
        50%{transform:translate(-50%,-50%) scale(1.08);opacity:1}
    } */
    /* Ocean */
    /* .hero-ocean {
        position: absolute;
        bottom: 0; left: 0; right: 0;
        height: 38%;
        background: linear-gradient(180deg, #2a6888 0%, #1a4a6a 40%, #122a40 100%);
        border-radius: 60% 60% 0 0 / 20px 20px 0 0;
    } */
    /* Ocean shimmer */
    /* .hero-ocean::before {
        content: '';
        position: absolute;
        top: 12px; left: 15%; right: 15%; height: 2px;
        background: linear-gradient(90deg, transparent, rgba(255,220,140,0.6), rgba(255,240,180,0.9), rgba(255,220,140,0.6), transparent);
        border-radius: 50%;
        animation: shimmer 3s ease-in-out infinite;
    }
    .hero-ocean::after {
        content: '';
        position: absolute;
        top: 22px; left: 25%; right: 30%; height: 1.5px;
        background: linear-gradient(90deg, transparent, rgba(255,220,140,0.4), rgba(255,240,180,0.7), transparent);
        border-radius: 50%;
        animation: shimmer 3s ease-in-out infinite 0.8s;
    }
    @keyframes shimmer {
        0%,100%{opacity:.5;transform:scaleX(0.95)}
        50%{opacity:1;transform:scaleX(1.05)}
    } */

    /* Palm trees left */
    /* .palm-left {
        position: absolute;
        bottom: 32%; left: 4%;
        width: 90px; height: 180px;
        z-index: 2;
    } */
    /* Palm trees right */
    /* .palm-right {
        position: absolute;
        bottom: 33%; right: 3%;
        width: 80px; height: 160px;
        z-index: 2;
        transform: scaleX(-1);
    } */

    /* Beach sand strip */
    /* .hero-beach {
        position: absolute;
        bottom: 0; left: 0; right: 0;
        height: 14%;
        background: linear-gradient(180deg, #e8d8a8 0%, #d4c090 50%, #c8b080 100%);
        z-index: 1;
    } */

    /* Floating petals */
    /* .petals-container {
        position: absolute; inset: 0; pointer-events: none; z-index: 3;
    } */
    /* .petal {
        position: absolute;
        width: 8px; height: 12px;
        border-radius: 50% 0 50% 0;
        background: rgba(232,196,180,0.7);
        animation: fall linear infinite;
    } */
    /* @keyframes fall {
        0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
        10% { opacity: 0.8; }
        90% { opacity: 0.4; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    } */

    .hero-content {
        position: relative; z-index: 10;
        text-align: center;
        padding: 20px;
        /* border: 1px solid red; */
    }

    /* Gold ornament line */
    /* .ornament {
        display: flex; align-items: center; justify-content: center; gap: 14px;
        margin-bottom: 28px;
        animation: fade-up 1s ease both;
    }
    .ornament-line {
        width: 60px; height: 1px;
        background: linear-gradient(90deg, transparent, var(--gold));
    }
    .ornament-line.right {
        background: linear-gradient(90deg, var(--gold), transparent);
    }
    .ornament span {
        color: var(--gold);
        font-size: 18px;
        letter-spacing: 3px;
    } */

    /* .hero h1 { */
    .hero-content .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
    }
    @media (min-width: 30rem) {
        .hero-content .title {
            flex-direction: row;
        }
    }
    .hero-content .title span {
        /* font-family: 'Cormorant Garamond', serif; */
        font-family: "Eyesome", cursive;
        font-size: clamp(62px, 12vw, 96px);
        font-weight: 300;
        color: var(--white);
        line-height: 0.95;
        letter-spacing: -2px;
        text-shadow: 0 2px 40px rgba(0,0,0,0.3);
        /* margin-bottom: 4rem; */
        animation: fade-up 1s ease 0.15s both;
    }
    /* .hero h1 em {
        font-style: italic;
        color: var(--gold-light);
    } */

    /* .hero-ampersand {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(100px, 18vw, 200px);
        font-weight: 300;
        font-style: italic;
        color: var(--gold);
        opacity: 0.25;
        line-height: 0.7;
        display: block;
        margin: -10px 0;
        animation: fade-up 1s ease 0.1s both;
    } */

    .hero-date {
        font-size: 0.875rem;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: rgba(255,255,255,0.8);
        margin-top: 1.75rem;
        animation: fade-up 1s ease 0.3s both;
    }
    .hero-venue {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.5rem;
        font-style: italic;
        color: var(--gold-light);
        margin-top: 0.5rem;
        animation: fade-up 1s ease 0.4s both;
    }

    /* .hero-scroll {
        position: absolute; bottom: 28px; left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        display: flex; flex-direction: column; align-items: center; gap: 8px;
        animation: fade-up 1s ease 1s both;
    } */
    /* .hero-scroll span {
        font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
        color: rgba(255,255,255,0.5);
    } */
    /* .scroll-dot {
        width: 1px; height: 40px;
        background: linear-gradient(180deg, rgba(255,255,255,0.5), transparent);
        animation: scroll-line 2s ease-in-out infinite;
    } */

    /* .countdown::before {
        content: "";
    } */
    .countdown {
        /* background-image: url(/images/bg_weave.png); */
        /* background-size: cover; */
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
    }
    /* @keyframes scroll-line {
    0%{transform:scaleY(0);transform-origin:top} 50%{transform:scaleY(1)} 100%{transform:scaleY(0);transform-origin:bottom}
    } */
/*
.parallax {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    z-index: -1;
}

#hero .parallax {
    background-image: url(/images/marielle_and_sam_05.webp);
}


.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
    position: relative;
    height: 100vh;
    z-index: 1;
    border: 0px solid red;
}

.content > .header {
    display: grid;
    gap: 1rem;
    margin-top: clamp(3rem, calc(3rem + 1vw), 6rem);
    display: grid;
    gap: 0;
}

.content > .header > h1 {
    color: white;
    font-family: "Eyesome", cursive;
    font-size: clamp(3rem, calc(3rem + 4vw), 10rem);
    font-weight: 400;
    margin-bottom: clamp(0.5rem, calc(0.5rem + 1vw), 0.5rem);
    text-align: center;
}
.content > .header > span,
.content > .header > h2 {
    text-align: center;
    text-transform: uppercase;
}

.content > .header > span {
    font-size: clamp(0.6rem, calc(0.6rem + 1vw), 0.875rem);
    font-weight: 700;
    letter-spacing: 3px;
}
.content > .header > h2 {
    color: white;
    font-size: clamp(1.25rem, calc(1.25rem + 2vw), 2rem);
    letter-spacing: 3px;
    margin-top: 0.25rem;
}

.dates {
    margin-bottom: clamp(3rem, calc(3rem + 1vw), 4rem);
    text-align: center;
    display: grid;
    gap: clamp(1.5rem, calc(1.5rem + 1vw), 2.25rem);
}

.dates > .inner {
    display: grid;
    gap: clamp(1.5rem, calc(1.5rem + 1vw), 2.25rem);
}

@media (min-width: 641px) {
    .dates > .inner {
        grid-template-columns: repeat(2, 1fr);
        align-items: flex-start;
        margin: 0 auto;
        width: 520px;
    }
}

.date {
    display: grid;
    gap: 0.25rem;
}

.date > h2 {
    color: white;
    font-size: clamp(1.125rem, calc(1.125rem + 1vw), 1.375rem);
    font-weight: 700;
    letter-spacing: 1px;
}

.date > h3 {
    font-size: clamp(0.875rem, calc(0.875rem + 1vw), 1rem);
    font-weight: 600;
    opacity: 0.8;
    color: var(--almond);
} */

</style>