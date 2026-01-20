import { events, speakers, trainingSessions } from '@/lib/data';

export default function sitemap() {
  const baseUrl = 'https://www.seasides.net';
  const currentDate = new Date().toISOString();

  // Static routes
  const routes = [
    '',
    '/about',
    '/gallery',
    '/speakers',
    '/workshops',
    '/schedule',
    '/sponsors',
    '/ai-village',
    '/blockchain-village',
    '/hardware-village',
    '/call-for-sponsors',
    '/cfp',
    '/cfp-reviewers',
    '/scholarship'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8
  }));

  // Dynamic routes for Speakers
  const speakerRoutes = speakers.map(speaker => ({
    url: `${baseUrl}/speakers/${speaker.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  // Dynamic routes for Training Sessions
  const trainingRoutes = trainingSessions.map(session => ({
    url: `${baseUrl}/schedule/${session.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9
  }));

  // Dynamic routes for Sessions/Events (from events object)
  // We'll flatten the days and map them. Some might duplicate training sessions if IDs overlap,
  // but usually training sessions are distinct from general sessions if detailed.
  // Actually, trainingSessions array seems to cover the workshops.
  // Let's check if there are other events in `events` object that have details pages.
  // The current schedule/[id] page handles any ID found in `events`.

  const allEventIds = new Set();
  Object.values(events).forEach(dayEvents => {
    dayEvents.forEach(event => {
      allEventIds.add(event.id);
    });
  });

  // Filter out IDs that are already in trainingSessions to avoid duplicates if any
  const trainingIds = new Set(trainingSessions.map(t => t.id));

  const eventRoutes = Array.from(allEventIds)
    .filter(id => !trainingIds.has(id)) // Only add non-training events here
    .map(id => ({
      url: `${baseUrl}/schedule/${id}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    }));

  return [...routes, ...speakerRoutes, ...trainingRoutes, ...eventRoutes];
}
