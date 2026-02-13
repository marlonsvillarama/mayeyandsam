<script>
    import { createBookingData } from "$lib/data/store.svelte";

    const bookingData = createBookingData();
</script>

<div class="summary">
    <div class="row">
        <span class="label">Guest</span>
        <p class="value">
            {bookingData.name}<br/>
            {bookingData.email}
        </p>
    </div>
    <div class="row">
        <span class="label">Room</span>
        <p class="value">
            {bookingData.roomName} ({bookingData.roomCount})<br/>
            For {bookingData.guestCount} guest{bookingData.guestCount > 1 ? 's' : ''}<br/>
            <span class="transfers">
            {#if bookingData.withTransfer}
                Transfers requested: {bookingData.transferCount}
            {:else}
                No transfers
            {/if}
            </span>
        </p>
    </div>
    <div class="row">
        <span class="label">Special Requests</span>
        <p class="value">
            {bookingData.requests}
        </p>
    </div>
</div>

<style>
    .summary {
        display: grid;
        gap: 1rem;
    }
    .row {
        display: grid;
        gap: 0;
        align-items: center;
        justify-content: left;
        /* border: 1px solid red; */
    }
    .row > p,
    .row > span {
        text-align: left;
        font-size: 1rem;
    }
    .label {
        font-weight: 500;
        color: var(--chocolate);
        opacity: 0.8;
    }
    .value {
        margin-left: 1.5rem;
    }
    .transfers {
        margin-top: 0.5rem;
    }
</style>