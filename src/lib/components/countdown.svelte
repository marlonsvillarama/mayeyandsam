<script>
    import { onMount } from "svelte";

    let days = $state(0);
    let hours = $state(0);
    let minutes = $state(0);
    let seconds = $state(0);

    function updateCountdown() {
        const wed = new Date('2026-12-27T17:00:00+08:00');
        const now = new Date();
        const diff = wed - now;

        if (diff <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
            // document.getElementById('cd-days').textContent = '0';
            // document.getElementById('cd-hours').textContent = '0';
            // document.getElementById('cd-mins').textContent = '0';
            // document.getElementById('cd-secs').textContent = '0';
            return;
        }

        days = Math.floor(diff / 86400000);
        hours = Math.floor((diff % 86400000) / 3600000);
        minutes = Math.floor((diff % 3600000) / 60000);
        seconds = Math.floor((diff % 60000) / 1000);
        // document.getElementById('cd-days').textContent = d;
        // document.getElementById('cd-hours').textContent = String(h).padStart(2,'0');
        // document.getElementById('cd-mins').textContent = String(m).padStart(2,'0');
        // document.getElementById('cd-secs').textContent = String(s).padStart(2,'0');
    }

    onMount(() => {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    });
</script>

<div class="countdown-bar" id="countdown">
    <div class="count-item"><span class="count-num" id="cd-days">{days}</span><span class="count-label">Days</span></div>
    <span class="count-sep">·</span>
    <div class="count-item"><span class="count-num" id="cd-hours">{hours.toString().padStart(2, '0')}</span><span class="count-label">Hours</span></div>
    <span class="count-sep">·</span>
    <div class="count-item"><span class="count-num" id="cd-mins">{minutes.toString().padStart(2, '0')}</span><span class="count-label">Minutes</span></div>
    <span class="count-sep">·</span>
    <div class="count-item"><span class="count-num" id="cd-secs">{seconds.toString().padStart(2, '0')}</span><span class="count-label">Seconds</span></div>
</div>

<style>
    .countdown-bar {
        background: var(--charcoal);
        padding: 28px 24px;
        display: flex; justify-content: center; align-items: center; gap: 48px;
        flex-wrap: wrap;
    }
    .count-item {
        text-align: center;
    }
    .count-num {
        font-family: 'Cormorant Garamond', serif;
        font-size: 48px;
        font-weight: 300;
        color: var(--gold-light);
        line-height: 1;
        display: block;
    }
    .count-label {
        font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase;
        color: rgba(255,255,255,0.45);
        margin-top: 4px;
    }
    .count-sep {
        font-size: 36px;
        color: rgba(197,163,90,0.3);
        font-family: 'Cormorant Garamond', serif;
    }
</style>