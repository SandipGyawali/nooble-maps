export interface PARAMS {
  q: string;
  format: string;
  addressdetails: string;
}

export interface SearchBarProps {
  input: string;
}

export interface ResetCenterViewProps {
  selectPosition: [number, number];
}

export interface ItemProps {
  data: {
    address: {
      city: string;
      country: string;
      country_code: string;
      state: string;
    };
    addresstype: string;
    class: string;
    display_name: string;
    lat: number;
    lon: number;
    name: string;
    place_id: number;
    place_rank: number;
  };
}

export interface StoreState {
  places: Array<any>;
  searchInput: string;
  selectedPosition: [number, number];
  setSearchInput: (searchInput: string) => void;
  fetchPlaces: () => Promise<void>;
  setSelectedPosition: (selectedPosition: [lat: number, lon: number]) => void;
  removeSelectedPosition: () => void;
}
