import { useStore } from "../../context/AppContext";
import Card from "../Card";
import filtersVals from "../../utils/filterVals";
import "./styles.css";
import { IconClose } from "../SVG/IconSvg";

const FilterSidebar = () => {
  const {
    filterPrice,
    setFilterPrice,
    priceRangeMin,
    priceRangeMax,
    setPriceRangeMin,
    setPriceRangeMax,
    filterBrand,
    setFilterBrand,
    filterCategory,
    setFilterCategory,
  } = useStore();

  const handleCloseMenu = () => {
    const sidebar = document.querySelector("#filter-sidebar");
    sidebar.classList.remove("show");
  };

  const handlePriceFilter = (e) => {
    setFilterPrice(+e.target.value);
  };

  const handleCategoryFilter = (e) => {
    setFilterCategory(+e.target.value);
  };

  const handleBrandFilter = (e) => {
    setFilterBrand(e.target.value);
  };

  return (
    <div className="filter-sidebar" id="filter-sidebar">
      <h5 className="filter-sidebar__heading">Filters</h5>
      <Card>
        {/* Prices Multi-range Filter */}
        <div className="filter-sidebar__item">
          <div className="sidebar__heading">
            <h5>Multi Range</h5>

            {/* Mobile Close menu */}
            <div className="menu__close__icon" onClick={handleCloseMenu}>
              <IconClose />
            </div>
          </div>

          <div className="radio-group">
            {filtersVals.multiRange.map((title, i) => (
              <label key={i} className="radio">
                <input
                  type="radio"
                  checked={filterPrice === i}
                  value={i}
                  onChange={handlePriceFilter}
                />
                {title}
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="filter-sidebar__item">
          <h5>Price Range</h5>
          <div className="range-minmax">
            ${priceRangeMin} - ${priceRangeMax}
          </div>
          <div className="range-input">
            <input
              type="range"
              min={0}
              max={1000}
              value={priceRangeMin}
              onChange={(e) => setPriceRangeMin(+e.target.value)}
            />
            <input
              type="range"
              min={0}
              max={1000}
              value={priceRangeMax}
              onChange={(e) => setPriceRangeMax(+e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="filter-sidebar__item">
          <h5>Categories</h5>
          <div className="radio-group">
            {filtersVals.categories.map((title, i) => (
              <label key={i} className="radio">
                <input
                  type="radio"
                  checked={filterCategory === i}
                  value={i}
                  onChange={handleCategoryFilter}
                />
                {title}
              </label>
            ))}
          </div>

          {/* Brands Filter */}
          <div className="filter-sidebar__item">
            <h5>Brands</h5>
            <div className="radio-group">
              {filtersVals.brands.map((brand, i) => (
                <label key={i} className="radio">
                  <input
                    type="radio"
                    checked={filterBrand === brand}
                    value={brand}
                    onChange={handleBrandFilter}
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FilterSidebar;
