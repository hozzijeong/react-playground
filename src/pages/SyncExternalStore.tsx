import { useSyncExternalStore } from 'react';
import { todosStore } from '../todos';

const SyncExternalStore = () => {
	const todos = useSyncExternalStore(
		todosStore.subscribe,
		todosStore.getSnapshot
	);

	return (
		<>
			<button onClick={() => todosStore.addTodo()}>Add todo</button>
			<hr />
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.text}</li>
				))}
			</ul>
		</>
	);
};

export default SyncExternalStore;
