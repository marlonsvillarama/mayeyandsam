<script>
    // import { createRSVPData } from "$lib/data/rsvp.svelte";
    import FieldRadio from "./field-radio.svelte";
    import FieldText from "./field-text.svelte";
    import { X } from "@lucide/svelte";

    let {
        show = $bindable()
    } = $props();

    let dialog = $state();

    $effect(() => {
        if (show) {
            dialog.showModal();
        }
    });

    let firstName = $state('');
    let lastName = $state('');
    let attending = $state(true);
</script>

<!-- {#if isOpen} -->
<dialog class="rsvp" bind:this={dialog} onclose={() => show = false}>
    <div class="content">
        <div class="heading">
            <h2>R. S. V. P.</h2>
            <button type="button" onclick={() => dialog.close()}>
                <X />
            </button>
        </div>
        <div class="subheading">
            <p>We can't wait to celebrate with you!</p>
        </div>
        <div class="form">
            <FieldText label="First Name" id="firstName" bind:value={firstName} />
            <FieldText label="Last Name" id="lastName" bind:value={lastName} />
            <div class="attending selection">
                <span>Will you be attending?</span>
                <div class="options">
                    <FieldRadio label="See you at the beach!" id="attendingYes" name="attending" bind:checked={attending} />
                    <FieldRadio label="Celebrating from afar" id="attendingNo" name="attending" bind:checked={attending} />
                </div>
            </div>
            <div class="restrictions selection">
                <span>Any dietary restrictions or food requests?</span>
                <div class="options">
                    <FieldRadio label="Anything goes!" id="restrictionsNone" name="restrictions" checked={true} />
                    <FieldRadio label="Keto" id="restrictionsKeto" name="restrictions" />
                    <FieldRadio label="Vegetarian" id="restrictionsVegtr" name="restrictions" />
                    <FieldRadio label="Vegan" id="restrictionsVegan" name="restrictions" />
                    <FieldRadio label="Carnivore" id="restrictionsCarni" name="restrictions" />
                    <FieldRadio label="Paleo" id="restrictionsPaleo" name="restrictions" />
                </div>
            </div>
        </div>

        <button type="button" class="submitter" onclick={submitForm}>Submit Form</button>
    </div>
</dialog>
<!-- {/if} -->

<style>
    .rsvp {
        position: fixed;
        /* width: 100%; */
        margin: auto;
        /* top: 1rem; */
        /* left: 1rem; */
        /* top: 0.5rem;
        left: 0.5rem;
        right: calc(100vw - 0.5rem);
        bottom: 0.5rem; */
        height: 100%;
        width: 100%;
        max-width: 30rem;
        background-color: var(--ivory);
        border: 0;
        border-left: 4px solid var(--terracota);
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        z-index: 9999;
    }
    .rsvp > .content {
        gap: 0;
        display: grid;
        grid-template-rows: auto 1fr;
    }
    /* .rsvp > .wrapper { */
        /* border: 1px solid red; */
        /* padding: 0.5rem 1rem; */
    /* } */
    .content > .heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        /* overflow: visible; */
        /* border: 1px solid red; */
        padding: 1rem 1.5rem 0;
    }
    .heading > h2 {
        color: var(--chocolate);
        font-family: "Thesignature";
        font-size: 3rem;
        font-weight: 600;
    }
    .heading > button {
        /* position: absolute; */
        width: 50px;
        height: 50px;
        background-color: var(--transparent);
        color: var(--chocolate);
        border: 0;
        /* border: 1px solid red; */
        /* border-radius: 50px; */
        cursor: pointer;
        z-index: 10000;
        right: 0;
        top: 0;
        /* transform: translateX(30%) translateY(-30%); */
    }
    .subheading {
        /* border: 1px solid red; */
        padding: 0 1.5rem 0;
    }
    .rsvp > .content > .form {
        /* border: 1px solid red; */
        padding: 1rem 2rem 2rem;
        margin-top: 1rem;
        display: grid;
        gap: 2rem;
        overflow-y: auto;
    }
    /* .attending { */
        /* border: 1px solid red; */
        /* display: grid; */
        /* gap: 0.25rem; */
    /* } */
    .selection > span {
        /* border: 1px solid red; */
        color: var(--espresso);
        display: block;
        font-size: 1rem;
        font-weight: 500;
        padding-bottom: 0.25rem;
        opacity: 0.6;
    }
    .attending > .options,
    .restrictions > .options {
        /* border: 1px solid red; */
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 0.75rem;
        /* margin: 1rem 0; */
    }
    .rsvp > .content > button.submitter {
        background: var(--terracota);
        border: 0;
        border-radius: 0.5rem;
        color: var(--ivory);
        cursor: pointer;
        margin: 1rem 2rem 3rem;
        padding: 1rem 2rem;
        text-align: center;
    }
</style>
