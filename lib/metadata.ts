import type { Metadata } from 'next';

const siteName = 'SU Website';
// Replace before production deploy. Override via NEXT_PUBLIC_SITE_URL when set.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function buildMetadata(input: BuildMetadataInput): Metadata {
  const url = `${siteUrl}${input.path}`;
  const image = input.image ?? '/assets/images/og-default.jpg';
  return {
    title: `${input.title} | ${siteName}`,
    description: input.description,
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName,
      images: [{ url: image }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}
