<script>
    import FaqItem from "./faq-item.svelte";
</script>

<div class="topic-group">
    <div class="topic-label">Getting to Boracay</div>

    <FaqItem label="What is the Mövenpick Resort like?">
        Mövenpick Resort & Spa Boracay is a luxury beachfront resort at the quieter <strong>Station 0</strong> end of White Beach — the most serene and uncrowded stretch of the island. It has lush tropical gardens, stunning ocean views, beautiful pools, and world-class facilities. It's a genuinely breathtaking setting for a wedding and we feel incredibly lucky to be celebrating there.
    </FaqItem>

    <FaqItem label="I've never done a flight this long — any tips?">
        Long haul flights can feel daunting if you haven't done one before, but they're very manageable. A few things that genuinely help: wear layers and bring a travel pillow and eye mask (the plane gets cold), download shows and music before you board, stay hydrated and avoid too much alcohol in the air, and try to sleep when it's nighttime at your destination to ease the jet lag. Most flights from Calgary to Manila route through a hub like Tokyo, Seoul, or Hong Kong — it's a long journey but the excitement of what's waiting at the other end makes it fly by (pun intended).
    </FaqItem>

    <FaqItem label="How do I actually get to Boracay once I land in Manila?">
        You'll need to catch a connecting flight from Manila to <strong>Caticlan Airport (MPH)</strong> — this is the closest airport to Boracay and takes about an hour. Because Boracay is an island, getting there also involves a short land and sea transfer: a quick drive from the airport to the port, then a <strong>bangka (outrigger boat)</strong> ride of roughly 15 minutes across to the island. It sounds like a lot but it's genuinely fun and a big part of arriving in Boracay. Your hotel can arrange the port transfer for you, so just reach out to them ahead of your arrival and they'll sort it.
    </FaqItem>

    <div class="faq-item">
        <button class="faq-q">Do I need a visa to visit the Philippines? <span class="faq-icon">+</span></button>
        <div class="faq-a"><div class="faq-a-inner">Most nationalities — including Canadian and Australian citizens — can enter the Philippines visa-free for up to 30 days. That said, requirements can change, so we'd recommend double-checking with the Philippine embassy or consulate for your country well ahead of travel, just to be safe.</div></div>
    </div>

    <div class="faq-item">
        <button class="faq-q">When should I plan to arrive? <span class="faq-icon">+</span></button>
        <div class="faq-a"><div class="faq-a-inner">We'd suggest arriving by <strong>December 25 or 26</strong> so you have time to settle in, unpack, and actually enjoy the island before the Welcome Party kicks things off. Arriving the day before is always better than rushing in on the morning — you'll thank yourself for the buffer, especially after such a long journey.</div></div>
    </div>

    <div class="faq-item">
        <button class="faq-q">What about jet lag — how bad is it? <span class="faq-icon">+</span></button>
        <div class="faq-a"><div class="faq-a-inner">Boracay is roughly 15–17 hours ahead of Calgary time, so jet lag is real and worth planning for. The best approach is to start shifting your sleep schedule a few days before you leave, get as much sleep on the plane as you can, and then try to stay awake until local bedtime when you arrive. Morning sunlight and a swim in the ocean does wonders. Most people feel much better by day two.</div></div>
    </div>
</div>

<!-- GROUP: The Island -->
<div class="topic-group">
    <div class="topic-label">Life on the Island</div>

    <div class="faq-item">
        <button class="faq-q">What is Boracay actually like? <span class="faq-icon">+</span></button>
        <div class="faq-a"><div class="faq-a-inner">Boracay is a small island in the central Philippines, famous for its powdery white sand beaches and crystal-clear turquoise water. It's lively enough to feel festive (especially around Christmas) but not overwhelming. The main beach strip — White Beach — has restaurants, bars, shops, and watersports all along it, while the quieter northern end where the Movenpick sits is more serene and peaceful. It's genuinely one of the most beautiful places we've ever been to, and we can't wait to share it with you.</div></div>
    </div>

    <div class="faq-item">
        <button class="faq-q">Is it safe to drink the tap water? <span class="faq-icon">+</span></button>
        <div class="faq-a"><div class="faq-a-inner">Stick to bottled or filtered water — tap water in the Philippines is not safe for drinking. The good news is bottled water is everywhere and very cheap, and your hotel will almost certainly provide some in your room.</div></div>
    </div>

    <div class="faq-item">
        <button class="faq-q">What currency do I need and can I use cards? <span class="faq-icon">+</span></button>
        <div class="faq-a"><div class="faq-a-inner">The currency is the <strong>Philippine Peso (PHP)</strong>. There are ATMs on the island, but we'd recommend exchanging some cash at the airport in Manila on your way through — exchange rates are fair there and you'll have it sorted before you arrive. Larger establishments like the Movenpick and most sit-down restaurants accept credit cards, but smaller street stalls and tricycles are cash only.</div></div>
    </div>

    <div class="faq-item">
        <button class="faq-q">Where should I stay? <span class="faq-icon">+</span></button>
        <div class="faq-a"><div class="faq-a-inner">You don't need to stay at the Movenpick (where the wedding is), though it's obviously a lovely option if it suits your budget. Boracay has a great range of accommodation at all price points — from boutique guesthouses to beachfront resorts — and the island is small enough that wherever you stay, you'll only ever be a short tricycle ride from the action. Check the accommodations page of this website for some suggestions.</div></div>
    </div>

    <div class="faq-item">
        <button class="faq-q">What is the Movenpick Resort like? <span class="faq-icon">+</span></button>
        <div class="faq-a"><div class="faq-a-inner">Movenpick Resort & Spa Boracay is a luxury beachfront resort at the quieter <strong>Station 0</strong> end of White Beach — the most serene and uncrowded stretch of the island. It has lush tropical gardens, stunning ocean views, beautiful pools, and world-class facilities. It's a genuinely breathtaking setting for a wedding and we feel incredibly lucky to be celebrating there.</div></div>
    </div>
</div>

<style>
    .topic-group {
        /* border: 1px solid red; */
        /* margin: 0 8px 40px; */
        display: grid;
        gap: 1rem;
    }

    .topic-label {
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: .25em;
        text-transform: uppercase;
        color: var(--gold-light);
        border-bottom: 1.5px solid var(--brown);
        padding-bottom: 0.5rem;
        /* margin-bottom: 14px; */
        /* display: flex;
        align-items: center; */
        /* gap: 10px; */
    }
    .topic-label::after {
        content: '';
        flex: 1;
        height: 1px;
        background: var(--divider);
    }
</style>