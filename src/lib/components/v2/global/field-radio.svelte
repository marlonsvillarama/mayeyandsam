<script>
    let {
        id = "fld-id",
        group = $bindable(),
        label = "Label",
        name = "fld-grp",
        value = ""
    } = $props();
</script>

<div class="field">
    <input type="radio" {name} {id} {value} bind:group={group} />
    <label for={id}>{label}</label>
</div>

<style>
    .field {
        position: relative;
    }
    .field > label {
        background-color: transparent;
        border: 3px dotted var(--cream);
        border-radius: 100px;
        color: var(--chocolate);
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0.5px;
        padding: 0.5rem 0;
        text-align: center;
        transition: all 100ms ease-in-out;
    }
    .field > input[type=radio] {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }
    .field > input[type=radio]:checked + label {
        background-color: var(--cream);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        /* color: var(--ivory); */
    }
    .field > input[type=radio]:not(:checked) + label:hover {
        /* background-color: var(--cream); */
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
</style>
