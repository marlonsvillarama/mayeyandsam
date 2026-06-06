<script>
    import { ArrowRight } from "@lucide/svelte";
</script>

<div class="top-nav">
    <div class="wrapper">
        <span class="title">Sam & Marielle</span>
        <nav>
            <ul>
                <li><a href="/">Our Story</a></li>
                <li><a href="/">The Weekend</a></li>
                <li><a href="/">Travel</a></li>
                <li class="rsvp">
                    <a role="button">
                        RSVP
                        <ArrowRight size={14} />
                    </a>
                </li>
            </ul>
        </nav>
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
        z-index: 100;
    }
    .top-nav > .wrapper {
        display: flex;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* padding: 0.625rem 1.75rem 0.5rem; */
        padding: 0 1.75rem;
        /* border-bottom: 1px solid red; */
    }
    .top-nav .title {
        color: var(--espresso);
        font-size: 1.375rem;
        font-weight: 400;
        letter-spacing: 4px;
        text-transform: uppercase;
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
