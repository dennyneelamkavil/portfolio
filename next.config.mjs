/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // Add the redirects configuration block here
  async redirects() {
    return [
      {
        source: "/verify/nsdc", // The source path you want to redirect from (Short URL)
        // Your long destination URL
        destination:
          "https://admin.skillindiadigital.gov.in/documentverificationbyQR?content=P0NhbmRpZGF0ZSBOYW1lID0gREVOTlkgTiBKJiZDYW5kaWRhdGUgSWQgPSBDQU5fMzczODgxODYmJlRQIElkID0gVFAxMzIyMjMmJlRDIE5hbWUgPSBPTkxJTkUgVFJBSU5JTkcgQ0VOVEVSJiZCYXRjaElkID0gMzMzNTU1NiYmRG9jdW1lbnQgSUQgPSBWWEdIU0pHUjFUQldWOFQ5JiZUQyBBZGRyZXNzID0gRU5UUkkgSFEmJk1BTEVQUEFMTFkgUkQmJlRIUklLS0FLQVJBJiZLQUtLQU5BRCYmS0VSQUxBIC02ODIwMjEuJiZEb2N1bWVudCA9IGNlcnRpZmljYXRlJiZJc3N1YW5jZSBEYXRlID0gMjYvMDUvMjAyNQ%3D%3D",
        permanent: false, // Forces a 307/302 Temporary Redirect
      },
    ];
  },
};

export default nextConfig;
