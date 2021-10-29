import Link from "next/link"
import React, { useState, useEffect } from 'react';
import { base_url, school_name } from '../SimpleState/auth'
import axios from 'axios';
import Layout from "../Component/Layout";

const AboutUs = ({ data_header }) => {

  const [data, setdata] = useState("")
  const get_base_url = base_url.use()
  const get_school_name = school_name.use()


  useEffect(() => {
    axios.get(`${get_base_url}/${get_school_name}/items/tabs?fields=title,heading,body,images.directus_files_id.data.full_url`)
      .then((response) => {


        if (response?.data?.data?.length > 0) {
          console.log(response.data);
          setdata(response.data.data[0])
          // response?.data?.data[0].map((data1,i)=>{
          //     setdata(data1) 
          //     console.log(data1);
          // })
          //   setdata(response) 
        }

      })
      .catch((error) => {
        console.log(error);
      })


  }, [])

  return (
    <Layout header_data={data_header}>
      <div
        className="mx-3 "
      >
        <img
          className="w-full "
          src="https://rosemarydn.com/images/upper.png"
        />
        <div className="leading-[ 22.5px] font-normal">
          <h5 className="text-center">
            {/* {data?.heading || "About School"} */}
            About us

          </h5>
          <p className="mb-0">
          Vidya Bharti Hr. Sec. School was founded in 1982 and this group of schools is run by Mr Devendra Singh Ji. Our institution is recogniged by the Madhya Pradesh Board of education. Core values The School District believes that an effective school is one that:Sets high expectations and places student needs above all else. These student needs include academic, aesthetic, emotional and social, as well as safety, physical comfort, health, and self-esteem. Has a quality instructional program that develops positive interpersonal skills, prepares students to be responsible, well informed citizens with high moral and ethical standards, creative problem solvers, effective communicators in a technological society, and promotes lifelong growth.Promotes active parent involvement in the child’s total well-being. Encourages, values and respects students, staff, parent, and community participation in decision making.
          </p>
        </div>
        <div className="leading-[ 22.5px] font-normal">
          <h5 className="text-center">
            {/* {data?.heading || "About School"} */}
            Core values

          </h5>
          <p className="mb-0">
          The School District believes that an effective school is one that:Sets high expectations and places student needs above all else. These student needs include academic, aesthetic, emotional and social, as well as safety, physical comfort, health, and self-esteem. Has a quality instructional program that develops positive interpersonal skills, prepares students to be responsible, well informed citizens with high moral and ethical standards, creative problem solvers, effective communicators in a technological society, and promotes lifelong growth.Promotes active parent involvement in the child’s total well-being. Encourages, values and respects students, staff, parent, and community participation in decision making.
          </p>
        </div>
        <div className="leading-[ 22.5px] font-normal">
          <h5 className=" ">
            {/* {data?.heading || "About School"} */}
            VISION 

          </h5>
          <p className="mb-0 ">
          100% Student Success
          </p>
        </div>
        <div className="leading-[ 22.5px] font-normal">
          <h5 className="">
            {/* {data?.heading || "About School"} */}
            MISSION 

          </h5>
          <p className="mb-0  ">
          Educate and prepare each student for a life of purpose
          </p>
        </div>  
        <div className="leading-[ 22.5px] font-normal">
          <h5 className=" ">
            {/* {data?.heading || "About School"} */}
            CORE VALUES

          </h5>
          <p className="mb-0  ">
          Commitment to children, families and the community
          </p>
        <ul className="list-disc ml-5">
          <li> Making decisions and committing resources to attain each student’s success</li>
          <li> Establishing positive relationships based on trust and respect</li>
          <li> Seeking out and connecting with families and community Respectful and caring relationships</li>
          <li>Valuing the contributions of all stakeholders</li>
          <li>Understanding individual differences</li><li> Capitalizing on the beneficial value these differences bring to our school</li>
          <li>Developing age respectful expectations of students</li><li>Honoring the values, rights and responsibilities of each individual</li>

        </ul>

        </div>


        <img
          className="w-full"
          src="https://rosemarydn.com/images/under.png"
        />
      </div>
    </Layout>
  );

}

export default AboutUs;


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
