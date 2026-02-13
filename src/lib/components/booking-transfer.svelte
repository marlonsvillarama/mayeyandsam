<script>
    import { createBookingData } from "$lib/data/store.svelte";

    let bookingData = createBookingData();

    let hasTransfers = $state(bookingData.withTransfer);
    const toggleTransfer = (show = true) => {
        hasTransfers = show;
        bookingData.withTransfer = show;
    };
    console.log('transfer', bookingData.withTransfer);
</script>

<div class="fields">
    <div class="field">
        <span>Do you want Movenpick to take care of the roundtrip land and sea transfers?</span>
        <div class="yesno">
            <div class="field-cb">
                <input type="radio" id="transfer-yes" name="transfer" value={true} onchange={() => toggleTransfer()} bind:group={bookingData.withTransfer}>
                <label for="transfer-yes">YES</label>
            </div>
            <div class="field-cb">
                <input type="radio" id="transfer-no" name="transfer" value={false} onchange={() => toggleTransfer(false)} bind:group={bookingData.withTransfer}>
                <label for="transfer-no">NO</label>
            </div>
        </div>
        <div class="field { hasTransfers === true ? '' : 'hidden'}">
            <label for="transfer_count">No. of transfers</label>
            <input type="number" id="transfer_count" name="transfer_count" min="1" max="10" value="1" />
        </div>
    </div>
</div>

<style>
    .yesno {
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
        /* border: 1px solid var(--almond); */
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
    }
    </style>
