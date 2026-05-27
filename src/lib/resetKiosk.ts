'use client';

import { useRouter } from 'next/navigation';

export const resetKiosk = () => {
	// const splash: HTMLDivElement | null = document.querySelector('#splash');
	const router = useRouter();

	router.refresh();
};
