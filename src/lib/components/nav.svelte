<script>
    import Rsvp from "./rsvp.svelte";
</script>

<nav>
    <button class="menu-toggle">&#9776;</button>
    <div class="links">
        <a href="#venue">Event</a>
        <a href="#travel">Travel</a>
        <a href="#explore">Explore</a>
        <a href="#faqs">FAQs</a>
    </div>
</nav>

<style>
    nav .menu-toggle {
        font-size: 32px;
        color: var(--ivory);
        padding: 0;
        background: none;
        border: 0;
        outline: 0;
        cursor: pointer;
    }
    nav .links {
        /* position: absolute; top: 0; left: 0; right: 0; z-index: 200; */
        display: none; align-items: center;
        gap: clamp(24px, calc(24px + 1vw), 48px);
        /* padding: 18px 32px; */
        background: transparent;
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
        color: var(--ivory);
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
    /* nav .nav-heart {
        font-size: 14px;
        color: var(--gold);
        opacity: 0.7;
    } */
    /* nav a.logo {
        color: var(--charcoal);
        font-family: "Cormorant Garamond", serif;
        font-size: 1.5rem;
        font-style: italic;
        font-weight: 300px;
        text-transform: none;
    } */
</style>