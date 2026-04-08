import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/campaign-projects.html", destination: "/campaign-projects", permanent: true },
      { source: "/travel.html", destination: "/travel", permanent: true },
      { source: "/personal-essays.html", destination: "/personal-essays", permanent: true },
      { source: "/free-people-spec.html", destination: "/free-people-spec", permanent: true },
      { source: "/morocco.html", destination: "/morocco", permanent: true },
      { source: "/montreal.html", destination: "/montreal", permanent: true },
      { source: "/barcelona.html", destination: "/barcelona", permanent: true },
    ];
  },
};

export default nextConfig;
