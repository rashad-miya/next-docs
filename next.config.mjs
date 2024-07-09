/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns: ['shipfa.st'], // Add your hostname(s) here
        remotePatterns:[
          {
            protocol: 'https',
            hostname: 'shipfa.st',
            port: '',
            pathname: '**',
          },
        ]
      },
};

export default nextConfig;
