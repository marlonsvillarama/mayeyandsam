<script>
    const rates = { cad: 1, php: 41.5, usd: 0.73 };
    const sym = { cad: 'CAD $', php: '₱', usd: 'USD $' };

    const calgaryData = {
        flights:    { cad: [1600, 2800] },
        hotel:      { cad: [400, 1200] },
        food:       { cad: [30, 80], suffix: '/day' },
        activities: { cad: [80, 200] },
        transport:  { cad: [30, 60] },
        misc:       { text: { cad: 'No visa required', php: 'No visa required', usd: 'No visa required' } },
    };
    const manilaData = {
        flights:    { php: [2500, 5500] },
        hotel:      { php: [3000, 12000] },
        food:       { php: [800, 2000], suffix: '/day' },
        activities: { php: [1000, 4000] },
        transport:  { php: [600, 1200] },
        misc:       { php: [200, 300] },
    };
    const mf = manilaData.flights;

    const manilaTotal = { php: [12000, 28000] };
    const calgaryTotal = { cad: [2400, 4800] };

    let currency = $state('cad');

    let hotel = $state('');
    let food = $state('');
    let activities = $state('');
    let transport = $state('');
    let misc = $state('');

    function fmt(amount, curr) {
        const v = (amount * rates[currency] / 100) * 100;
        return sym[currency] + v.toLocaleString();
    }

    function phpTo(arr) {
        return sym[currency] + Math.round(arr[0]/rates.php*rates[currency]/100)*100 + ' – ' + sym[currency] + Math.round(arr[1]/rates.php*rates[currency]/100)*100;
    }
</script>

<section class="budget-section" id="budget">
  <div class="budget-inner">
    <span class="section-tag reveal">Travel Budget</span>
    <h2 class="reveal">Estimated costs<br>per <em>person.</em></h2>
    <p class="section-intro reveal">Below are estimated costs to help you plan your trip. Prices vary by season, booking timing, and preference. December is peak season — book early!</p>

    <!-- <div class="budget-toggle reveal">
      <button class="currency-btn {currency === 'cad' ? 'active' : ''}" onclick={() => currency = 'cad'}>🇨🇦 CAD</button>
      <button class="currency-btn {currency === 'php' ? 'active' : ''}" onclick={() => currency = 'php'}>🇵🇭 PHP</button>
    </div> -->

    <!-- FROM CALGARY -->
    <h3 style="font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:300;margin-bottom:20px;color:var(--brown)" class="reveal">From Calgary, Canada</h3>
    <div class="budget-grid" id="budget-calgary">
      <div class="budget-card reveal">
        <div class="budget-card-icon">✈️</div>
        <div class="budget-card-label">International Flights</div>
        <div class="budget-card-range" id="bc-flights">{fmt(calgaryData.flights.cad[0],'cad') + ' – ' + fmt(calgaryData.flights.cad[1],'cad')}</div>
        <div class="budget-card-sub">Round-trip YYC–MNL + MNL–MPH</div>
      </div>
      <div class="budget-card reveal">
        <div class="budget-card-icon">🏨</div>
        <div class="budget-card-label">Accommodation (5 nights)</div>
        <div class="budget-card-range" id="bc-hotel">{fmt(calgaryData.hotel.cad[0], currency) + ' – ' + fmt(calgaryData.hotel.cad[1], currency)}</div>
        <div class="budget-card-sub">Guesthouses to beachfront resorts</div>
      </div>
      <div class="budget-card reveal">
        <div class="budget-card-icon">🍽️</div>
        <div class="budget-card-label">Food & Drinks</div>
        <div class="budget-card-range" id="bc-food">{fmt(calgaryData.food.cad[0], currency) + ' – ' + fmt(calgaryData.food.cad[1], currency)}/day</div>
        <div class="budget-card-sub">Budget to mid-range dining</div>
      </div>
      <div class="budget-card reveal">
        <div class="budget-card-icon">⛵</div>
        <div class="budget-card-label">Activities</div>
        <div class="budget-card-range" id="bc-activities">{fmt(calgaryData.activities.cad[0], currency) + ' – ' + fmt(calgaryData.activities.cad[1], currency)}</div>
        <div class="budget-card-sub">Island hop, water sports, tours</div>
      </div>
      <div class="budget-card reveal">
        <div class="budget-card-icon">🛳️</div>
        <div class="budget-card-label">Local Transport</div>
        <div class="budget-card-range" id="bc-transport">{fmt(calgaryData.transport.cad[0], currency) + ' – ' + fmt(calgaryData.transport.cad[1], currency)}</div>
        <div class="budget-card-sub">Boats, e-trikes, buses</div>
      </div>
      <div class="budget-card reveal">
        <div class="budget-card-icon">🛂</div>
        <div class="budget-card-label">Visa & Misc Fees</div>
        <div class="budget-card-range" id="bc-misc">No visa required</div>
        <div class="budget-card-sub">Canadians get 30-day visa-free entry</div>
      </div>
    </div>
    <div class="budget-total reveal" style="margin-bottom:56px">
      <div>
        <div class="total-label">Estimated Total — Calgary Guest</div>
        <div class="total-amount" id="total-calgary">{fmt(calgaryTotal.cad[0], currency) + ' – ' + fmt(calgaryTotal.cad[1], currency)}</div>
      </div>
      <p class="budget-note">Includes flights, 5 nights accommodation, meals, activities, and local transport. Book early for the best rates!</p>
    </div>

    <!-- FROM MANILA -->
    <h3 style="font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:300;margin-bottom:20px;color:var(--brown)" class="reveal">From Manila, Philippines</h3>
    <div class="budget-grid">
      <div class="budget-card reveal">
        <div class="budget-card-icon">✈️</div>
        <div class="budget-card-label">Domestic Flights</div>
        <div class="budget-card-range" id="bm-flights">₱2,500–₱5,500</div>
        <div class="budget-card-sub">Round-trip MNL–MPH or MNL–KLO</div>
      </div>
      <div class="budget-card reveal">
        <div class="budget-card-icon">🏨</div>
        <div class="budget-card-label">Accommodation (3 nights)</div>
        <div class="budget-card-range" id="bm-hotel">₱3,000–₱12,000</div>
        <div class="budget-card-sub">Fan rooms to boutique resorts</div>
      </div>
      <div class="budget-card reveal">
        <div class="budget-card-icon">🍽️</div>
        <div class="budget-card-label">Food & Drinks</div>
        <div class="budget-card-range" id="bm-food">₱800–₱2,000/day</div>
        <div class="budget-card-sub">Budget to mid-range dining</div>
      </div>
      <div class="budget-card reveal">
        <div class="budget-card-icon">⛵</div>
        <div class="budget-card-label">Activities</div>
        <div class="budget-card-range" id="bm-activities">₱1,000–₱4,000</div>
        <div class="budget-card-sub">Island hop, water sports, tours</div>
      </div>
      <div class="budget-card reveal">
        <div class="budget-card-icon">🛳️</div>
        <div class="budget-card-label">Local Transport</div>
        <div class="budget-card-range" id="bm-transport">₱600–₱1,200</div>
        <div class="budget-card-sub">Boat fees, e-trikes, terminals</div>
      </div>
      <div class="budget-card reveal">
        <div class="budget-card-icon">📋</div>
        <div class="budget-card-label">Env. & Terminal Fees</div>
        <div class="budget-card-range" id="bm-misc">~₱200–₱300</div>
        <div class="budget-card-sub">Boracay entrance & jetty fees</div>
      </div>
    </div>
    <div class="budget-total reveal">
      <div>
        <div class="total-label">Estimated Total — Manila Guest</div>
        <div class="total-amount" id="total-manila">₱12,000–₱28,000</div>
      </div>
      <p class="budget-note">Includes domestic flights, 3 nights accommodation, meals, activities, and local transport. Budget range for approx. 4-day trip.</p>
    </div>
  </div>
