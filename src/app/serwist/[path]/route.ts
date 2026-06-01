import { spawnSync } from 'node:child_process';
import { createSerwistRoute } from '@serwist/turbopack';

const revision =
	spawnSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf-8' }).stdout ??
	crypto.randomUUID();

export const { dynamic, dynamicParams, revalidate, generateStaticParams, GET } =
	createSerwistRoute({
		additionalPrecacheEntries: [
			{
				url: '/',
				revision,
			},
			{
				url: '/communications',
				revision,
			},
			{
				url: '/equity-education',
				revision,
			},
			{
				url: '/financial-wellness',
				revision,
			},
			{
				url: '/platform-support',
				revision,
			},
			{
				url: '/tax-insights',
				revision,
			},
		],
		swSrc: 'src/app/sw.ts',
		// If set to `false`, Serwist will attempt to use `esbuild-wasm`.
		useNativeEsbuild: true,
	});
