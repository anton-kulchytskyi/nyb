type VesselKeys = {
  [key: string]: number | string | boolean;
};

export interface Vessel extends VesselKeys {
  vessel_id: number;
  featured: boolean;
  vessel_make: string;
  vessel_model: string;
  vessel_price: number;
  vessel_year: number;
  vessel_country: string;
  vessel_town: string;
  vessel_loa: number;
  vessel_beam: number;
  vessel_draft: number;
  vessel_cabin: number;
  vessel_berth: number;
  vessel_fuel_type: string;
  vessel_keel_type: string;
  vessel_engine: number;
  vessel_description: string;
  vessel_created_at: string;
  vessel_image_key: string;
}
