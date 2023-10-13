<script>
	//components
	import Button from '$lib/components/UI/Button.svelte';
	import Badge from '$lib/components/UI/Badge.svelte';

	//Sveltekit routing
	import { goto } from '$app/navigation';

	// prop
	export let project;
	//vars
	const id = project._id;

	function handleLike() {
		// need some code here later
	}
</script>

<article class="project-item-article">
	<header class="project-item-header">
		<div>
			<h1>
				{project.projectname.slice(0, 8)}
				{#if project.likes > 0}
					<Badge>Likes {project.likes}</Badge>
				{/if}
			</h1>
		</div>

		<div class="wrap-flex">
			<h2>{project.location}</h2>
			<h4>{project.status}</h4>
		</div>
	</header>
	<div class="project-item-image">
		<img src={project.image_url} alt={project.projectname} />
	</div>
	<div class="project-item-content">
		<h3>Arv: ${project.arv}</h3>
	</div>
	<footer class="project-item-footer">
		<Button
			mode="outline"
			type="button"
			on:click={() => {
				//Sveltekit routing
				goto(`/projectupdate/${id}`);
			}}>Edit</Button
		>
		<Button
			mode="outline"
			type="button"
			on:click={() => {
				goto(`/projects/${id}`);
			}}>Details</Button
		>

		<Button
			mode="outline"
			type="button"
			on:click={() => {
				goto(`/ezflip/${id}`);
			}}>EzFlip</Button
		>

		<Button mode="outline" type="button" on:click={handleLike}>Like</Button>
	</footer>
</article>
