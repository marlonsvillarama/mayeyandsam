<script>
    export let data;
    console.log('list page data', data);
</script>

<div class="list-wrapper wrapper">
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
                <td>{row.first_name}</td>
                <td>{row.attending ? 'YES' : 'NO'}</td>
                <td>{row.restrictions}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .list-wrapper {
        margin-top: 1rem;
    }
    table.list {
        border: 0;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 0;
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
    table.list > tbody tr:nth-child(odd) > td {
        background-color: var(--white);
    }
</style>

