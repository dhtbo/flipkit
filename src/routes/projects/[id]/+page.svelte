<script>
	//sveltekit update
	import { page } from '$app/stores';

	//props
	let { id } = $page.params;

	//imports
	import projects from '$lib/stores/projects';

	//reactive for project
	let project = '';
	$: project = $projects.find((item) => item._id === id);
</script>

<svelte:head>
	<title>{!project ? 'single project' : project.projectname}</title>
</svelte:head>

{#if !project}
	<p>loading ...</p>
{:else}
	<section class="single-project">
		<a href="/projects" class="btn btn-primary"> back to projects</a>

		<div class="single-project-container">
			<article class="single-project-image">
				<img src={project.image_url} alt={project.projectname} />
			</article>

			<article>
				<h1>{project.location}</h1>
				<h2>Arv: ${project.arv} (Status: {project.status})</h2>
				<table class="single-project-table">
					<thead>
						<tr>
							<th>Asking Price</th>
							<th>Repairs</th>
							<th>Fixed Costs</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>${project.askingprice}</td>
							<td>${project.repairs}</td>
							<th>${project.fixedcosts}</th>
						</tr>
					</tbody>
				</table>
				<br />
				<p>{project.description}</p>
			</article>
		</div>

		<a href="/projects" class="btn btn-primary"> back to projects</a>
	</section>
{/if}
