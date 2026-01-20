import { events, speakers, trainingSessions } from '@/lib/data';
import TrainingDetail from './TrainingDetail';

export async function generateMetadata({ params }) {
  const { id } = await params;

  // Find event
  let event = null;
  // Check training sessions first
  event = trainingSessions.find(t => t.id === id);
  if (!event) {
    // Check events
    for (const dayEvents of Object.values(events)) {
      const found = dayEvents.find(e => e.id === id);
      if (found) {
        event = found;
        break;
      }
    }
  }

  if (!event) {
    return {
      title: 'Session Not Found | Seasides 2026',
      description: 'The requested session could not be found.'
    };
  }

  const speakersList = event.speakerIds
    ? event.speakerIds.map(sid => speakers.find(s => s.id === sid)).filter(Boolean)
    : [];

  const speakerNames = speakersList.map(s => s.name).join(', ');

  return {
    title: event.title,
    description:
      event.description || `Join this session at Seasides 2026.${speakerNames ? ` Featuring ${speakerNames}.` : ''}`,
    openGraph: {
      title: event.title,
      description:
        event.description || `Join this session at Seasides 2026.${speakerNames ? ` Featuring ${speakerNames}.` : ''}`,
      type: 'article',
      authors: speakerNames ? speakerNames.split(', ') : undefined
    }
  };
}

export default async function Page({ params }) {
  // params is a promise in Next.js 15, but usually available directly in 14.
  // To be safe with recent versions we await it if it's a promise, or just use it.
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // JSON-LD Generation
  let event = trainingSessions.find(t => t.id === id);
  if (!event) {
    for (const dayEvents of Object.values(events)) {
      const found = dayEvents.find(e => e.id === id);
      if (found) {
        event = found;
        break;
      }
    }
  }

  let jsonLd = null;

  if (event) {
    const eventSpeakers = event.speakerIds
      ? event.speakerIds.map(sid => speakers.find(s => s.id === sid)).filter(Boolean)
      : [];

    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'EducationEvent',
      name: event.title,
      startDate: event.date ? new Date(event.date).toISOString() : '2026-02-19T09:00:00+05:30', // Default or parse
      endDate: event.date ? new Date(event.date).toISOString() : '2026-02-19T17:00:00+05:30', // Approx
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: 'International Centre Goa',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Goa',
          addressCountry: 'IN'
        }
      },
      description: event.description,
      performer: eventSpeakers.map(s => ({
        '@type': 'Person',
        name: s.name,
        image: s.image ? `https://www.seasides.net${s.image}` : undefined,
        jobTitle: s.role,
        worksFor: {
          '@type': 'Organization',
          name: s.company
        }
      })),
      organizer: {
        '@type': 'Organization',
        name: 'Seasides',
        url: 'https://www.seasides.net'
      }
    };
  }

  return (
    <>
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      <TrainingDetail />
    </>
  );
}
