<script>
</script>

<section class="venue" id="venue">
    <div class="venue-inner">
        <div class="venue-visual reveal">
            <div class="venue-card">
                <div class="venue-scene"></div>
                <div class="venue-overlay"></div>
                <div class="venue-info">
                    <h3>White Beach, Boracay</h3>
                    <p>Aklan Province · Philippines</p>
                </div>
            </div>
            <div class="venue-badge">
                <span>27</span>
                <span>Dec</span>
            </div>
        </div>

        <div>
            <span class="section-tag reveal">The Wedding</span>
            <h2 class="reveal">A celebration<br>in <em>paradise.</em></h2>
            <!-- <div class="divider reveal"><div class="divider-line"></div><span class="divider-icon">✦</span><div class="divider-line"></div></div> -->

            <div class="venue-details">
                <div class="detail-row reveal">
                    <!-- <span class="detail-icon"><📅></span> -->
                    <i class="ph-fill ph-calendar detail-icon"></i>
                    <div class="detail-text">
                        <strong>Wedding Date</strong>
                        <span>Sunday, December 27, 2026<br>Ceremony begins at 5:00 PM</span>
                    </div>
                </div>
                <div class="detail-row reveal">
                    <!-- <span class="detail-icon">📍</span> -->
                    <i class="ph-fill ph-map-pin detail-icon"></i>
                    <div class="detail-text">
                        <strong>Location</strong>
                        <span>White Beach, Boracay Island<br>Malay, Aklan, Philippines 5608</span>
                    </div>
                </div>
                <div class="detail-row reveal">
                    <!-- <span class="detail-icon">🌅</span> -->
                    <i class="ph-fill ph-sun-horizon detail-icon"></i>
                    <div class="detail-text">
                        <strong>Ceremony & Reception</strong>
                        <span>Beachfront ceremony followed by a sunset dinner reception</span>
                    </div>
                </div>
                <div class="detail-row reveal">
                    <!-- <span class="detail-icon">👗</span> -->
                    <i class="ph-fill ph-dress detail-icon"></i>
                    <div class="detail-text">
                        <strong>Dress Code</strong>
                        <span>Tropical formal — light fabrics welcome.<br>Ladies: floral or pastel · Gents: barong or linen</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .venue {
        background: var(--white);
    }
    .venue-inner {
        max-width: 1100px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
    }
    .venue-visual {
        position: relative;
    }
    .venue-card {
        background: var(--charcoal);
        /* border: 1px solid red; */
        border-radius: 4px 40px 4px 40px;
        overflow: hidden;
        aspect-ratio: 4/5;
        display: flex; align-items: flex-end;
        position: relative;
    }
    .venue-scene {
        position: absolute; inset: 0;
        background-image: url(/images/boracay_01.jpg);
        background-position: center;
        background-size: cover;
        /* background: linear-gradient(180deg,
            #1a3a5a 0%,
            #2a5878 20%,
            #3a7898 40%,
            #5ab8c8 55%,
            #7ad8e8 65%,
            #a8e8d8 72%,
            #d8f0e0 78%,
            #f0f8e8 82%,
            #e8e0b8 88%,
            #d8d0a0 100%
        ); */
        /* z-index: 10; */
    }
    .venue-scene::before {
        content: '';
        position: absolute;
        bottom: 18%; left: 0; right: 0; height: 2px;
        /* background: linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.6) 70%, transparent 90%); */
        border-radius: 50%;
    }
    .venue-overlay {
        position: absolute; inset: 0;
        /* background: linear-gradient(180deg, transparent 50%, rgba(20,15,10,0.85) 100%); */
    }
    .venue-info {
        position: relative; z-index: 2;
        padding: 32px;
    }
    .venue-info h3 {
        font-family: 'Cormorant Garamond', serif;
        font-size: 32px;
        font-weight: 300;
        font-style: italic;
        color: var(--chocolate);
        margin-bottom: 8px;
    }
    .venue-info p {
        font-size: 14px;
        font-weight: 400;
        /* color: rgba(255,255,255,0.6); */
        color: var(--charcoal);
        letter-spacing: 1px;
    }
    .venue-badge {
        position: absolute;
        top: -16px; right: -16px;
        width: 80px; height: 80px;
        border-radius: 50%;
        background: var(--gold);
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        box-shadow: 0 4px 20px rgba(197,163,90,0.4);
    }
    .venue-badge span:first-child {
        font-family: 'Cormorant Garamond', serif;
        font-size: 26px;
        font-weight: 300;
        color: white;
        line-height: 1;
    }
    .venue-badge span:last-child {
        font-size: 9px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: rgba(255,255,255,0.8);
    }

    .venue-details {
        display: grid;
        gap: 20px;
        margin-top: 2rem;
    }
    .detail-row {
        display: flex; gap: 16px; align-items: flex-start;
        padding: 20px;
        background: var(--ivory);
        border-radius: 12px;
        border-left: 3px solid var(--gold);
    }
    .detail-icon {
        font-size: 24px;
        margin-top: 2px;
    }
    .detail-text strong {
        display: block;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
    }
    .detail-text span {
        font-size: 14px;
        color: var(--muted);
        line-height: 1.5;
    }
</style>