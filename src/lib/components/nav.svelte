<script></script>

<nav>
    <a href="#venue">Venue</a>
    <a href="#travel">Travel</a>
    <span class="nav-heart">✦</span>
    <a class="logo" href="#">Sam & Marielle</a>
    <span class="nav-heart">✦</span>
    <a href="#explore">Explore</a>
    <a href="#budget">Budget</a>
</nav>

<style>
    nav {
        position: fixed; top: 0; left: 0; right: 0; z-index: 200;
        display: flex; justify-content: center; align-items: center;
        gap: 36px;
        padding: 18px 32px;
        background: rgb(250,246,240);
        /* background: rgba(250,246,240,0.9); */
        /* backdrop-filter: blur(14px); */
        border-bottom: 1px solid rgba(197,163,90,0.2);
    }
    nav a {
        text-decoration: none;
        font-size: 11px;
        letter-spacing: 2.5px;
        text-transform: uppercase;
        color: var(--brown);
        font-weight: 400;
        transition: color 0.2s;
    }
    nav a:hover { color: var(--gold); }
    nav .nav-heart {
        font-size: 14px;
        color: var(--gold);
        opacity: 0.7;
    }
    nav a.logo {
         /* style="font-family:'Cormorant Garamond',serif;font-size:17px;font-style:italic;letter-spacing:0;text-transform:none;color:var(--charcoal)" */
        color: var(--charcoal);
        font-family: "Cormorant Garamond", serif;
        font-size: 1.5rem;
        font-style: italic;
        font-weight: 300px;
        text-transform: none;
        /* font-size: clamp(3rem, calc(3rem + 4vw), 10rem); */
    }
</style>