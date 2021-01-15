import { mushrooms } from "../shared/mushroomIndex";
import { publicLands } from "../shared/public_lands";

export const initialState = {
  mushrooms: mushrooms,
  publicLands: publicLands,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
