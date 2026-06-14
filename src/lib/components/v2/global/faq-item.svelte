<script>
    import { slide } from "svelte/transition";
    import { Plus, X } from "@lucide/svelte";
    let {
        question = "Question...",
        answer = "Answer..."
    } = $props();

    let isOpen = $state(false);

    const fadeSlide = (node, options) => {
        const slideTrans = slide(node, options);
        return {
            duration: options.duration,
            css: t => `
                ${slideTrans.css(t)}
                opacity: ${t}
            `
        };
    };
</script>

<div class="faq-item">
    <button type="button" class="question" onclick={() => isOpen = !isOpen}>
        {#if isOpen}
            <X size={24} />
        {:else}
            <Plus size={24} />
        {/if}
        {question}
    </button>

    {#if isOpen}
    <div class="answer" transition:fadeSlide={{duration: 150}}>{@html answer}</div>
    {/if}
</div>

<style>
    .faq-item:not(:last-child) {
        border-bottom: 1.5px dotted var(--chocolate);
        margin-bottom: 1rem;
        padding-bottom: 1rem;
    }
    .question {
        align-items:flex-start;
        background-color: transparent;
        border: 0;
        border-radius: 0.5rem;
        color: var(--chocolate);
        cursor: pointer;
        display: grid;
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(0.875rem, calc(0.875rem + 2vw), 1.5rem);
        font-weight: 500;
        gap: 0.5rem;
        grid-template-columns: auto 1fr;
        /* justify-content: space-between; */
        outline: 0;
        padding: 0.5rem 0.75rem;
        transition: background-color 100ms ease-in-out;
        text-align: left;
        width: 100%;
    }
    .question:hover {
        background-color: var(--sand);
    }
    .answer {
        padding: 0.5rem 0.75rem;
        display: grid;
        gap: 0.75rem;
    }
    :global(.answer li) {
        margin-inline-start: 2rem;
        line-height: 2rem;
    }

    /* :global(.answer > p) {
    } */
</style>
