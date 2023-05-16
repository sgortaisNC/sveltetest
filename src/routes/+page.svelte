<script>
    import Square from "./square.svelte";
    let currentGuess = "";
    /**
	 * @type {any[]}
	 */
    let guesses = [];
    
    function guessing(){
        guesses = [...guesses, {
            nom: {
                value: currentGuess
            },
            sexe: {
                value: 'Masculin',
                valid: true,
            },
            role: {
                value: 'Top',
                valid: true,
            },
            region: {
                value: "Shurima",
                valid: false,
            }
        }];
        currentGuess = "";
    }
    
</script>

<div id="app">
    <div class="card card-left">
        <h1>Champ Guessr</h1>
        <img class="logo" src="/logo.png" alt="">
        <input type="text" bind:value={currentGuess}>
        <button on:click={guessing}>Ajouter</button>
        
    </div>
    <div class="card card-right">
        <h1>Guesses :</h1>
        {#each guesses as guess}
        <div class="squares">
            <Square property={guess.nom}/>
            <Square property={guess.sexe}/>
            <Square property={guess.role}/>
            <Square property={guess.region}/>
        </div>
        {/each}
    </div>
</div>

<style>
    :global(:root){
        --orange: #eeC198;
        --brown: #e8B07F;
        --grey: #7F707A;
        --darkgrey: #3b313B;
        --radius: 1rem;
    }
    :global(body, html){
        overflow: hidden;
    }
    :global(body){
        background: linear-gradient(45deg, var(--orange), var(--brown));
        font: 1rem Arial;
        color: #333;
        margin: 0;
        padding: 0;
    }
    
    #app{
        padding: 2rem 10rem;
        display: grid;
        height: calc(100vh - 4rem);
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: 1fr;
        gap: 1.5rem;
    }
    
    .logo{
        display: block;
        margin: 0 auto;
    }
    .card{
        background: linear-gradient(214deg, #F0D8B8, #E0BF99);
        padding: 1.5rem;
        position: relative;
        z-index: 1;
        border-radius: var(--radius);
        box-shadow: -60px 45px 100px rgba(0,0,0,0.2);
    }
    .card:first-child{
        z-index: 2;
        background: linear-gradient(214deg, var(--grey), var(--darkgrey));
        color: var(--orange);
    }
    
    .squares{
        display: flex;
        gap: 1rem;
    }
    
</style>