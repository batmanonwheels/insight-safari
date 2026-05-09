export const randomPhoto = (): string => {
	const photos = ['/backgrounds/ferns-1.webp', '/backgrounds/ferns-2.webp'];
	return photos[Math.floor(Math.random() * photos.length)];
};
