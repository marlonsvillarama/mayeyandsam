<script></script>

<div class="top-nav">
    <div class="wrapper">
        <span class="title">Sam & Marielle</span>
        <nav></nav>
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
        padding: 0.625rem 1.75rem 0.5rem;
        /* border-bottom: 1px solid red; */
    }
    .top-nav .title {
        color: var(--espresso);
        font-size: 1.375rem;
        font-weight: 400;
        letter-spacing: 4px;
        text-transform: uppercase;
    }
</style>
