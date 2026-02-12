<script>
    import BookingForm from "./booking-form.svelte";

    const closeDialog = () => {
        document.querySelector('dialog').close();
    };

    const showDialog = () => {
        document.querySelector('dialog').showModal();
    };
</script>

<div class="booknow">
    <button id="avail" onclick={showDialog}>
        <span>Boracay, Philippines</span>
        <img src="/images/airplane-takeoff.svg" alt="book">
    </button>
    <span>Click to request rooms at our special rate</span>
</div>

<dialog id="bookdlg">
    <BookingForm oncloseclick={closeDialog} />
</dialog>

<style>
.booknow {
    display: grid;
    gap: 0.5rem;
}
.booknow button {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    padding: clamp(0.375rem, calc(0.375rem + 1vw), 0.75rem) 1.5rem;
    color: var(--chocolate);
    background-color: var(--almond);
    border: 0;
    border-radius: 10rem;
    cursor: pointer;
    font-size: clamp(0.875rem, calc(0.875rem + 1vw), 1rem);
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0 auto;
}
.booknow button img {
    height: 1.5rem;
}
.booknow > span {
    /* font-size: clamp(0.875rem, calc(0.875rem + 1vw), 1.125rem); */
    font-size: clamp(0.875rem, calc(0.875rem + 1vw), 1rem);
    letter-spacing: 0.25px;
}

dialog {
    background-color: transparent;
    border: 0;
    display: relative;
    margin: auto;
    max-width: 50rem;
    padding: 1rem;
    width: 90%;
    transition: all 150ms ease-in-out;
}

dialog::backdrop {
    background-color: #999;
    opacity: 0.5;
}

</style>