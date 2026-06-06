<script></script>

<div class="taped">
    <!-- <div class="top-tape"></div> -->
    <div class="tape-section"></div>
    <div class="tape-section"></div>
</div>

<style>
    .taped {
        --paper-color: var(--pink);
        --paper-dark: var(--pink-dark);
        --shadow-size: 1px;
        --transparent: rgba(236, 178, 186, 0);
        --tape-gray: #dbd8be;
        --tape-edge-gray: #b7b49d;

        /* border: 1px solid red; */
        position: relative;
        background-image: url(/images/big_002.png);
        background-size: cover;
        background-position: center;
        height: 20rem;
        width: 30rem;

        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow-size) var(--shadow-size) 2px var(--paper-dark);
        /* margin: auto;
        margin-top: 50px; */
        transform: rotate(1.5deg);
    }
    .taped::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            var(--transparent),
            50%,
            var(--paper-dark),
            51%,
            var(--transparent)
        ),
        linear-gradient(
            to right,
            var(--transparent),
            50%,
            var(--paper-dark),
            51%,
            var(--transparent)
        );
    }
    .tape-section {
        position: absolute;
        width: 100%;
    }
    .tape-section:first-of-type {
        top: 0;
    }
    .tape-section:last-of-type {
        bottom: 0;
    }
    .tape-section::before,
    .tape-section::after {
        content: "";
        width: 12vmin;
        height: 5vmin;
        position: absolute;
        background-color: var(--tape-gray);
        opacity: 0.5;
        border-right: 1px dotted var(--tape-edge-gray);
        border-left: 1px dotted var(--tape-edge-gray);
    }
    .tape-section:last-of-type::after {
        transform: rotate(-45deg);
        right: -8vmin;
        top: -6vmin;
    }
    .tape-section:first-of-type::before {
        transform: rotate(-35deg);
        left: -8vmin;
    }
    .tape-section:first-of-type::after {
        transform: rotate(45deg);
        right: -8vmin;
        top: 0vmin;
    }
    .tape-section:last-of-type::before {
        transform: rotate(45deg);
        left: -8vmin;
        bottom: 0vmin;
    }
    .top-tape {
        position: absolute;
        height: 10vmin;
        top: -1rem;
        /* left: -2.5rem; */
        width: 110%;
        background-color: var(--tape-gray);
        border-right: 1px dotted var(--tape-edge-gray);
        border-left: 1px dotted var(--tape-edge-gray);
        opacity: 0.5;
        transform: rotate(1deg);
    }
</style>
