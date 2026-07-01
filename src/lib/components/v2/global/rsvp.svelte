<script>
    // import { PUBLIC_SUPABASE_API_URL, PUBLIC_ANON_PUBLIC_KEY } from "$env/static/public";
    import { supabase } from "../../../../supabaseClient";
    import FieldRadio from "./field-radio.svelte";
    import FieldText from "./field-text.svelte";
    import AddGuest from "./add-guest.svelte";
    import RemoveGuest from "./remove-guest.svelte";
    import { X } from "@lucide/svelte";

    let {
        show = $bindable()
    } = $props();

    let dialog = $state();
    let first_name = $state('');
    let last_name = $state('');
    let attending = $state(true);
    let restrictions = $state('')
    let attendees = $state([]);
    let addGuestModal = $state();
    let confirmModal = $state();
    let editAttendeeForm = $state(false);

    $effect(() => {
        if (show) {
            dialog.showModal();
        }
    });

    let newGuest = $state({
        first_name: '',
        last_name: '',
        restrictions: ''
    });

    const addAttendee = () => {
        if (!newGuest.first_name.trim() || !newGuest.last_name.trim()) {
            alert('Please enter the attendee\'s first and last name.');
            return;
        }

        if (editAttendeeForm === false) {
            attendees.push(newGuest);
        }
        
        addGuestModal.close();
    };

    const clearData = () => {
        newGuest = {
            first_name: '',
            last_name: '',
            restrictions: ''
        };
    };

    const editGuest = (index) => {
        editAttendeeForm = true;
        newGuest = attendees[index];
        addGuestModal.showModal();
    };

    const getRandomString = (length = 12) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';

        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            counter++;
        }

        return result;
    };

    const removeGuest = (index) => {
        attendees.splice(index, 1);
    };

    const showAddGuest = () => {
        editAttendeeForm = false;
        clearData();
        addGuestModal.showModal();
    };

    const sanitizeAttendee = (options) => {
        return {
            first_name: options.first_name,
            last_name: options.last_name,
            restrictions: options.restrictions,
        };
    };

    const submitForm = async () => {
        // console.log(`firstName = ${first_name}\nlastName = ${last_name}\nattending = ${attending}\nrestrictions = ${restrictions}`);
        if (!first_name || !last_name) {
            alert('Please fill out your first and last name.');
            return;
        }

        // console.log('attendees', attendees);
        let key = getRandomString();
        let finalAttendees = attendees.map(a => {
            return {
                ...sanitizeAttendee(a),
                key,
                attending
            };
        });
        // attendees.forEach(a => {
        //     a.key = key;
        //     a.attending = attending;
        // });
        finalAttendees.unshift({
            ...sanitizeAttendee({ first_name, last_name, restrictions }),
            attending,
            key
        });
        // console.log('finalAttendees', finalAttendees);

        first_name = '';
        last_name = '';
        attending = true;
        restrictions = '';
        attendees = [];

        try {
            // const response = await fetch(`${PUBLIC_SUPABASE_API_URL}/mns_attendees`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'apikey': PUBLIC_ANON_PUBLIC_KEY,
            //         'Authorization': `Bearer ${PUBLIC_ANON_PUBLIC_KEY}`,
            //         'Prefer': 'return=minimal',
            //     },
            //     body: JSON.stringify(finalAttendees)
            // });
            // console.log(`code = ${response.code}`, response);

            // if (!response.ok) {
            //     alert('Oops... something went wrong!');
            //     return;
            // }
            const { error } = await supabase.from('mns_attendees').insert(finalAttendees);
            console.log('rsvp error', error);

            alert('Thank you for confirming!');
            dialog.close();
        }
        catch (ex) {
            alert(`An error has occurred: ${ex.toString()}`);
        }
        // if (response.status === 200) {
            // confirmModal.showDialog();
        // }
        // const jsonResponse = await response.json();
    };
</script>

