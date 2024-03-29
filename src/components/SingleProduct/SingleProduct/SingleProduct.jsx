import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageNavigation from '../PageNavigation';
import SingleImage from '../SingleImage';
import { useProductContext } from '../../../context/productContext';
import FormatPrice from '../../../Helpers/FormatPrice';
import { TbTruckDelivery, TbReplace} from 'react-icons/tb';
import Stars from '../star/Stars';
import './SingleProduct.css';
import AddToCart from '../AddToCart/AddToCart';

const API = `http://localhost:5000/electronicProduct`;

const SingleProduct = () => {
  const { id } = useParams();
const { getSingleProduct, isLoading, singleProduct } = useProductContext();
const {name,image,company,price,description,category,stock,stars,reviews}=singleProduct;
  useEffect(() => {
      getSingleProduct(`http://localhost:5000/electronicProduct/${id}`);
  }, []);

  if (isLoading) {
    return <h1 className='text-center text-3xl pt-24 pb-24' >Loading....</h1>
  }

  return (
    <div>
      <PageNavigation title={name}></PageNavigation>

      <section className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="product_image">
            <SingleImage imgs={image}></SingleImage>
          </div>
          <div className="product_data text-black p-5">
            <h1 className="text-4xl mb-3">{name}{ id} </h1>
            <Stars stars={stars} reviews={reviews}></Stars>
            <p className="product-price mt-3 mb-3">
              BDT :{' '}
              <del>
                <FormatPrice price={price + 250000}></FormatPrice>
              </del>
            </p>
            <p className="product-real-price font-bold text-indigo-500 mb-3">
              Deal of the Day : <FormatPrice price={price}></FormatPrice>
            </p>
            <h1>{description}</h1>
            <div className="product-data-warranty flex mt-5 mb-5">
              <div className="warrenty-data">
                <TbTruckDelivery className="text-3xl"></TbTruckDelivery>
                <p>Free Delivery</p>
              </div>
              <div className="warrenty-data">
                <TbReplace className="text-3xl"></TbReplace>
                <p>Free Delivery</p>
              </div>
              <div className="warrenty-data">
                <TbTruckDelivery className="text-3xl"></TbTruckDelivery>
                <p>Your Delivery</p>
              </div>
              <div className="warrenty-data">
                {/* <MdSecurity className="text-3xl"></MdSecurity> */}
                <p>Year Warranty</p>
              </div>
            </div>
            <hr />

            <div className="product-data-info mt-4 mb-4">
              <p>
                Available :{' '}
                <span className="font-bold">
                  {stock > 0 ? 'In Stock' : 'Not Availavle'}
                </span>{' '}
              </p>
              <p>
                Brand : <span className="font-bold">{company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart singleProduct={singleProduct}></AddToCart>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
