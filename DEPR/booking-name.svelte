<script>
    import { createBookingData } from "$lib/data/store.svelte";

    let bookingData = createBookingData();
</script>

<div class="fields">
    <div class="field">
        <label for="your_email">Name</label>
        <input type="text" id="your_name" name="your_name" maxlength="80" required bind:value={bookingData.name}>
    </div>
    <div class="field">
        <label for="your_name">Email address</label>
        <input type="email" id="your_email" name="your_email" pattern="/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/" required bind:value={bookingData.email}>
    </div>
    <div class="dates">
        <div class="field">
            <label for="check_in">Check in</label>
            <input type="date" id="check_in" name="check_in" required bind:value={bookingData.checkIn}>
        </div>
        <div class="field">
            <label for="check_in">Check out</label>
            <input type="date" id="check_out" name="check_out" required bind:value={bookingData.checkOut}>
        </div>
    </div>
</div>

<style>
    .dates {
        display: grid;
        gap: 1.625rem;
    }
    @media (min-width: 640px) {
        .dates {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
