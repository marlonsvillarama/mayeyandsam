<script>
    /** @type {import('./$types').PageProps} */
    import { Check, WheatOff } from "@lucide/svelte";
    import Anahaw from "$lib/components/v2/global/anahaw.svelte";
    import ListNav from "$lib/components/v2/global/list-nav.svelte";

    let { data } = $props();
    // console.log('list page data', data);

    let filter = $state('');
    let listRows = $derived.by(() => {
        if (filter === 'present') return data.rows.filter(r => r.attending === true);
        else if (filter === 'absent') return data.rows.filter(r => r.attending === false);
        else return data.rows;
    });
</script>

<div class="page-wrapper">
    <Anahaw fixed={true} />
    <ListNav />
    <div class="content wrapper">
        <div class="cards">
            {@render card("Responded", "all", data.rows.length)}
            {@render card("Attending", "present", data.rows.filter(r => r.attending === true).length)}
            {@render card("Won't Go", "absent", data.rows.filter(r => r.attending === false).length)}
        </div>
        
        <div class="list-wrapper">
            <div class="headers">
                <span class="guest">Guest</span>
                <!-- <span>Restrictions</span> -->
            </div>
            <div class="rows">
                {#each listRows as row}
                <div class="row guest">
                    <div class="name">
                        <span>{row.last_name}, {row.first_name}</span>
                        {#if row.attending}
                        <Check size={16} color="#382a20" />
                        {/if}
                    </div>

                    {#if row.restrictions}
                        <div class="restrictions">
                            <WheatOff size={16} color="#E8C4B4" />
                            <span class="rest">{row.restrictions}</span>
                        </div>
                    {/if}
                </div>
                {/each}
            </div>
        </div>
    </div>
</div>

{#snippet card(title, id, value)}
<div class="card">
    <input type="radio" id="card-{id}" name="card-filter" bind:group={filter}>
    <label for="card-{id}">
        <span class="value">{value}</span>
        <span class="title">{title}</span>
    </label>
</div>
{/snippet}

<!-- <div class="list-wrapper wrapper">
    <h2>Your Attendees</h2>
    <table class="list" cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Attending?</th>
                <th>Restrictions</th>
            </tr>
        </thead>
        <tbody>
            {#each data.rows as row}
            <tr>
                <td>{row.last_name}</td>
                <td class="fn">{row.first_name}</td>
                <td>{row.attending ? 'YES' : 'NO'}</td>
                <td>{row.restrictions}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div> -->

<style>
    .page-wrapper {
        position: relative;
    }
    .content {
        margin-top: 5rem;
        display: grid;
        padding: 0 1rem;
        /* margin: 0 auto; */
    }
    .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
    .card {
        position: relative;
    }
    .card > label {
        background-color: var(--cream);
        border: 0;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 4px;
        cursor: pointer;
        display: grid;
        padding: 1rem;
        gap: 0.5rem;
        /* gap: 0.25rem; */
        transition: all 100ms ease-in-out;
    }
    .card > label:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .card > input[type=radio] {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }
    .card > label > .title {
        color: var(--charcoal);
        font-size: 0.875rem;
        font-weight: 500;
        opacity: 0.7;
    }
    .card > label > .value {
        color: var(--espresso);
        font-size: 3rem;
        font-weight: 600;
        line-height: 2rem;
        /* border: 1px solid red; */
    }
    .card > input[type=radio]:checked + label {
        background-color: var(--espresso);
    }
    .card > input[type=radio]:checked + label > .title {
        color: var(--white);
        opacity: 0.8;
    }
    .card > input[type=radio]:checked + label > .value {
        color: var(--white);
    }
    .list-wrapper {
        margin-top: 1rem;
        /* border: 1px solid var(--espresso); */
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .list-wrapper > .headers {
        background-color: var(--espresso);
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        display: grid;
        align-items: center;
        grid-template-columns: 40% 1fr;
        /* justify-content: space-between; */
    }

    .list-wrapper > .rows > .row {
        display: grid;
        align-items: center;
        padding: 0.25rem 0.5rem;
        /* grid-template-columns: 40% 1fr; */
        /* justify-content: space-between; */
    }
    .headers > span {
        color: var(--white);
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0.25px;
        padding: 0.25rem 0.5rem;
    }
    .rows > .row:nth-child(odd) {
        background-color: var(--white);
    }
    .row > span {
        color: var(--espresso);
        font-size: 0.825rem;
        font-weight: 300;
        letter-spacing: 0.25px;
        /* padding: 0.25rem 0.5rem; */
    }
    .guest > .name,
    .guest > .restrictions {
        display: flex;
        align-items: center;
    }
    .guest > .name {
        font-size: 0.875rem;
        justify-content: space-between;
        letter-spacing: 0.25px;
    }
    .guest > .restrictions {
        gap: 0.5rem;
        margin-left: 2rem;
    }
    .restrictions > .rest {
        color: var(--rose);
        font-size: 0.75rem;
        letter-spacing: 0.25px;
    }
    
    .list-wrapper > h2 {
        margin-bottom: 0.5rem;
    }
    table.list {
        border: 0;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 0;
        margin: 0 auto;
        width: 100%;
    }
    table.list > thead th {
        background-color: var(--chocolate);
        color: var(--ivory);
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 1px;
        padding: 0.375rem 1rem;
        text-align: left;
        text-transform: uppercase;
    }
    table.list > thead th:first-child {
        border-top-left-radius: 0.5rem;
    }
    table.list > thead th:last-child {
        border-top-right-radius: 0.5rem;
    }
    table.list > tbody {
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }
    table.list td {
        padding: 0.375rem 1rem;
    }
    table.list td.fn {
        text-transform: capitalize;
    }
</style>

