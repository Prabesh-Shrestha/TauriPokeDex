<script>
        let page = "main";
        let pokemon_selected;
        import MainPage from "./Main.svelte";
        import DetailsPage from "./Details.svelte";
</script>

<main>
        {#if page == "main"}
                <MainPage bind:page bind:pokemon_selected/>
        {:else if page == "detail"}
                <DetailsPage bind:page bind:pokemon_selected/>
        {/if}
</main>
