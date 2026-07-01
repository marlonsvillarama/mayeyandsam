<script>
    let {
        step
    } = $props();

    const nextPage = (next = true) => {
        if (next === false) {
            step = step - 1;
            return;
        }

        if (step === MAX_STEP) { return; }

        step = step + 1;
        console.log('nextPage', `step = ${step}`);
    };
</script>

<div class={step > 1 ? 'buttons' : ''}>
    {#if step > 1}
    <button class="btn-back" onclick={(e) => {
        e.preventDefault();
        nextPage(false);
    }}>
        Back
    </button>
    {/if}
    <button onclick={(e) => {
        e.preventDefault();
        nextPage();
    }}>
        {step < MAX_STEP ? 'Next' : 'Confirm'}
    </button>
</div>

<style>
    .buttons {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 1rem;
    }

    button {
        background-color: var(--chocolate);
        border: 2px solid var(--chocolate);
        border-radius: 0.5rem;
        cursor: pointer;
        color: white;
        /* font-size: clamp(1.125rem, calc(1.125rem + 1vw), 1.25rem); */
        font-size: clamp(0.875rem, calc(0.875rem + 1vw), 1rem);
        font-weight: 500;
        letter-spacing: 2px;
        /* margin: 1.25rem auto 0; */
        padding: 0.75rem;
        text-align: center;
        text-transform: uppercase;
        width: 100%;
        transition: all 100ms ease-in-out;
    }

    button:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .btn-back {
        background-color: white;
        border-color: var(--almond);
        color: var(--chocolate);
    }
</style>