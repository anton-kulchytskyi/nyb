type VesselKeys = {
  [key: string]: number | string | boolean | object;
};

export interface Vessel extends VesselKeys {
  yacht_id: number;
  yacht_featured: boolean;
  yacht_make: string;
  yacht_model: string;
  yacht_price_EUR: string;
  yacht_price_USD: string;
  yacht_price_GBP: string;
  yacht_price_NOK: string;
  yacht_year: number;
  yacht_country: string;
  yacht_town: string;
  yacht_loa: number;
  yacht_beam: number;
  yacht_draft: number;
  yacht_cabin: number;
  yacht_berth: number;
  yacht_fuel_type: string;
  yacht_keel_type: string;
  yacht_engine: number;
  yacht_description: string;
  yacht_created_at: string;
  yacht_main_image_key: string;
  yacht_images: [
    {
      yacht_image_id: number;
      createdAt: string;
      yacht_image_key: string;
    },
  ];
}
