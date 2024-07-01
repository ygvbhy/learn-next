/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.pixabay.com',
				port: '',
				pathname: '/user/**',
			},
		],
	},
};
// https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg
export default nextConfig;
