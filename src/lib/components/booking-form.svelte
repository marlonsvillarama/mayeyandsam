<script>
    let {
        oncloseclick
    } = $props();
    
    let isSubmitting = $state(false);
    let blurbText = $derived(
        isSubmitting === false ?
            'Please submit your details to avail our block room rate.' :
            'Please wait a moment...'
    )

    let step = $state(1);

    const nextPage = (next = true) => {
        if (next === false) {
            step = step - 1;
            return;
        }

        step = step + 1;
        console.log('nextPage', `step = ${step}`);
    };

    // const toggleSubmit = () => {
    //     isSubmitting = !isSubmitting;
    // };
</script>

<form method="dialog">
    <div class="header">
        <h2>Ceremony and reception will be at</h2>
        <span class="title">Movenpick Boracay</span>
    </div>
    <p class="blurb">
        {blurbText}
    </p>
    <div id="form-fields">
        <div class="fields">
        {#if step === 1}
            <div class="field">
                <label for="your_email">Name</label>
                <input type="text" id="your_name" name="your_name" maxlength="80" required>
            </div>
            <div class="field">
                <label for="your_name">Email address</label>
                <input type="email" id="your_email" name="your_email" pattern="/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/" required>
            </div>
            <div class="field">
                <label for="check_in">Check in</label>
                <input type="date" id="check_in" name="check_in" required>
            </div>
            <div class="field">
                <label for="check_in">Check out</label>
                <input type="date" id="check_out" name="check_out" required>
            </div>
        {:else if step === 2}
            <div class="field">
                <label for="room_type">Room type</label>
                <select id="room_type" name="room_type" required>
                    <optgroup label="Rooms">
                        <option value="1">Classic Queen</option>
                        <option value="2">Classic Twin</option>
                        <option value="3">Superior King</option>
                        <option value="4">Superior Twin</option>
                        <option value="5">Family Room</option>
                        <option value="6">Premium King</option>
                    </optgroup>
                    <optgroup label="Suites">
                        <option value="7">Junior Suite King</option>
                        <option value="8">Premium Suite King</option>
                        <option value="9">Sol Marina Beach Suite</option>
                    </optgroup>
                    <optgroup label="Villa">
                        <option value="10">Sol Marina Villa</option>
                    </optgroup>
                </select>
                <a href="https://movenpick.accor.com/en/asia/philippines/boracay/resort-spa-boracay.html" target="_blank">
                    Click here to see and compare rooms.
                </a>
            </div>
            <div class="grid-col-2">
                <div class="field">
                    <label for="room_count">No. of rooms</label>
                    <input type="number" id="room_count" name="room_count" min="1" max="10" value="1" required />
                </div>
                <div class="field">
                    <label for="guest_count">No. of guests</label>
                    <input type="number" id="guest_count" name="guest_count" min="1" max="100" value="1" required />
                </div>
            </div>
            <div class="field">
                <label for="requests">Special requests</label>
                <textarea id="requests" name="requests"></textarea>
            </div>
        {:else if step === 3}
            <div class="field">
                <span>Do you want Movenpick to take care of the roundtrip land and sea transfers?</span>
                <div class="grid-col-2 yesno">
                    <div class="field-cb">
                        <label for="transfer-yes">YES</label>
                        <input type="radio" id="transfer-yes" name="transfer" value="yes">
                    </div>
                    <div class="field-cb">
                        <label for="transfer-no">NO</label>
                        <input type="radio" id="transfer-no" name="transfer" value="no">
                    </div>
                </div>
            </div>
        {/if}
        </div>

        <div class={step > 1 ? 'buttons' : ''}>
            {#if step > 1}
            <button onclick={(e) => {
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
                Next
            </button>
        </div>
    </div>
    <!-- <div class="spinner">
        <div class="s">M & S</div>
    </div> -->
    <div id="form-loader" class="lds-roller hidden">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</form>

<button id="cancel_avail" onclick={oncloseclick}>
    <img src="/images/close.svg">
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
    padding-bottom: clamp(1.25rem, calc(1.25rem + 1vw), 2.5rem);
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
    font-size: clamp(0.875rem, calc(0.875rem + 1vw), 1rem);
    font-weight: 200;
    opacity: 0.8;
    padding: 0.5rem 0.75rem;
    text-align: center;
    /* border: 1px solid red; */
}

#form-fields {
    display: grid;
    gap: 1.625rem;
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
    height: 10rem;
    overflow-y: auto;
    resize: none;
}
.field > a {
    padding-left: 4px;
    color: var(--chocolate);
    font-size: 0.875rem;
}
.yesno {
    margin-top: 1rem;
}
.field-cb {
    position: relative;
    display: flex;
    justify-content: center;
}
.field-cb > label {
    background-color: white;
    border: 1px solid var(--almond);
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

.buttons {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1rem;
}

button {
    background-color: var(--chocolate);
    border: 0px solid #ccc;
    border-radius: 0.5rem;
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