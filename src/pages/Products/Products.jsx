import FilterSection from '../../components/Product/FilterSection/FilterSection';
import ProductList from '../../components/Product/ProductList/ProductList';
import Sort from '../../components/Product/Sort/Sort';
import { useFilterContext } from '../../context/filterContext';
import './Products.css';

const Products = () => {

  const { filter_products } = useFilterContext();
  console.log(filter_products);
  
  return (
    <div>
      <div className=" grid-filter-column">
        {/*-------- section 1 --------*/}
        <section>
          <FilterSection></FilterSection>
        </section>
     

        {/*-------- section 2 --------*/}
        <section className="product-view-sort">
          {/* section2 (part 1) */}
          <div className="sort-filter">
            <Sort></Sort>
          </div>
          {/* section2 (part 2) */}
          <div className="main-product">
            <ProductList></ProductList>
          </div>
        </section>
     
      </div>
    </div>
  );
};

export default Products;
