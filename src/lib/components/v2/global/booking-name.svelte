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
    .fields {
        gap: 0.75rem;
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
        width: 100%;
    }
    .dates {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }
    @media (min-width: 640px) {
        .dates {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
