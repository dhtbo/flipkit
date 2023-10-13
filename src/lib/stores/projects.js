import { writable } from 'svelte/store';

const store = writable([]);

export function setProjects(projects) {
	store.set(projects);
}
//export default store
const customProjectStore = {
	subscribe: store.subscribe
};
export default customProjectStore;
