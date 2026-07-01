<script>
    import { createBookingData } from "$lib/data/store.svelte";

    let bookingData = createBookingData();
</script>

<div class="fields">
    <div class="field">
        <label for="room_type">Room type</label>
        <select id="room_type" name="room_type" required bind:value={bookingData.roomType}>
            {#each bookingData.allRoomTypes as roomType}
                <optgroup label={roomType.name}>
                    {#each roomType.list as r}
                        <option value={r.id}>{r.name}</option>
                    {/each}
                </optgroup>
            {/each}
        </select>
        <a class="compare" href="https://movenpick.accor.com/en/asia/philippines/boracay/resort-spa-boracay.html" target="_blank">
            Click here to see and compare rooms.
        </a>
    </div>
    <div class="split">
        <div class="field">
            <label for="room_count">No. of rooms</label>
            <select id="room_count" name="room_count" class="numeric" bind:value={bookingData.roomCount} required>
                {#each { length: 12 } as _, i}
                <option value={i+1}>{i+1}</option>
                {/each}
            </select>
        </div>
        <div class="field">
            <label for="guest_count">No. of guests</label>
            <select id="guest_count" name="guest_count" class="numeric" bind:value={bookingData.guestCount} required>
                {#each { length: 20 } as _, i}
                <option value={i+1}>{i+1}</option>
                {/each}
            </select>
        </div>
    </div>
    <div class="field">
        <label for="requests">Special requests (Optional)</label>
        <textarea id="requests" name="requests" bind:value={bookingData.requests}></textarea>
    </div>
</div>

<style>
    .fields {
        gap: 0.75rem;
    }
    .fields > .split {
        /* .restrictions > .options { */
        display: flex;
        /* grid-template-columns: 1fr 1fr; */
        align-items: center;
        gap: 0.75rem;
        justify-content: space-between;
    }
    .field {
        color: var(--espresso);
        font-size: 0.875rem;
        font-weight: 400;
    }
    .field > label {
        font-weight: 400;
        letter-spacing: 0.25px;
        opacity: 0.5;
    }
    .field > input[type=date],
    .field > input[type=text],
    .field > input[type=email] {
        letter-spacing: 0.25px;
        padding: 0.5rem 0.75rem;
    }
    a.compare {
        margin-left: 0.25rem;
    }
</style>
