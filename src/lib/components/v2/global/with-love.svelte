<script></script>

<div class="with-love">
    <div class="wrapper">
        <div class="kiss"></div>
        <div class="details">
            <span class="script">With love,</span>
            <h2>Sam & Marielle</h2>
            <p>We are so grateful to have you in our lives and even more excited to celebrate this special weekend with you.</p>
            <p>Thank you for being part of our story.</p>
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
        grid-template-columns: 1fr 1fr;
    }
    .with-love > .wrapper > .kiss {
        background-image: url("/images/marielle_and_sam_07.jpg");
        background-size: 150%;
        background-position: center;
        width: 100%;
        height: 25rem;
        border-top-left-radius: 1.5rem;
        border-top-right-radius: 1.5rem;
        /* transform: scale(2); */
    }
    .with-love > .wrapper > .details {
        /* border: 1px solid red; */
        padding: 3rem 2rem 2rem 3rem;
    }
    .details > h2 {
        margin-bottom: 3rem;
    }
    .details > p {
        color: var(--chocolate);
    }
    .details > p:not(:last-child) {
        margin-bottom: 2rem;
    }
</style>
