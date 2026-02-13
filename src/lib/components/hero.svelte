<script>
    import BookNow from "./book-now.svelte";
</script>

<section id="hero">
    <div class="parallax"></div>
    <div class="content">
        <div class="header">
            <h1>Save the Date</h1>
            <span>to celebrate the wedding of</span>
            <h2>Marielle & Sam</h2>
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

            <!-- Book Now -->
            <BookNow />
        </div>
    </div>
</section>

<style>
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
    background-image: url(images/marielle_and_sam_05.webp);
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

/* HERO */
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
    /* color: white; */
    font-size: clamp(0.6rem, calc(0.6rem + 1vw), 0.875rem);
    font-weight: 700;
    letter-spacing: 3px;
    /* opacity: 0.8; */
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
        /* border: 1px solid red; */
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
    /* letter-spacing: 2px; */
    opacity: 0.8;
    color: var(--almond);
}

</style>