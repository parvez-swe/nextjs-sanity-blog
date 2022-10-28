import React from "react";
import Image from "next/image";
import myblogimage from "../public/background.jpg";
import sanityClient from "../client/client";
import { ImageUrlBuilder } from "@sanity/image-url";

const Home = ({blogs}) => {
  const builder = ImageUrlBuilder(sanityClient);
  function urlFor(sanityClient){
  return builder.image(sanityClient);
  }

  return (
    <div>
      <div className="bg-red-500 text-white font-bold">Nav</div>
      <main className="blogs text-center  ">
        {console.log(blogs)}
        {blogs.map((blog) => {
          return (
            <div className="blg inline-block bg-slate-300 shadow-slate-700 shadow-lg m-4">
              <div className="image relative w-[20rem] ">
                <Image src={`${builder.image(blog.image).width(200).url()}`} alt="image" layout="fill" />
              </div>
              <h1 className="text-xl font-bold text-slate-700">{blog.title}</h1>
              <p className="text-sm">Content.........</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const blogQuery = '*[_type=="blog"]';
  const blogs = await sanityClient.fetch(blogQuery);

  return {
    props: {
      blogs,
    },
  };
};

export default Home;
