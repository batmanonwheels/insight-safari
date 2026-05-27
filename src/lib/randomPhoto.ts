export const randomPhoto = (): string => {
	const photos = [
		'/backgrounds/ferns-1.webp',
		'/backgrounds/ferns-2.webp',
		'/backgrounds/ferns-3.webp',
		'/backgrounds/ferns-4.webp',
	];
	return photos[Math.floor(Math.random() * photos.length)];
};
