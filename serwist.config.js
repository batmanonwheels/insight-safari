// @ts-check
// If you want to use the fully resolved Next.js
// configuration to resolve Serwist configuration,
// use `serwist.withNextConfig` instead.
import { spawnSync } from 'node:child_process';
import { serwist } from '@serwist/next/config';

// This is optional!
// A revision helps Serwist version a precached page. This
// avoids outdated precached responses being used. Using
// `git rev-parse HEAD` might not the most efficient way
// of determining a revision, however. You may prefer to use
// the hashes of every extra file you precache.
const revision =
	spawnSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf-8' }).stdout ??
	crypto.randomUUID();

export default serwist.withNextConfig((nextConfig) => ({
	swSrc: 'src/app/sw.ts',
	swDest: 'public/sw.js',
	additionalPrecacheEntries: [
		{ url: '/precached', revision },
		{ url: '/', revision },
		{ url: '/communications', revision },
		{ url: '/equity-education', revision },
		{ url: '/financial-wellness', revision },
		{ url: '/platform-support', revision },
		{ url: '/tax-insights', revision },
	],
	globIgnores: [
		`${nextConfig.distDir}/server/pages/**/*.json`,
		`${nextConfig.distDir}/server/app/ignored.html`,
	],
}));
