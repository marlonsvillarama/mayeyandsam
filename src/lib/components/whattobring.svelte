<script></script>

<section class="wtb" id="wtb">
    <div class="wtb-inner">
        <h2 class="reveal">What you will <em>bring.</em></h2>

        <div class="cat-wrapper">
            <div class="cat">
                <span class="cat-tag reveal">For the Welcome Party</span>
                <div class="row">
                    <i class="ph ph-check-square"></i>
                    <span>Cocktail attire</span>
                </div>
                <div class="row">
                    <i class="ph ph-check-square"></i>
                    <span>Item 2</span>
                </div>
                <div class="row">
                    <i class="ph ph-check-square"></i>
                    <span>Item 3</span>
                </div>
            </div>

            <div class="cat">
                <span class="cat-tag reveal">For the Ceremony & Reception</span>
                <div class="row">
                    <i class="ph ph-check-square"></i>
                    <span>Beach formal attire</span>
                </div>
                <div class="row">
                    <i class="ph ph-check-square"></i>
                    <span>Item 2</span>
                </div>
                <div class="row">
                    <i class="ph ph-check-square"></i>
                    <span>Item 3</span>
                </div>
            </div>

            <div class="cat">
                <span class="cat-tag reveal">For Everything Else</span>
                <div class="row">
                    <i class="ph ph-check-square"></i>
                    <span>A good pair of walking shoes</span>
                </div>
                <div class="row">
                    <i class="ph ph-check-square"></i>
                    <span>Insect repellant</span>
                </div>
                <div class="row">
                    <i class="ph ph-check-square"></i>
                    <span>Life vest / snorkel / flippers</span>
                </div>
                <div class="row">
                    <i class="ph ph-check-square"></i>
                    <span>Red Horse</span>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        background: var(--white);
    }
    .wtb-inner {
        /* border: 1px solid red; */
        max-width: 1100px;
        margin: 0 auto;
    }
    .wtb-inner h2 {
        /* font-size: clamp(3.5rem, calc(3.5rem + 0.5vw), 5rem); */
        text-align: center;
        margin-bottom: 2rem;
    }
    .cat-wrapper {
        display: grid;
        gap: 3rem;
    }
    .cat-tag {
        display: block;
        font-size: 16px;
        font-weight: 500;
        color: var(--gold-light);
        text-transform: uppercase;
        letter-spacing: 2px;
        padding-bottom: 0.75rem;
        border-bottom: 1.5px solid var(--brown);
        margin-bottom: 0.75rem;
    }
    .cat .row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
    }
    .cat .row:not(:last-child) {
        margin-bottom: 0.5rem;
    }
    .cat .row > i {
        font-size: 24px;
    }
    .cat .row > span {
        letter-spacing: 0.5px;
        opacity: 0.8;
    }
</style>
