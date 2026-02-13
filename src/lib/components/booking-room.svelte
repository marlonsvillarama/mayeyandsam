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
        <a href="https://movenpick.accor.com/en/asia/philippines/boracay/resort-spa-boracay.html" target="_blank">
            Click here to see and compare rooms.
        </a>
    </div>
    <div class="grid-col-2">
        <div class="field">
            <label for="room_count">No. of rooms</label>
            <input type="number" id="room_count" name="room_count" min="1" max="10" required bind:value={bookingData.roomCount} />
        </div>
        <div class="field">
            <label for="guest_count">No. of guests</label>
            <input type="number" id="guest_count" name="guest_count" min="1" max="100" required bind:value={bookingData.guestCount} />
        </div>
    </div>
    <div class="field">
        <label for="requests">Special requests</label>
        <textarea id="requests" name="requests" bind:value={bookingData.requests}></textarea>
    </div>
</div>

<style></style>
