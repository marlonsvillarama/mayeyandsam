<script>
    import { createBookingData } from "$lib/data/store.svelte";
    import BookingName from "./booking-name.svelte";
    import BookingRoom from "./booking-room.svelte";
    import BookingSummary from "./booking-summary.svelte";
    import BookingTransfer from "./booking-transfer.svelte";
    import Spinner from "./spinner.svelte";

    let {
        oncloseclick
    } = $props();

    const bookingData = createBookingData();
    let isSubmitting = $state(false);
    // let isSubmitted = $state(false);
    let blurbText = $derived(
        isSubmitting === false ?
            'Please submit your details to avail our block room rate.' :
            'Please wait a moment...'
    )

    const submitForm = async () => {
        // alert('submitting form...');
        isSubmitting = true;

        const API_URL = 'https://23quo4pddg.execute-api.ap-southeast-2.amazonaws.com/default/mayeyandsam';
        let postResp = await fetch(API_URL, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(bookingData.data)
        });
        console.log('postResp', postResp);
        bookingData.submitted = true;
        isSubmitting = false;
    };

    const MAX_STEP = 4;
    // let step = $state(1);
    const nextPage = (next = true) => {
        if (next === false) {
            bookingData.step = bookingData.step - 1;
            return;
        }

        if (bookingData.step === MAX_STEP) {
            submitForm();
            return;
        }
        if (validateStep() === false) {
            alert('Please fill out all required fields.')
            return;
        }

        bookingData.step = bookingData.step + 1;
        console.log('nextPage', `new step = ${bookingData.step}`);
    };

    // let hasTransfers = $state(false);
    // const toggleTransfer = (show = true) => {
    //     hasTransfers = show;
    // };

    const checkValues = (list) => {
        let result = true;

        for (let i = 0, count = list.length; i < count; i++) {
            let val = bookingData[list[i]];
            console.log(`list[${i}] = "${val}"`);
            if (!val.toString().trim() || val.toString() === '0') return false;
        }

        return result;
    };

    const validateStep = () => {
        switch(bookingData.step) {
            case 1: {
                return checkValues([
                    'name',
                    'email',
                    'checkIn',
                    'checkOut'
                ]); 
            }
            case 2: {
                return checkValues([
                    'roomType',
                    'roomCount',
                    'guestCount'
                ]); 
            }
            case 3: {
                if (bookingData.withTransfer) {
                    return checkValues([
                        'transferCount'
                    ]); 
                }
                break;
            }
            default: return true;
        }
    }
</script>

<form method="dialog">
    <div class="header">
        <h2>Ceremony and reception will be at</h2>
        <span class="title">Movenpick Boracay</span>
        <p class="blurb">
            {blurbText}
        </p>
    </div>
    
    {#if isSubmitting}
        <Spinner />
    {:else}
        {#if bookingData.submitted}
            <div class="thankyou">
                <p>Thank you for submitting your reservation! We look forward to having you there.</p><br/>
                <p>With love,</p>
                <p>Marielle & Sam</p>
            </div>
        {:else}
            <div id="form-fields">
                {#if bookingData.step === 1}
                    <BookingName />
                {:else if bookingData.step === 2}
                    <BookingRoom />
                {:else if bookingData.step === 3}
                    <BookingTransfer />
                {:else if bookingData.step === 4}
                    <BookingSummary />
                {/if}

                <div class={bookingData.step > 1 ? 'buttons' : ''}>
                    {#if bookingData.step > 1}
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
                        {bookingData.step < MAX_STEP ? 'Next' : 'Confirm'}
                    </button>
                </div>
            </div>
        {/if}
    {/if}
</form>

<button id="cancel_avail" title="Close" onclick={oncloseclick}>
    <img src="/images/close.svg" alt="Close">
</button>

<style>
form {
    background-color: antiquewhite;
    border-radius: 1rem;
    color: #333;
    padding: 2rem 1.5rem;
    position: relative;
    text-align: center;
}
.header {
    border-bottom: 1px solid #cecece;
    /* padding-bottom: clamp(1.25rem, calc(1.25rem + 1vw), 2.5rem); */
    text-align: center;
}
.header > h2 {
    font-size: clamp(0.875rem, calc(0.875rem + 1vw), 1rem);
    font-weight: 400;
    margin-bottom: 1rem;
}
.header > .title {
    color: var(--chocolate);
    font-family: "Eyesome", cursive;
    font-size: clamp(1.25rem, calc(1.25rem + 3vw), 4rem);
    font-weight: 700;
    /* margin-top: 0.5rem; */
    /* border: 1px solid red; */
}
.blurb {
    color: #333;
    font-size: clamp(0.875rem, calc(0.875rem + 1vw), 0.875rem);
    font-weight: 200;
    opacity: 0.8;
    padding: clamp(1.25rem, calc(1.25rem + 1vw), 2rem) 0.5rem 0.5rem;
    text-align: center;
    /* border: 1px solid red; */
}

/* #form-fields {
    display: grid;
    gap: 1.625rem;
    margin-top: 1rem;
    // border: 1px solid green;
}

.fields {
    display: grid;
    gap: 1.625rem;
}
.field {
    display: grid;
    gap: 0.125rem;
    font-size: clamp(0.875rem, calc(0.875rem + 1vw), 1rem);
    text-align: left;
}
.field > label {
    font-weight: 200;
    padding-left: 4px;
}
.field > input[type=date],
.field > input[type=email],
.field > input[type=number],
.field > input[type=text],
select,
.field > textarea {
    background-color: white;
    border: 1px solid var(--almond);
    border-radius: 0.5rem;
    color: #666;
    outline: 0;
    padding: 0.625rem 1rem;
}
.field > input[type=date] {
    width: 12rem;
}
.field > input[type=number] {
    width: 7rem;
    text-align: center;
}
.field > textarea {
    height: 100px;
    overflow-y: auto;
    resize: none;
}
.field > a {
    padding-left: 4px;
    color: var(--chocolate);
    font-size: 0.875rem;
} */

/* .yesno {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 1rem 0;
}
.field-cb {
    position: relative;
    display: flex;
    justify-content: center;
}
.field-cb > label {
    background-color: white;
    // border: 1px solid var(--almond);
    border-radius: 0.5rem;
    color: #666;
    outline: 0;
    padding: 0.625rem 1rem;
    cursor: pointer;
}
.field-cb > input {
    position: absolute;
    top: -9999px;
    left: -9999px;
}
.field-cb > input:checked + label {
    background-color: var(--chocolate);
    color: white;
} */

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

.thankyou {
    margin-top: 1rem;
}

#cancel_avail {
    background-color: transparent;
    border: 0px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
}
#cancel_avail img {
    background-color: antiquewhite;
    border-radius: 50%;
    height: 100%;
    width: 100%;
}

</style>