import { create } from "zustand";
import axios, { AxiosResponse } from "axios";
import { PARAMS } from "../interface";
import { StoreState } from "../interface";

const BASE_URL: string = "https://nominatim.openstreetmap.org/search?";

/**
 * @Note zustand store
 */
const useStore = create<StoreState>((set) => ({
  places: [],
  searchInput: "",
  selectedPosition: [51.505, -0.09],
  setSearchInput: (searchInput: string): void => {
    set({ searchInput });
  },
  fetchPlaces: async (): Promise<void> => {
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
  setSelectedPosition: (selectedPosition: [number, number]): void => {
    set({ selectedPosition });
  },
  removeSelectedPosition: (): void => {
    set({ selectedPosition: [51.505, -0.09] });
  },
}));

export default useStore;
