'use server';

import { cookies } from 'next/headers';

export const setTimerDuration = async (count: number) => {
	const cookieStore = await cookies();
	cookieStore.set('timerDuration', count.toString());
};

export const getTimerDuration = async (): Promise<string | undefined> => {
	const cookieStore = await cookies();
	const duration = cookieStore.get('timerDuration');
	if (!duration) return undefined;

	return duration.value;
};
