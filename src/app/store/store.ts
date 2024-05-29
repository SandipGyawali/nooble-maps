import { create } from "zustand";
import axios, { AxiosResponse } from "axios";
import { PARAMS } from "../interface";

const BASE_URL: string = "https://nominatim.openstreetmap.org/search?";

interface StoreState {
  places: Array<any>;
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
  fetchPlaces: () => Promise<void>;
}

/**
 * @Note zustand store
 */
const useStore = create<StoreState>((set) => ({
  places: [],
  searchInput: "",
  setSearchInput: (searchInput: string) => {
    set({ searchInput });
  },
  fetchPlaces: async () => {
    try {
      const { searchInput } = useStore.getState();
      const params: PARAMS = {
        q: searchInput,
        format: "json",
        addressdetails: "1",
      };

      const stringParams: Record<string, string> = {
        q: params.q,
        format: params.format,
        addressdetails: params.addressdetails,
      };

      const queryString: string = new URLSearchParams(stringParams).toString();

      const res: AxiosResponse<any> = await axios.get(
        `${BASE_URL}${queryString}`
      );
      const places: Array<any> = res.data;
      set({ places });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useStore;
