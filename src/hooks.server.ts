import { handleSession } from 'svelte-kit-cookie-session';
import { setSession } from '$houdini';

export const handle = handleSession(
	{
		secret: 'my-secret'
	},
	async ({ event, resolve }) => {
		await event.locals.session.update((data) => ({ views: (data?.views || 0) + 1 }));
		setSession(event, event.locals.session.data);
		return resolve(event);
	}
);
