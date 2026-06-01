<script>
    let {
        question = 'Question goes here...',
        answer = 'Answer goes here...',
        preview = ''
    } = $props();

    let isOpen = $state(false);
</script>

<div class="faq-item">
    <span class="faq-q">{question}</span>

    <div class="faq-a">
        {@html preview}
    </div>

    {#if isOpen || !!preview === false}
        <div class="faq-a-inner">
            {@html answer}
        </div>
    {/if}

    {#if preview}
    <button class="faq-more" onclick={() => isOpen = !isOpen}>
        <span>{isOpen ? 'LESS' : 'MORE'}...</span>
    </button>
    {/if}
</div>

<style>
.faq-item {
    padding: 0 0.25rem 1rem;
}
.faq-item:not(:last-child) {
    border-bottom: 1.5px solid var(--sand);
}
/* .faq-label {
    align-items: flex-start;
    display: grid;
    grid-template-columns: 1.5rem auto;
    padding-bottom: 0.5rem;
} */
/* .faq-label i {
    font-size: 18px;
    margin-top: 2px;
} */

.faq-q {
    width: 100%;
    /* background: transparent; */
    /* border: none; */
    /* cursor: pointer; */
    /* text-align: left; */
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
    /* gap: 16px; */
    font-family: 'Cormorant Garamond', serif;
    /* font-size: 2.125rem; */
    font-size: clamp(1rem, calc(1rem + 2vw), 2.125rem);
    font-weight: 600;
    color: var(--charcoal);
    line-height: 1.125;
    transition: color .2s;
    margin-bottom: 0.5rem;
}
.faq-more {
    background: transparent;
    border: none;
    color: var(--chocolate);
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
}
.faq-more > span { padding-bottom: 0.25rem; }
.faq-more:hover > span {
    text-decoration: underline;
}
/* .faq-icon {
    transform: translateY(2px);
    border-radius: 50%;
    color: var(--gold);
    transition: transform 150ms;
} */

/* .faq-item.open .faq-icon { */
/* .faq-label.open > i { */
    /* transform: rotate(90deg) translateX(4px) translateY(2px); */
    /* background: var(--sky);
    border-color: var(--sky);
    color: #fff; */
/* } */
/* .emerald-panel .faq-item.open .faq-icon { background: var(--emerald); border-color: var(--emerald); } */

.faq-a {
    /* max-height: 0; */
    /* display: none; */
    /* overflow: hidden; */
    color: var(--chocolate);
    font-size: 1rem;
    transition: max-height .4s ease, padding .3s ease;
    padding: 0 1rem;
    /* border: 1px solid red; */
    /* display: grid; */
    /* grid-template-columns: 1.5rem auto; */
    /* border: 1px solid red; */
}

.faq-a-inner {
    /* padding-bottom: 20px; */
    font-size: 1rem;
    color: var(--chocolate);
    /* color: var(--text-muted); */
    line-height: 1.625;
    /* height: 0; */
    gap: 1rem;
    margin-top: 0.75rem;
    padding: 0 1rem;
    display: grid;
    /* display: none; */
    gap: 0.75rem;
}
:global(.faq-a-inner li > strong) {
    /* color: var(--charcoal); */
    font-size: 1.125rem;
    font-weight: 500;
}
:global(.faq-a-inner li) {
    margin-inline-start: 2rem;
}
:global(.faq-a-inner li:not(:last-child)) {
    margin-block-end: 0.25rem;
}
/* .faq-label.open + .faq-a > .faq-a-inner {
    border-top: 1.5px solid var(--chocolate);
    padding-top: 1rem;
    display: grid;
    gap: 1rem;
    letter-spacing: 0.5px;
} */

/* .faq-a-inner p > a {
    color: var(--gold);
    text-decoration: underline;
    text-underline-offset: 2px;
} */

/* .faq-a-inner strong {
    color: var(--text);
    font-weight: 500;
} */

/* .faq-item.open .faq-a { max-height: 800px; } */
</style>
