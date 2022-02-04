<script>
    import { apiData } from "../store/apicall";
    import Card from "../components/card.svelte";

    let searchTerm = "";
    let filteredData = [];

    $:{
        if(searchTerm){
            filteredData = $apiData.filter(item => item.data.name.toLowerCase().includes(searchTerm.toLowerCase()));

        }else{
            filteredData = [...$apiData];
        }
    }

</script>
<svelte:head>
    <title>احمد مهرابی</title>
</svelte:head>
<style>
    h1{
        color: red;
    }
</style>
<h1>سلام</h1>
<input bind:value={searchTerm} type="text" placeholder="search...">

<div class="flex gap-3 flex-wrap">
    {#each filteredData as data}

   <Card data={data} />

{/each}

</div>