<!-- {#if isOpen} -->
<dialog class="rsvp" bind:this={dialog} onclose={() => show = false}>
    <div class="content">
        <div class="heading">
            <h2>réspondez s'il vous plaît</h2>
            <button type="button" onclick={() => dialog.close()}>
                <X />
            </button>
        </div>
        <div class="subheading">
            <p>We can't wait to celebrate with you!</p>
        </div>
        <div class="form">
            <div class="split">
                <FieldText label="First Name" id="firstName" bind:value={first_name} />
                <FieldText label="Last Name" id="lastName" bind:value={last_name} />
            </div>
            <div class="attending selection">
                <span>Will you be attending?</span>
                <div class="options">
                    <FieldRadio label="See you there!" id="attendingYes" name="attending" value={true} bind:group={attending} />
                    <FieldRadio label="Celebrating from afar..." id="attendingNo" name="attending" value={false} bind:group={attending} />
                </div>
            </div>
            <!-- <div class="restrictions selection">
                <span>Any dietary restrictions or food requests?</span>
                <div class="options">
                    <FieldRadio label="Anything goes!" id="restrictionsNone" value="" bind:group={restrictions} />
                    <FieldRadio label="Keto" id="restrictionsKeto" value="keto" bind:group={restrictions} />
                    <FieldRadio label="Vegetarian" id="restrictionsVegtr" value="vegetarian" bind:group={restrictions} />
                    <FieldRadio label="Vegan" id="restrictionsVegan" value="vegan" bind:group={restrictions} />
                    <FieldRadio label="Carnivore" id="restrictionsCarni" value="carnivore" bind:group={restrictions} />
                    <FieldRadio label="Paleo" id="restrictionsPaleo" value="paleo" bind:group={restrictions} />
                </div>
            </div> -->
            <FieldText label="Please indicate any dietary restrictions and allergies." id="restrictions" bind:value={restrictions} />
            <div class="guests">
                <span>You may add up to two (2) additional attendees</span>

                {#each attendees as guest, i}
                    <RemoveGuest firstName={guest.first_name} lastName={guest.last_name}
                        onremove={() => removeGuest(i)} onedit={() => editGuest(i)} />
                {/each}

                {#if attendees.length < 2}
                    <AddGuest onclick={showAddGuest} />
                {/if}
            </div>
        </div>

        <button type="submit" class="submitter" onclick={submitForm}>Submit Form</button>
    </div>
</dialog>

<dialog class="add-guest" bind:this={addGuestModal}>
    <div class="content">
        <div class="heading">
            <h3>Add attendee</h3>
            <button type="button" onclick={() => addGuestModal.close()}>
                <X />
            </button>
        </div>
        <div class="form">
            <div class="col">
                <FieldText label="First Name" id="firstName" bind:value={newGuest.first_name} />
                <FieldText label="Last Name" id="lastName" bind:value={newGuest.last_name} />
            </div>
            <FieldText label="Dietary restrictions and allergies." id="restrictions" bind:value={newGuest.restrictions} />
        </div>

        <button type="button" class="submitter" onclick={addAttendee}>Add Attendee</button>
    </div>
</dialog>
<!-- {/if} -->

<dialog class="confirm" bind:this={confirmModal}>
    Thank you!
</dialog>

<style>
    dialog {
        margin: auto;
        min-height: 25rem;
        width: 100%;
        max-width: 30rem;
        background-color: var(--ivory);
        border: 0;
        border-left: 4px solid var(--terracota);
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        z-index: 9999;
    }
    dialog.rsvp::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
    }
    dialog > .content {
        gap: 0;
        display: grid;
        grid-template-rows: auto 1fr;
    }
    .content > .heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        padding: 1rem 1.5rem 0;
    }
    .heading > h2 {
        color: var(--chocolate);
        font-size: 2.65rem;
        font-weight: 500;
        padding-bottom: 0.25rem;
    }
    .heading > button {
        width: 50px;
        height: 50px;
        background-color: var(--transparent);
        color: var(--chocolate);
        border: 0;
        cursor: pointer;
        z-index: 10000;
        right: 0;
        top: 0;
    }
    .subheading {
        padding: 0 1.5rem 0;
    }
    dialog > .content > .form {
        padding: 1rem 2rem 2rem;
        margin-top: 1rem;
        display: grid;
        gap: 1.5rem;
        overflow-y: auto;
    }
    .selection > span,
    .guests > span {
        /* border: 1px solid red; */
        color: var(--espresso);
        display: block;
        font-size: 0.875rem;
        font-weight: 400;
        padding-bottom: 0.25rem;
        opacity: 0.6;
    }
    dialog > .content > .form > .split,
    .attending > .options {
        /* .restrictions > .options { */
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 0.75rem;
    }
    dialog > .content > .form > .col {
        display: grid;
        gap: 0.75rem;
    }
    .form > .guests {
        display: grid;
        gap: 0.25rem;
    }
    dialog > .content > button.submitter {
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