</section>

<style>
.budget-section { background: var(--cream); }
.budget-inner { max-width: 1000px; margin: 0 auto; }

.budget-toggle {
  display: flex; gap: 8px; margin-bottom: 40px;
}
.currency-btn {
  padding: 8px 20px;
  border-radius: 100px;
  border: 1.5px solid var(--sand);
  background: transparent;
  font-family: 'Jost', sans-serif;
  font-size: 12px; font-weight: 400;
  letter-spacing: 1px; text-transform: uppercase;
  cursor: pointer;
  color: var(--muted);
  transition: all 0.2s;
}
.currency-btn.active {
  background: var(--charcoal);
  border-color: var(--charcoal);
  color: white;
}

.budget-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px; margin-bottom: 24px;
}
.budget-card {
  background: var(--white);
  border-radius: 16px;
  padding: 24px 22px;
  border: 1px solid var(--sand);
}
.budget-card-icon { font-size: 24px; margin-bottom: 12px; }
.budget-card-label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--muted); margin-bottom: 8px; }
.budget-card-range {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px; font-weight: 300; color: var(--charcoal);
  line-height: 1.1;
}
.budget-card-sub { font-size: 12px; color: var(--muted); margin-top: 6px; }

.budget-total {
  background: var(--charcoal);
  border-radius: 16px;
  padding: 28px 32px;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 16px;
}
.total-label { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 6px; }
.total-amount {
  font-family: 'Cormorant Garamond', serif;
  font-size: 42px; font-weight: 300; color: var(--gold-light);
}
.budget-note { font-size: 13px; color: rgba(255,255,255,0.45); max-width: 320px; line-height: 1.6; }
</style>