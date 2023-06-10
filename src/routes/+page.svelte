<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.user}
	<h1>Hello {data.user.name}!</h1>

	<p>{data.message}</p>
{/if}
