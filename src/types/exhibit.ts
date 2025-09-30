import type { MuseumSource } from "../config/museums";

export interface Exhibit {
  id: string;
  source: MuseumSource;
  title: string;
  artist: string;
  date: string;
  imageUrl: string;
  thumbnailUrl: string;
  medium: string;
  department: string;
  museumLink: string;
  physicalLocation: string;
  description?: string;
  dimensions?: string;
  culture?: string;
  creditLine?: string;
}

export interface MetObjectResponse {
  objectID: number;
  title: string;
  artistDisplayName: string;
  objectDate: string;
  primaryImage: string;
  primaryImageSmall: string;
  medium: string;
  department: string;
  objectURL: string;
  GalleryNumber: string;
  dimensions?: string;
  culture?: string;
  creditLine?: string;
}

export interface MetSearchResponse {
  total: number;
  objectIDs: number[] | null;
}

export interface VAMObjectResponse {
  systemNumber: string;
  _primaryTitle: string;
  _primaryMaker?: {
    name: string;
    association?: string;
  };
  _primaryDate: string;
  _images?: {
    _primary_thumbnail?: string;
    _iiif_image_base_url?: string;
  };
  objectType: string;
  _currentLocation?: {
    displayName: string;
    onDisplay: boolean;
  };
  _primaryImageId?: string;
  summaryDescription?: string;
}

export interface VAMSearchResponse {
  info: {
    record_count: number;
  };
  records: VAMObjectResponse[];
}
