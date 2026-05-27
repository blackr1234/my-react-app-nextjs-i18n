/** @type {import('next').NextConfig} */

const BASE_PATH = "/my-react-app-nextjs-i18n";

const nextConfig = {
	basePath: BASE_PATH,
	env: {
		NEXT_PUBLIC_BASE_PATH: BASE_PATH,
	},
};

export default nextConfig;
