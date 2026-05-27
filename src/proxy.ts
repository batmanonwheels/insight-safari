import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getTimerDuration, setTimerDuration } from '@/lib/timerDuration';

export async function proxy(request: NextRequest) {
	const duration = await getTimerDuration();
	if (!duration) await setTimerDuration(10);
}

// export const config = {
// 	matcher: '/*',
// };
