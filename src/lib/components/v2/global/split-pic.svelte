<script>
    let {
        script = "",
        headline = "",
        pic = "",
        text = ""
    } = $props();

    let backgroundImage = $derived(`background-image:url("${pic}");`);
</script>

<div class="with-love">
    <div class="wrapper">
        <div class="pic" style={backgroundImage}></div>
        <div class="details">
            {#if script}
                <span class="script">{script}</span>
            {/if}

            <h2>{headline}</h2>
            <p>{text}</p>
            <!-- <p>Thank you for being part of our story.</p> -->
        </div>
    </div>
</div>

<style>
    .with-love {
        margin-top: 4rem;
    }
    .with-love > .wrapper {
        /* border: 1px solid red; */
        display: grid;
        /* grid-template-columns: 1fr 1fr; */
    }
    .with-love > .wrapper > .pic {
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 25rem;
        border-radius: 1.5rem;
        /* border-top-left-radius: 1.5rem; */
        /* border-top-right-radius: 1.5rem; */
        order: 2;
    }
    .with-love > .wrapper > .details {
        /* border: 1px solid red; */
        padding: 0 0 3rem;
        order: 1;
    }
    @media (min-width: 60rem) {
        .with-love > .wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .with-love > .wrapper > .pic {
            /* background-size: 150%; */
            order: 1;
        }
        .with-love > .wrapper > .details {
            order: 2;
            padding: 3rem 2rem 2rem 3rem;
        }
    }
    .details > h2 {
        margin-bottom: 2rem;
    }
    .details > p {
        color: var(--chocolate);
    }
    .details > p:not(:last-child) {
        margin-bottom: 2rem;
    }
</style>
