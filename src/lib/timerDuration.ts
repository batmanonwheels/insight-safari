'use server';
import { cookies } from 'next/headers';

export const setTimerDuration = async (count: number) => {
	const cookieStore = await cookies();
	cookieStore.set('timerDuration', count.toString());
	return count.toString();
};

export const getTimerDuration = async (): Promise<string | undefined> => {
	const cookieStore = await cookies();
	const duration = cookieStore.get('timerDuration');
	if (duration === undefined) return undefined;

	return duration.value;
};
