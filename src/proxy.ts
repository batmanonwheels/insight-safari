import { getTimerDuration, setTimerDuration } from '@/lib/timerDuration';

export async function proxy() {
	const duration = await getTimerDuration();
	if (!duration) await setTimerDuration(10);
}

export const config = {
	matcher: ['/(!sw.js)'],
};
