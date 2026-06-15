<script></script>

<section class="todo-section" id="explore">
    <div style="max-width:1100px;margin:0 auto">
        <span class="section-tag reveal">Explore</span>
        <h2 class="reveal" style="color:white">Things to do<br>before the <em style="color:var(--gold-light)">big day.</em></h2>
        <p class="section-intro reveal">Arrive early and make the most of paradise. Boracay is packed with adventures and relaxation for every kind of guest.</p>
        <div class="todo-grid">
            <div class="todo-card reveal">
                <span class="todo-emoji">🏄</span>
                <h3>Water Sports</h3>
                <p>Kitesurfing, parasailing, windsurfing, paddleboarding, and banana boat rides are all available along White Beach and Bulabog Beach.</p>
                <span class="todo-tag">Adventure</span>
            </div>
            <div class="todo-card reveal">
                <span class="todo-emoji">🤿</span>
                <h3>Island Hopping & Diving</h3>
                <p>Snorkel the vibrant coral reefs of Crocodile Island or dive the WWII-era Yapak Wall. Island hopping tours depart daily from the beach.</p>
                <span class="todo-tag">Nature</span>
            </div>
            <div class="todo-card reveal">
                <span class="todo-emoji">🌅</span>
                <h3>Sunset Sailing</h3>
                <p>Board a traditional paraw (outrigger sailboat) for a magical golden hour cruise along White Beach — a Boracay signature experience.</p>
                <span class="todo-tag">Romantic</span>
            </div>
            <div class="todo-card reveal">
                <span class="todo-emoji">🍹</span>
                <h3>D'Mall & Beach Bars</h3>
                <p>Explore D'Mall, the island's lively shopping and dining hub. Enjoy fresh seafood, mango shakes, and cocktails with sand between your toes.</p>
                <span class="todo-tag">Food & Drink</span>
            </div>
            <div class="todo-card reveal">
                <span class="todo-emoji">💆</span>
                <h3>Spa & Massage</h3>
                <p>Indulge in an affordable beachside massage or visit one of the island's wellness spas for a full relaxation treatment before the festivities.</p>
                <span class="todo-tag">Relaxation</span>
            </div>
            <div class="todo-card reveal">
                <span class="todo-emoji">🌊</span>
                <h3>Puka Shell Beach</h3>
                <p>Head north to Puka Shell Beach for a quieter, more rustic stretch of white sand away from the main tourist strip. Stunning and peaceful.</p>
                <span class="todo-tag">Hidden Gem</span>
            </div>
            <div class="todo-card reveal">
                <span class="todo-emoji">🪩</span>
                <h3>Nightlife</h3>
                <p>Boracay's fire dancers, beach parties, and clubs come alive after dark. Epic Bar and Bom Bom Beach Club are festive seasonal favourites.</p>
                <span class="todo-tag">Nightlife</span>
            </div>
            <div class="todo-card reveal">
                <span class="todo-emoji">🏔️</span>
                <h3>Ariel's Point</h3>
                <p>A full-day cliff diving and snorkelling excursion that includes all-you-can-eat BBQ and unlimited drinks on a remote island. A must-do.</p>
                <span class="todo-tag">Day Trip</span>
            </div>
        </div>
    </div>
</section>

<style>
.todo-section { background: var(--charcoal); }
.todo-section .section-tag { color: var(--gold-light); }
.todo-section h2 { color: var(--white); }
.todo-section .section-intro { color: rgba(255,255,255,0.5); }

.todo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  max-width: 1100px; margin: 0 auto;
}
.todo-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 20px;
  padding: 28px 24px;
  transition: background 0.25s, transform 0.2s;
  cursor: default;
}
.todo-card:hover {
  background: rgba(255,255,255,0.08);
  transform: translateY(-4px);
}
.todo-emoji { font-size: 32px; margin-bottom: 16px; display: block; }
.todo-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px; font-weight: 400; color: var(--white);
  margin-bottom: 10px;
}
.todo-card p { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.65; }
.todo-tag {
  display: inline-block;
  margin-top: 14px;
  font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--gold);
  border: 1px solid rgba(197,163,90,0.4);
  border-radius: 100px;
  padding: 3px 12px;
}
</style>