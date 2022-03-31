import { createContext, useContext, useEffect, useState } from "react";
import productJson from "../assets/data/products.json";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const { products } = productJson;
  const [productsList, setProductsList] = useState([]);
  const [search, setSearch] = useState();
  const [filterPrice, setFilterPrice] = useState(0);
  const [priceRangeMin, setPriceRangeMin] = useState(0);
  const [priceRangeMax, setPriceRangeMax] = useState(0);
  const [filterCategory, setFilterCategory] = useState(0);
  const [filterBrand, setFilterBrand] = useState(0);

  useEffect(() => {
    if (search) {
      const searchFilter = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
      setProductsList(searchFilter);
    }
  }, [search]);

  useEffect(() => {
    switch (filterPrice) {
      case 1:
        setProductsList(products.filter((p) => p.price <= 10));
        break;
      case 2:
        setProductsList(products.filter((p) => p.price > 10 && p.price <= 100));
        break;
      case 3:
        setProductsList(products.filter((p) => p.price > 100 && p.price < 500));
        break;
      case 4:
        setProductsList(products.filter((p) => p.price >= 500));
        break;
      default:
        setProductsList(products);
    }
  }, [filterPrice]);

  useEffect(() => {
    if (filterBrand) {
      setProductsList(products.filter((p) => p.brand === filterBrand));
    }
  }, [filterBrand]);

  useEffect(() => {
    if (priceRangeMin && priceRangeMax) {
      setProductsList(
        products.filter(
          (p) => p.price >= priceRangeMin && p.price <= priceRangeMax
        )
      );
    }

    if (priceRangeMin && !priceRangeMax) {
      setProductsList(products.filter((p) => p.price >= priceRangeMin));
    }

    if (!priceRangeMin && priceRangeMax) {
      setProductsList(products.filter((p) => p.price <= priceRangeMax));
    }
  }, [priceRangeMin, priceRangeMax]);

  const store = {
    search,
    setSearch,
    filteredProducts: productsList,
    filterPrice,
    setFilterPrice,
    priceRangeMin,
    priceRangeMax,
    setPriceRangeMin,
    setPriceRangeMax,
    filterCategory,
    setFilterCategory,
    filterBrand,
    setFilterBrand,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useStore = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
