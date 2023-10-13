import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const dbName = process.env.MONGODB_DATABASE;

function createClient() {
	const client = new MongoClient(process.env.MONGODB_URI);

	client.usersCollection = function () {
		return this.db(dbName).collection('users');
	};

	client.projectsCollection = function () {
		return this.db(dbName).collection('projects');
	};

	return client;
}

export { createClient };
