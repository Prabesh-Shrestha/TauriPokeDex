<script>
    let search = "";
    export let page;
    export let pokemon_selected;
    import { getData } from "./apihandler.js";
    let url = "https://pokeapi.co/api/v2/pokemon?limit=800";
    const handle_select = (name) => {
        page = "detail";
        pokemon_selected = String(name);
    };
</script>

<main>
    <input type="text" bind:value={search} />
    <div class="result">
        {#if search != ""}
            <p>Search results for: {search}</p>
        {/if}
    </div>
    <div class="grid-container">
        {#await getData(url) then pokes}
            {#each pokes.results as poke, i}
                {#if search != "" && String(poke.name)
                        .toUpperCase()
                        .startsWith(search.toUpperCase())}
                    <div class="grid-item">
                        <button on:click={() => handle_select(poke.name)}>
                            <div>
                                {poke.name}
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                                        i + 1
                                    }.png`}
                                    alt=""
                                />
                            </div>
                        </button>
                    </div>
                {:else if search == ""}
                    <div class="grid-item">
                        <button on:click={() => handle_select(poke.name)}>
                            <div>
                                {poke.name}
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                                        i + 1
                                    }.png`}
                                    alt=""
                                />
                            </div>
                        </button>
                    </div>
                {/if}
            {/each}
        {/await}
    </div>
</main>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
    }
    .grid-item {
        background-color: rgba(214, 214, 214, 0.8);
        padding: 50px;
        margin: 5px;
        font-size: 30px;
        text-align: center;
    }
    .result {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input {
        width: 100%;
        background-color: #bdbdbd;
        height: 100%;
        border: 1px solid black;
        font-size: 30px;
        text-align: center;
    }
</style>
