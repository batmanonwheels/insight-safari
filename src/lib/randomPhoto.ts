export const randomPhoto = (): string => {
	const photos = ['bg-ferns-1', 'bg-ferns-2', 'bg-ferns-3', 'bg-ferns-4'];
	return photos[Math.floor(Math.random() * photos.length)];
};
