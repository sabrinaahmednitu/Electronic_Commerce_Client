import { useProductContext } from '../../context/productContext';

const Products = () => {
    const {myName} = useProductContext();
    return (
        <div>
            {myName}
            <h1>i am the products</h1>
        </div>
    );
};

export default Products;