import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useReducer } from "react";
import reducer from "../Reducer/ProductReducer";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://api.pujakaitem.com/api/products";

  const getData = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      let res = await axios.get(url);
      let products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async () => {
    dispatch({ type: "SINGLE_LOADING" });
    try {
      let res = await axios.get(url);
      let singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  useEffect(() => {
    getData(url);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};
//our custom hook
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useProductContext };
