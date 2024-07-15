import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "John Smith",
      image: "/assets/people-1.png",
      city: "New York",
      country: "USA",
      rating: "5.0",
      testimoni:
        "Scripto's web applications have transformed our business operations. Their solutions are not only intuitive and efficient but also scalable, allowing us to grow seamlessly.",
    },
    {
      name: "Alice Johnson",
      image: "/assets/people-2.png",
      city: "London",
      country: "UK",
      rating: "4.8",
      testimoni:
        "Choosing Scripto was one of the best decisions we made. Their team delivered a responsive and user-friendly design that significantly enhanced our customer engagement.",
    },
    {
      name: "Paul Johns ",
      image: "/assets/people-3.png",
      city: "Barcelona",
      country: "Spain",
      rating: "4.7",
      testimoni:
        "Scripto's support has been exceptional. They not only developed a robust backend for us but also provided ongoing maintenance that ensures our platform runs smoothly.",
    },
    {
      name: "John Smith",
      image: "/assets/people-1.png",
      city: "New York",
      country: "USA",
      rating: "5.0",
      testimoni:
        "Scripto's web applications have transformed our business operations. Their solutions are not only intuitive and efficient but also scalable, allowing us to grow seamlessly.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="block w-4 h-4 mx-2 transition-all rounded-l-full rounded-r-full cursor-pointer "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="flex items-stretch px-3" key={index}>
            <div className="flex flex-col p-8 transition-all border-2 border-gray-500 rounded-lg hover:border-orange-500">
              <div className="flex flex-col items-stretch w-full xl:flex-row xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg capitalize text-black-600">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm capitalize text-black-500">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-none order-1 ml-auto xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex items-center justify-end w-full">
        <div className="flex justify-between flex-none w-auto mt-14">
          <div
            className="flex items-center justify-center mx-4 text-orange-500 transition-all bg-white border border-orange-500 rounded-full cursor-pointer h-14 w-14 hover:bg-purple-500 hover:text-white-500"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="w-6 h-6 " />
          </div>
          <div
            className="flex items-center justify-center text-orange-500 transition-all bg-white border border-orange-500 rounded-full cursor-pointer h-14 w-14 hover:bg-purple-500 hover:text-white-500"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="w-6 h-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
