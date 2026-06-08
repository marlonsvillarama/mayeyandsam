<script>
    import { ArrowRight } from "@lucide/svelte";
</script>

<div class="top-nav">
    <div class="wrapper">
        <a href="/" class="title">Sam & Marielle</a>
        <button role="button" href="/">
            RSVP
            <!-- <ArrowRight size={14} /> -->
        </button>
        <!-- <nav>
            <ul>
                <li><a href="/">The Weekend</a></li>
                <li><a href="/">Travel</a></li>
                <li class="rsvp">
                </li>
            </ul>
        </nav> -->
    </div>
</div>

<style>
    .top-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to right, transparent 0%, var(--cream-blur) 20%, var(--cream) 50%);
        backdrop-filter: blur(3px);
        border-bottom: 1px solid var(--warm-sand);
        z-index: 999;
    }
    .top-nav > .wrapper {
        display: flex;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* padding: 0.625rem 1.75rem 0.5rem; */
        padding: 0;
        /* border-bottom: 1px solid red; */
    }
    @media (min-width: 60rem) {
        .top-nav > .wrapper {
            /* padding: 0 1.75rem; */
        }
    }
    .top-nav .title {
        /* border: 1px solid red; */
        color: var(--espresso);
        font-size: 1.375rem;
        font-weight: 400;
        letter-spacing: 4px;
        text-decoration: none;
        text-transform: uppercase;
        padding: 1rem 0 1rem 1.5rem;
    }
    .top-nav button {
        background-color: var(--terracota);
        /* border: 1px solid red; */
        border: 0;
        border-radius: 100px;
        color: var(--ivory);
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 4px;
        text-decoration: none;
        text-transform: uppercase;
        margin-right: 1.5rem;
        padding: 1rem 1.5rem;
        transition: all 150ms ease-in-out;
    }
    .top-nav button:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transform: translateY(-2px);
    }
    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    nav ul li { float: left; }
    nav ul li a,
    nav ul li button {
        background-color: var(--transparent);
        border: none;
        color: var(--chocolate);
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        font-weight: 500;
        gap: 0.5rem;
        letter-spacing: 1px;
        outline: none;
        padding: 1rem 1.5rem;
        text-decoration: none;
        /* border: 1px solid red; */
        text-align: center;
        text-transform: uppercase;
        transition: all 150ms ease-in-out;
    }
    nav ul li a:hover,
    nav ul li button:hover {
        background-color: var(--terracota);
        color: var(--ivory);
    }
</style>
