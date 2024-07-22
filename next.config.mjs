/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/query',
        has: [
          {
            type: 'cookie',
            key: 'Cookie',
            value:
              '_ga=GA1.2.1340569037.1721568859; _gid=GA1.2.672274520.1721568859; _ga_6T6J6GMB3R=GS1.2.1721580403.3.1.1721580403.0.0.0',
          },
        ],
        destination: 'https://placafipe.com/placa/FJL1346',
      },
    ];
  },
};

export default nextConfig;
