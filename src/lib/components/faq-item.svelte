<script>
    let {
        question = 'Question goes here...',
        answer = 'Answer goes here...'
    } = $props();

    let isOpen = $state(false);
    let faqOpenClass = $derived(isOpen === true ? 'open' : '');

    const toggleOpen = () => {
        isOpen = !isOpen;
        console.log(`isOpen = ${isOpen}`);
    }
</script>

<div class="faq-item">
    <div class="faq-label {faqOpenClass}">
        <i class="ph ph-caret-right faq-icon"></i>
        <button class="faq-q" onclick={toggleOpen}>{question}</button>
    </div>
    <div class="faq-a {faqOpenClass}">
        <span></span>
        <div class="faq-a-inner">
            {@html answer}
        </div>
    </div>
</div>

<style>
.faq-item {
    /* border-bottom: 1px solid var(--primary); */
    margin-bottom: 1rem;
}

.faq-label {
    /* border-bottom: 1.5px solid var(--chocolate); */
    align-items: flex-start;
    display: grid;
    grid-template-columns: 1.5rem auto;
    /* gap: 0.75rem; */
    padding-bottom: 0.5rem;
    /* margin-bottom: 1rem; */
}
.faq-label i {
    font-size: 18px;
    margin-top: 2px;
}

.faq-q {
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--charcoal);
    line-height: 1.25;
    transition: color .2s;
}

.faq-q:hover { color: var(--gold); }
/* .panel.emerald-panel .faq-q:hover { color: var(--emerald); } */

.faq-icon {
    /* width: 22px; height: 22px; */
    transform: translateY(2px);
    border-radius: 50%;
    /* border: 1px solid var(--divider); */
    /* display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    font-size: .7rem; */
    /* color: var(--text-muted); */
    color: var(--gold);
    transition: transform 150ms;
}

/* .faq-item.open .faq-icon { */
.faq-label.open > i {
    transform: rotate(90deg) translateX(4px) translateY(2px);
    /* background: var(--sky);
    border-color: var(--sky);
    color: #fff; */
}
.emerald-panel .faq-item.open .faq-icon { background: var(--emerald); border-color: var(--emerald); }

.faq-a {
    /* max-height: 0; */
    /* display: none; */
    /* overflow: hidden; */
    transition: max-height .4s ease, padding .3s ease;
    display: grid;
    grid-template-columns: 1.5rem auto;
}

.faq-a-inner {
    padding-bottom: 20px;
    font-size: 1rem;
    color: var(--text-muted);
    line-height: 1.625;
    display: none;
    /* height: 0; */
    gap: 1rem;
}
.faq-label.open + .faq-a > .faq-a-inner {
    border-top: 1.5px solid var(--chocolate);
    padding-top: 1rem;
    display: grid;
    gap: 1rem;
    letter-spacing: 0.5px;
}

.faq-a-inner p > a {
    color: var(--gold);
    text-decoration: underline;
    text-underline-offset: 2px;
}

.faq-a-inner strong {
    color: var(--text);
    font-weight: 500;
}

.faq-item.open .faq-a { max-height: 800px; }
</style>