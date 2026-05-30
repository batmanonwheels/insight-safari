// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
// 	/* config options here */
// 	reactCompiler: true,
// 	allowedDevOrigins: ['192.168.8.106'],
// };

// export default nextConfig;

import { withSerwist } from '@serwist/turbopack';

export default withSerwist({
	// Your Next.js configuration
	reactCompiler: true,
	allowedDevOrigins: ['192.168.8.106'],
	// devIndicators: false,
});
