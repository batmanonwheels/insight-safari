import type { NextRequest } from 'next/server';
import { getTimerDuration, setTimerDuration } from '@/lib/timerDuration';

export async function proxy(request: NextRequest) {
	const duration = await getTimerDuration();
	if (!duration) await setTimerDuration(10);
}
