<script>
    // let panelCalgary = $state(null);
    // let panelManila = $state(null);
    let activeLink = $state('calgary');

    const switchTab = (id) => {
        activeLink = id;
        // document.querySelectorAll('.travel-panel').forEach(p => p.classList.remove('active'));
        // document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        // document.getElementById('panel-' + city).classList.add('active');
        // event.target.classList.add('active');
    };
</script>

<section class="travel-section" id="travel">
    <div class="travel-inner">
        <!-- <span class="section-tag reveal">Getting There</span> -->
        <h2 class="reveal">Your journey to <em>Boracay.</em></h2>
        <!-- <p class="section-intro reveal">Boracay is a small island that requires a short journey from the mainland. Here's how to get there from both Calgary and Manila.</p> -->

        <div class="travel-tabs reveal">
            <button class="tab-btn {activeLink === 'calgary' ? 'active' : ''}" onclick={() => switchTab('calgary')}>
                From Canada
                <!-- <i class="ph-fill ph-airplane-tilt"></i> From Calgary, Canada -->
            </button>
            <button class="tab-btn {activeLink === 'calgary' ? '' : 'active'}" onclick={() => switchTab('manila')}>
                From Manila
                <!-- <i class="ph-fill ph-boat"></i> From Manila, Philippines -->
            </button>
        </div>

        <!-- CALGARY -->
        <div class="travel-panel {activeLink === 'calgary' ? 'active' : ''}" id="panel-calgary">
            <div class="travel-panel-inner">
                <div class="route-steps">
                    <!-- <div class="route-step reveal">
                        <div class="step-num-circle">1</div>
                        <div class="step-body">
                            <strong>Calgary (YYC) → Manila (MNL)</strong>
                            <div class="step-desc">
                                <span class="step-main">Fly from Calgary International Airport to Ninoy Aquino International Airport.</span>
                                <span class="step-sub">Most routes connect via Tokyo, Seoul (ICN), Hong Kong, or Vancouver.</span>
                                <span class="step-sub">Airlines: Air Canada, Philippine Airlines, Korean Air, Cathay Pacific.</span>
                            </div>
                        </div>
                        <div class="step-duration">~16–20h<small>with stopover</small></div>
                    </div> -->
                    <div class="route-step reveal">
                        <div class="row">
                            <i class="ph ph-airplane-takeoff"></i>
                            <span class="point">Vancouver, CA</span>
                        </div>
                        <div class="row path">
                            <!-- <div class="path"></div> -->
                            <i class="ph ph-dots-three-vertical icon-small"></i>
                            <span>around 16 hours with stopover</span>
                        </div>
                        <div class="row">
                            <i class="ph ph-map-pin"></i>
                            <span class="point">Manila, PH</span>
                        </div>
                    </div>
                    <div class="route-connector"></div>

                    <div class="route-step reveal">
                        <div class="row">
                            <i class="ph ph-airplane-takeoff"></i>
                            <span class="point">Manila, PH</span>
                        </div>
                        <div class="row path">
                            <!-- <div class="path"></div> -->
                            <i class="ph ph-dots-three-vertical icon-small"></i>
                            <span>around 1 hour flight</span>
                        </div>
                        <div class="row">
                            <i class="ph ph-map-pin"></i>
                            <span class="point">Caticlan, Panay Island</span>
                        </div>
                    </div>
                    <!-- <div class="route-step reveal">
                        <div class="step-num-circle">2</div>
                        <div class="step-body">
                            <strong>Manila (MNL) → Caticlan (MPH)</strong>
                            <div class="step-desc">
                                <span class="step-main">Fly from Manila to Godofredo P. Ramos Airport in Caticlan.</span>
                                <span class="step-sub">Several daily flights via Cebu Pacific, Philippine Airlines, or AirAsia.</span>
                                <span class="step-sub">Alternatively, fly to Kalibo (KLO) for cheaper fares (longer transfer).</span>
                            </div>
                        </div>
                        <div class="step-duration">~1h<small>flight</small></div>
                    </div> -->
                    <div class="route-connector"></div>

                    <div class="route-step reveal">
                        <div class="row">
                            <i class="ph ph-sailboat"></i>
                            <span class="point">Caticlan, Panay Island</span>
                        </div>
                        <div class="row path">
                            <!-- <div class="path"></div> -->
                            <i class="ph ph-dots-three-vertical icon-small"></i>
                            <span>15 minute boat ride</span>
                        </div>
                        <div class="row">
                            <i class="ph ph-map-pin"></i>
                            <span class="point">Boracay Island</span>
                        </div>
                    </div>
                    <!-- <div class="route-step reveal">
                        <div class="step-num-circle">3</div>
                        <div class="step-body">
                            <strong>Caticlan Jetty Port → Boracay Island</strong>
                            <div class="step-desc">
                                <span class="step-main">A short tricycle ride from Caticlan airport to the jetty port.</span>
                                <span class="step-sub">From there, take a bangka (outrigger boat) to Boracay's Cagban or Ilig-Iligan port.</span>
                            </div>
                        </div>
                        <div class="step-duration">~15 min<small>boat ride</small></div>
                    </div> -->
                    <div class="route-connector"></div>

                    <div class="route-step reveal">
                        <div class="row">
                            <i class="ph ph-motorcycle"></i>
                            <span class="point">Boracay Port</span>
                        </div>
                        <div class="row path">
                            <!-- <div class="path"></div> -->
                            <i class="ph ph-dots-three-vertical icon-small"></i>
                            <span>10-20 minutes by e-trike</span>
                        </div>
                        <div class="row">
                            <i class="ph ph-flag-checkered"></i>
                            <span class="point">Your hotel</span>
                        </div>
                    </div>
                    <!-- <div class="route-step reveal">
                        <div class="step-num-circle">4</div>
                        <div class="step-body">
                            <strong>Boracay Port → Your Hotel / Venue</strong>
                            <div class="step-desc">
                                <span class="step-main">E-trikes (electric tuktuks) operate island-wide from the port.</span>
                                <span class="step-sub">White Beach is easily accessible from either port.</span>
                            </div>
                        </div>
                        <div class="step-duration">~10–20 min<small>by e-trike</small></div>
                    </div> -->
                </div>
                <div class="travel-tip reveal">
                    <strong>Traveling from Canada:</strong>
                    <ul>
                        <li>Book flights at least 3-4 months in advance for December.</li>
                        <li>Arrive in Boracay by December 25-26 to settle in nicely.</li>
                        <li>Budget roughly CAD $1,600 - $2,800 for round-trip airfare.</li>
                    </ul>
                    <!-- <span class="tip-icon">💡</span> -->
                    <!-- <p>Book flights at least 3–4 months in advance for December travel. Arrive in Boracay on December 25–26 to settle in before the big day. Budget roughly <strong>CAD $1,600–$2,800</strong> for round-trip airfare from Calgary depending on your airline and stopover city.</p> -->
                </div>
            </div>
        </div>

        <!-- MANILA -->
        <div class="travel-panel {activeLink === 'calgary' ? '' : 'active'}" id="panel-manila">
            <div class="travel-panel-inner">
                <div class="route-steps">
                    <div class="route-step reveal">
                        <div class="row">
                            <i class="ph ph-airplane-takeoff"></i>
                            <span class="point">Manila, PH</span>
                        </div>
                        <div class="row path">
                            <!-- <div class="path"></div> -->
                            <i class="ph ph-dots-three-vertical icon-small"></i>
                            <span>around 1 hour flight</span>
                        </div>
                        <div class="row">
                            <i class="ph ph-map-pin"></i>
                            <span class="point">Caticlan, Panay Island</span>
                        </div>
                    </div>
                    <!-- <div class="route-step reveal">
                        <div class="step-num-circle">1</div>
                        <div class="step-body">
                            <strong>Option A — Fly: Manila (MNL) → Caticlan (MPH)</strong>
                            <div class="step-desc">
                                <span class="step-main">The fastest option.</span>
                                <span class="step-sub">Multiple daily flights from NAIA or Clark Airport on Cebu Pacific, Philippine Airlines, or AirAsia.</span>
                                <span class="step-sub">Book early for the best fares, especially over the Christmas holiday season.</span>
                            </div>
                        </div>
                        <div class="step-duration">~1h<small>flight</small></div>
                    </div> -->
                    <!-- <div class="route-connector"></div> -->
                    <!-- <div class="route-step reveal">
                        <div class="step-num-circle">2</div>
                        <div class="step-body">
                            <strong>Option B — Bus + Ferry: Manila → Caticlan</strong>
                            <div class="step-desc">
                                <span class="step-main">Take a bus from Manila to Roxas City or Iloilo, then a ferry to Caticlan.</span>
                                <span class="step-sub">This is the budget option — takes significantly longer but is very affordable.</span>
                                <span class="step-sub">Not ideal if joining right before the wedding.</span>
                            </div>
                        </div>
                        <div class="step-duration">~12–16h<small>total journey</small></div>
                    </div> -->
                    <div class="route-connector"></div>

                    <div class="route-step reveal">
                        <div class="row">
                            <i class="ph ph-sailboat"></i>
                            <span class="point">Caticlan, Panay Island</span>
                        </div>
                        <div class="row path">
                            <!-- <div class="path"></div> -->
                            <i class="ph ph-dots-three-vertical icon-small"></i>
                            <span>15 minute boat ride</span>
                        </div>
                        <div class="row">
                            <i class="ph ph-map-pin"></i>
                            <span class="point">Boracay Island</span>
                        </div>
                    </div>
                    <!-- <div class="route-step reveal">
                        <div class="step-num-circle">3</div>
                        <div class="step-body">
                            <strong>Caticlan Jetty → Boracay Island</strong>
                            <div class="step-desc">
                                <span class="step-main">From Caticlan airport or jetty port, board a bangka boat to Boracay.</span>
                                <span class="step-sub">Boats run regularly throughout the day.</span>
                                <span class="step-sub">Environmental fee of ₱100 and terminal fee of ₱100 apply.</span>
                            </div>
                        </div>
                        <div class="step-duration">~15 min<small>boat ride</small></div>
                    </div> -->
                    <div class="route-connector"></div>

                    <div class="route-step reveal">
                        <div class="row">
                            <i class="ph ph-motorcycle"></i>
                            <span class="point">Boracay Port</span>
                        </div>
                        <div class="row path">
                            <!-- <div class="path"></div> -->
                            <i class="ph ph-dots-three-vertical icon-small"></i>
                            <span>10-20 minutes by e-trike</span>
                        </div>
                        <div class="row">
                            <i class="ph ph-flag-checkered"></i>
                            <span class="point">Your hotel</span>
                        </div>
                    </div>
                    <!-- <div class="route-step reveal">
                        <div class="step-num-circle">4</div>
                        <div class="step-body">
                            <strong>Cagban Port → Your Hotel / Venue</strong>
                            <div class="step-desc">
                                <span class="step-sub">E-trikes meet all incoming boats and run along the main road to all beach stations.</span>
                                <span class="step-sub">White Beach (Station 1–3) is a short ride from Cagban port.</span>
                            </div>
                        </div>
                        <div class="step-duration">~10–20 min<small>by e-trike</small></div>
                    </div> -->
                </div>
                <div class="travel-tip reveal">
                    <strong>Traveling from Manila</strong>
                    <ul>
                        <li>Book your flights to Caticlan at least 2-3 months ahead.</li>
                        <li>Consider flying to Kalibo as a budget alternative (will add ~1.5 hours of bus transfer to Caticlan).</li>
                    </ul>
                    <!-- <span class="tip-icon">💡</span> -->
                    <!-- <p>Book flights at least 3–4 months in advance for December travel. Arrive in Boracay on December 25–26 to settle in before the big day. Budget roughly <strong>CAD $1,600–$2,800</strong> for round-trip airfare from Calgary depending on your airline and stopover city.</p> -->
                </div>
                <!-- <div class="travel-tip reveal"> -->
                    <!-- <span class="tip-icon">💡</span> -->
                    <!-- <p><strong>Tip for Manila guests:</strong> December is peak season — book your Caticlan flights 2–3 months ahead. Cebu Pacific often has promos. Expect round-trip flights of around <strong>₱2,500–₱5,500</strong>. Consider flying into Kalibo (KLO) as a budget alternative (add ~1.5h bus transfer to Caticlan).</p> -->
                <!-- </div> -->
            </div>
        </div>
    </div>
