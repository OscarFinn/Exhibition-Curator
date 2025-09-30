export const MUSEUM_CONFIG = {
  met: {
    name: "Metropolitan Museum of Art",
    baseUrl: "https://collectionapi.metmuseum.org/public/collection/v1",
    location: "New York, USA",
    website: "https://www.metmuseum.org",
  },
  vam: {
    name: "Victoria & Albert Museum",
    baseUrl: "https://api.vam.ac.uk/v2",
    location: "London, UK",
    website: "https://www.vam.ac.uk",
  },
} as const;

export type MuseumSource = keyof typeof MUSEUM_CONFIG;
