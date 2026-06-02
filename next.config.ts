import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // StrictMode disabled: it double-invokes effects in dev, which conflicts with
  // jQuery plugin lifecycle (re-binding handlers, duplicate Swiper instances,
  // etc.) and was causing a delayed "(intermediate value)(...) is not a function"
  // runtime error in the browser. Production builds never had this issue.
  reactStrictMode: false,
};

export default nextConfig;