</section>

<style>
    .travel-section { background: var(--ivory); }
    .travel-inner { max-width: 1100px; margin: 0 auto; }
    .travel-inner h2 {
        /* font-size: clamp(2.5rem, calc(3rem + 0.5vw), 2.5rem); */
        text-align: center;
        margin-bottom: 2rem;
    }
    .travel-tabs {
        display: flex; margin-bottom: 36px;
        justify-content: space-between;
    }
    @media (min-width: 30rem) {
        .travel-tabs {
            display: flex; gap: 16px; justify-content: center;
        }
    }
    .tab-btn {
        padding: 10px 24px;
        border-radius: 100px;
        border: 1.5px solid var(--sand);
        background: transparent;
        font-family: 'Jost', sans-serif;
        font-size: 1.125rem;
        font-weight: 400;
        letter-spacing: 0.75px;
        cursor: pointer;
        color: var(--charcoal);
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    /* .tab-btn i { font-size: 24px; } */
    .tab-btn.active {
        background: var(--charcoal);
        border-color: var(--charcoal);
        color: white;
    }
    .travel-panel { display: none; }
    .travel-panel.active { display: block; }
    .travel-panel-inner { display: grid; gap: 2rem; }
    @media (min-width: 40rem) {
        .travel-panel-inner {
            gap: 2rem;
            grid-template-columns: repeat(2, 1fr);
            align-items: start;
        }
    }
    .route-steps { display: grid; gap: 16px; }
    .route-step {
        display: grid; gap: 8px;
        /* padding: 20px 24px; */
        background: var(--white);
        border-radius: 14px;
        border: 1px solid var(--cream);
        transition: box-shadow 0.2s;
    }
    .route-step > .row {
        display: grid; grid-template-columns: 40px 1fr;
        /* display: grid; grid-template-columns: 40px 1fr auto; */
        gap: 16px; align-items: center;
        /* gap: 16px; align-items: center; */
        padding: 12px 24px;
        /* background: var(--white);
        border-radius: 14px;
        border: 1px solid var(--cream);
        transition: box-shadow 0.2s; */
    }
    .route-step > .row:first-child {
        padding: 12px 24px 0px;
    }
    .route-step > .row:last-child {
        padding: 0px 24px 12px;
    }
    .route-step > .row > i {
        font-size: 24px;
    }
    .route-step > .row > i.icon-small {
        font-size: 16px;
        margin-left: 6px;
    }
    .route-step > .row > span {
        font-size: 0.875rem;
        letter-spacing: 0.5px;
        opacity: 0.8;
    }
    .route-step > .row > span.point {
        font-size: 1rem;
        font-weight: 400;
    }
    .route-step > .row.path {
        border-top: 1px solid var(--cream);
        border-bottom: 1px solid var(--cream);
        /* background: var(--ivory); */
        /* padding: 1rem 0; */
        /* height: 40px;
        width: 1px;
        margin-left: 13px;
        background: var(--charcoal);
        opacity: 0.15; */
    }
    /* .route-step {
        display: grid; grid-template-columns: 40
    } */
    .route-step:hover { box-shadow: 0 4px 20px rgba(42,37,32,0.08); }
    .step-num-circle {
        width: 36px; height: 36px; border-radius: 50%;
        background: var(--gold-pale);
        display: flex; align-items: center; justify-content: center;
        font-family: 'Cormorant Garamond', serif;
        font-size: 18px; color: var(--gold);
    }
    .step-body strong {
        display: block;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 3px;
    }
    .step-desc {
        display: grid;
        gap: 0.125rem;
    }
    .step-body span {
        line-height: 1.5;
    }
    .step-body span.step-main {
        color: var(--chocolate);
        font-size: 16px;
        font-weight: 400;
    }
    .step-body span.step-sub {
        color: var(--charcoal);
        font-size: 14px;
        /* font-style: italic; */
    }
    .step-duration {
        font-family: 'Cormorant Garamond', serif;
        font-size: 20px; color: var(--gold);
        white-space: nowrap; text-align: right;
    }
    .step-duration small {
        display: block;
        font-family: 'Jost', sans-serif;
        font-size: 14px;
        letter-spacing: 0.5px;
        color: var(--charcoal);
    }

    .route-connector {
        width: 2px; height: 16px; background: var(--sand);
        margin: 0 0 0 38px;
    }

    .travel-tip {
        /* margin-top: 24px; */
        padding: 0 8px;
        /* background: var(--ocean-pale); */
        /* border-radius: 14px; */
        /* border-left: 3px solid var(--ocean); */
        display: grid; gap: 12px; align-items: flex-start;
    }
    /* .tip-icon { font-size: 20px; } */
    .travel-tip { font-size: 16px; color: var(--ocean-dark); }
    .travel-tip li {
        font-size: 15px; line-height: 1.6; letter-spacing: 0.5px;
        margin-inline: 16px 12px;
        margin-block: 4px;
    }
    .travel-tip strong { font-weight: 500; }
</style>