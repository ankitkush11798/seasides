import { speakers } from '@/lib/data';
import SpeakerDetail from './SpeakerDetail';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const speaker = speakers.find(s => s.id === id);

  if (!speaker) {
    return {
      title: 'Speaker Not Found | Seasides 2026',
      description: 'The requested speaker profile could not be found.'
    };
  }

  return {
    title: speaker.name,
    description: `Meet ${speaker.name}, ${speaker.role}${speaker.company ? ` at ${speaker.company}` : ''}. Speaking at Seasides 2026 Cybersecurity Conference.`,
    openGraph: {
      title: `${speaker.name} - Seasides 2026 Speaker`,
      description: speaker.bio?.slice(0, 160) + '...',
      images: [
        {
          url: speaker.image || '/og-image.jpg',
          width: 800,
          height: 800,
          alt: speaker.name
        }
      ],
      type: 'profile',
      username: speaker.social?.twitter?.split('/').pop()
    }
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const speaker = speakers.find(s => s.id === id);

  let jsonLd = null;
  if (speaker) {
    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: speaker.name,
      jobTitle: speaker.role,
      worksFor: {
        '@type': 'Organization',
        name: speaker.company
      },
      image: speaker.image ? `https://www.seasides.net${speaker.image}` : undefined,
      description: speaker.bio,
      sameAs: [speaker.social?.linkedin, speaker.social?.twitter].filter(Boolean)
    };
  }

  return (
    <>
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      <SpeakerDetail />
    </>
  );
}
