<script>
	//stores
	import projects from '$lib/stores/projects';
	//components
	import Button from '$lib/components/UI/Button.svelte';
	import ProjectItem from '$lib/components/Projects/ProjectItem.svelte';

	//Sveltekit routing
	import { goto } from '$app/navigation';

	function handleAdd() {
		goto('/projectupdate');
	}
</script>

<span class="project-controls">
	<Button on:click={handleAdd} mode="outline">New Project</Button>
</span>

<section class="projects-section">
	{#each $projects as project (project._id)}    
		<div>
			<ProjectItem {project} />
		</div>
	{/each}
</section>
