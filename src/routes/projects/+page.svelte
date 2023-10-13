<script>
	export let data;
	import { setProjects } from '$lib/stores/projects';
	import Projects from '$lib/components/Projects/Projects.svelte';
	const { flips } = data;

	//console.log('project/+page.svelte data: ', data);
	// update projects store with fetched data
	setProjects(flips);
</script>

<Projects />
