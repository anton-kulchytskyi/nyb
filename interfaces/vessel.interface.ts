export interface Vessel {
  id: number;
  featuredVessel: boolean;
  vesselMake: string;
  vesselModel: string;
  vesselPrice: number;
  vesselYear: number;
  vesselLocationCountry: string;
  vesselLocationState: string;
  vesselLengthOverall: number;
  vesselBeam: number;
  vesselDraft: number;
  vesselCabin: number;
  vesselBerth: number;
  fuelType: string;
  keelType: string;
  engineQuantity: number;
  vesselDescription: string;
  createdAt: string;
  imageKey: string;
}
