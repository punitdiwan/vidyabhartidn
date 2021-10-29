import React, { Component } from "react";
import Layout from "../Component/Layout";

const Contactus = ({data_header}) => {


  console.log(data_header)
  return (
    <Layout  header_data={data_header}>
      <div className="flex flex-col mb-10 lg:mx-28 pt-20 ">
        <div className="bg-[#e8ecef]   md:mx-4  text-base rounded-xl flex   p-[70px]  align-middle justify-center" >
          <h1 className="text-6xl font-bold">Contact us</h1>
        </div>
        <div className="mt-[15px] lg:mx-16 px-6     flex md:flex-row flex-col">
          <iframe className=" md:w-[600px] md:h-[450px] "
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7329.708064163802!2d77.419993!3d23.284753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42104454ff834667!2sVidya%20Bharti%20Hr.%20Sec.%20School!5e0!3m2!1sen!2sin!4v1635158964930!5m2!1sen!2sin"

            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="md:px-[40px] px-10 mt-4" >
            <legend
              className="text-[#212529] font-normal leading-relaxed text-base md:w-[350px]"
            >
              School: 
            </legend>
            <hr className="md:w-[350px]" />
            <strong>Address.</strong>
            <address className="md:w-[350px] text-black">
            {data_header?.data? data_header?.data[0]?.address : "  Maitretech School Bhopal"}
              {/* Dwarka Nagar , Nisatpura , Bhopal-462010 Phone: 0755-2740018 */}
            </address>
            <div>phone: {data_header?.data? data_header?.data[0]?.phone : "111111211"}</div>
            <strong>Email:</strong>
            <address className="text-black">
              <a>
              {data_header?.data? data_header?.data[0]?.email : "maitretech@example.com"}
                {/* rosemarydwarka@gmail.com */}
                </a>
            </address>
          </div>
        </div>
      </div></Layout>
  );

}

export default Contactus;


export async function getStaticProps(context) { 
  let data_header 

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)
 
    data_header = await response.json()  
  } 
  catch (error) {
    data_header = false 
  } 
  return {
    props: { data_header },
    revalidate: 2, // will be passed to the page component as props
  }
}
