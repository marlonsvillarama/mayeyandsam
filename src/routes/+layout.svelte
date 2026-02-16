<script>
	import favicon from '$lib/assets/heart.svg';
	import '../style/main.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Sam & Marielle - SAVE THE DATE</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
