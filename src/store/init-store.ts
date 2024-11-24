import { fetchHeaderMenus } from "./slice";


export const initStore = () => (dispatch: any, id?: any) => {
  if (localStorage.getItem("a_token")) {
    dispatch(fetchHeaderMenus());
  }
};
