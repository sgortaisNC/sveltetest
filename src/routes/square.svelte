<script>
    /**
	 * @type {{ value: string, valid: boolean; }}
	 */
     export let property;
</script>

<div class="square {property.valid ? 'good' : 'bad'}">{property.value}</div>

<style lang="scss">
    .square{ 
        background: grey;
        display: flex;
        aspect-ratio: 1;
        width: 90px;
        align-items: center;
        justify-content: center;

        &.bad{
            background: red;
        }
    }
</style>