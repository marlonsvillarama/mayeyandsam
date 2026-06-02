<script>
    import Nav from "./nav.svelte";
    import Rsvp from "./rsvp.svelte";

    const scrollNav = () => {
        const navWrapper = document.getElementById('nav-wrapper');

        if (window.scrollY > 0) {
            navWrapper.classList.add('scrolled');
        }
        else {
            navWrapper.classList.remove('scrolled');
        }
    };
    // window.addEventListener('scroll', () => );
</script>

<svelte:window onscroll={scrollNav} />

<div id="nav-wrapper" class="nav-wrapper">
    <nav>
        <button class="menu-toggle">&#9776;</button>

        <div class="links">
            <i class="ph ph-arrow-left"></i>
            <a href="/">Back to Home</a>
        </div>
    </nav>

    <div class="title">
        <span>Sam</span>
        <span>&amp;</span>
        <span>Marielle</span>
    </div>

    <Rsvp />
</div>

<style>
    .nav-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 16px clamp(9px, calc(2px + 3vw), 24px) 16px clamp(24px, calc(8px + 3vw), 36px);
        /* border: 1px solid red; */
        /* display: flex; */
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        /* opacity: 1; */
        /* background-color: var(--cream); */
        background-color: inherit;
        justify-content: space-between;
        z-index: 100;
        transition: background-color 200ms ease-in-out, box-shadow 200ms ease-in-out;
    }
    :global(.nav-wrapper.scrolled) {
        background-color: var(--sand);
        box-shadow: 0 4px 20px rgba(197,163,90,0.4);
    }
    .nav-wrapper {
        display: flex;
    }
    nav .menu-toggle {
        font-size: 32px;
        color: var(--ivory);
        padding: 0;
        background: none;
        border: 0;
        outline: 0;
        cursor: pointer;
    }
    .title {
        display: absolute;
        /* top: 2rem; */
        left: 50%;
        /* padding: 0.5rem 0; */
        /* transform: translateY(20%); */
        z-index: 200;
        /* border: 1px solid red; */
    }
    .title span {
        /* font-family: 'Cormorant Garamond', serif; */
        font-family: "Eyesome", cursive;
        font-size: 3rem;
        font-weight: 400;
        color: var(--chocolate);
        line-height: 0.95;
        letter-spacing: -2px;
        text-shadow: 0 2px 40px rgba(0,0,0,0.3);
        /* margin-bottom: 4rem; */
        /* animation: fade-up 1s ease 0.15s both; */
    }

    nav .links {
        /* position: absolute; top: 0; left: 0; right: 0; z-index: 200; */
        display: none; align-items: center;
        /* gap: clamp(24px, calc(24px + 1vw), 48px); */
        gap: 0.5rem;
        /* padding: 18px 32px; */
        background: inherit;
        /* background: rgb(250,246,240); */
        /* background: rgba(250,246,240,0.9); */
        /* backdrop-filter: blur(14px); */
        /* border-bottom: 1px solid rgba(197,163,90,0.2); */
    }
    nav .links > a {
        text-decoration: none;
        /* font-size: 13px; */
        /* font-size: clamp(13px, calc(13px + 4vw), 16px); */
        letter-spacing: 2.5px;
        text-transform: uppercase;
        /* color: var(--ivory); */
        color: var(--chocolate);
        font-weight: 400;
        transition: color 0.2s;
        border-bottom: 2px solid transparent;
        transition: all 150ms ease-in-out;
    }
    nav a:hover {
        color: var(--primary);
        border-bottom: 2px solid var(--primary);
    }

    @media (min-width: 40rem) {
        nav .menu-toggle {
            display: none;
        }
        nav .links {
            display: flex;
        }
    }
</style>