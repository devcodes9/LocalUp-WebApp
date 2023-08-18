import React from "react";
import { Card } from 'flowbite-react';

const FeatureCard = ({title, body}) => {
  return (
    <div>
    <Card
      className="max-w-sm mt-[5%] bg-violet-200"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          {title}
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          {body}
        </p>
      </p>
    </Card>
      {/* <div
        className="flex flex-col justify-between md:flex-row mt-[2%]"
        data-aos="zoom-in-up"
      >
        <div className="basis-[30%] bg-pink-200 rounded-2xl mb-5 p-6 transition duration-500 box-border">
          <p className="font-bold">Convenience at Your Fingertips</p>
          <p>
            Say goodbye to the hassle of searching through multiple stores! Our
            user-friendly platform allows you to search for your favorite
            products from the comfort of your home
          </p>
        </div>
        <div className="basis-[30%] bg-pink-200 rounded-2xl mb-5 p-6 transition duration-500 box-border">
          <p className="font-bold">Convenience at Your Fingertips</p>
          <p>
            Say goodbye to the hassle of searching through multiple stores! Our
            user-friendly platform allows you to search for your favorite
            products from the comfort of your home
          </p>
        </div>
        <div className="basis-[30%] bg-pink-200 rounded-2xl mb-5 p-6 transition duration-500 box-border">
          <p className="font-bold">Convenience at Your Fingertips</p>
          <p>
            Say goodbye to the hassle of searching through multiple stores! Our
            user-friendly platform allows you to search for your favorite
            products from the comfort of your home
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default FeatureCard;
