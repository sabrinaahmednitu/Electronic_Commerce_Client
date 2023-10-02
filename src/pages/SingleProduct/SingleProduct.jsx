import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageNavigation from '../../components/SingleProduct/PageNavigation';
import SingleImage from '../../components/SingleProduct/SingleImage';
import { useProductContext } from '../../context/productContext';
import FormatPrice from '../../Helpers/FormatPrice';
import {TbTruckDelivery} from "react-icons/tb"

const SingleProduct = () => {
const { id } = useParams();
const { getSingleProduct, isLoading, singleProduct } = useProductContext();
const {name,image,company,price,description,category,stock,stars,reviews}=singleProduct;
  useEffect(() => {
    getSingleProduct(`https://api.pujakaitem.com/api/products?id=${id}`);
  }, []);

  if (isLoading) {
    return <h1 className='text-center text-3xl pt-24 pb-24' >Loading....</h1>
  }

  return (
    <div>
      <PageNavigation title={name}></PageNavigation>

      <section className="container mx-auto max-w-xl">
        <div className="grid grid-cols-2">
          <div className="product_image">
            <SingleImage images={image}></SingleImage>
          </div>
          <div className="product_data">
            <h1>{name} </h1>
            <p>{stars}</p>
            <p>{reviews}</p>
            <p className="product-price">
              BDT :{' '}
              <del>
                <FormatPrice price={price + 250000}></FormatPrice>
              </del>
            </p>
            <p className="product-real-price">
              Deal of the Day : <FormatPrice price={price}></FormatPrice>
            </p>
            <h1>{description}</h1>
            <div className="product-data-warranty flex">
              <div className="warrenty-data">
                <TbTruckDelivery className="text-3xl"></TbTruckDelivery>
                <p>Free Delivery</p>
              </div>
              <div className="warrenty-data">
                <TbTruckDelivery className="text-3xl"></TbTruckDelivery>
                <p>Free Delivery</p>
              </div>
              <div className="warrenty-data">
                <TbTruckDelivery className="text-3xl"></TbTruckDelivery>
                <p>Free Delivery</p>
              </div>
              <div className="warrenty-data">
                <TbTruckDelivery className="text-3xl"></TbTruckDelivery>
                <p>Free Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
