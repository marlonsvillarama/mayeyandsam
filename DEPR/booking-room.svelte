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

<style></style>
