//getProjects.js
import { createClient } from '../../src/lib/db-helper.js';

export const handler = async (event) => {
	const dbClient = createClient();
	let errorStatusCode = 500;

	//
	try {
		//connect
		await dbClient.connect();
		const projects = dbClient.projectsCollection();
		//get data
		const data = await projects.find({}).limit(1000).toArray();
		return {
			statusCode: 200,
			body: JSON.stringify(data)
		};
	} catch (error) {
		return { statusCode: 500, body: error.toString() };
	}
};
