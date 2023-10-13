export const load = async ({ fetch }) => {
	const url = `/.netlify/functions/getProjects`;
  
	const res = await fetch(url);
	console.log(res);
	const flips = await res.json();

	return {
		flips
	};
};
