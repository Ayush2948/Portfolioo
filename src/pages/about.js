import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/me.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Education from "@/components/Education";

const about = () => {
  return (
    <>
      <Head>
        <title>Ayush | About</title>
        <meta
          name="description"
          content="A webpage describing about me and my background."
        ></meta>
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Code, Create, Innovate!"
            className="mb-16 !text-6xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start text-justify md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Bio
              </h2>
              <p className="font-medium">
                I am Ayush, currently a third-year undergraduate student at VIT Vellore.
                Motivated Computer Science student with a strong background in Data Structures and Algorithms,
                actively pursuing opportunities to apply expertise in DSA and foundational computer concepts to
                dynamic projects.
              </p>
              <p className="my-4 font-medium">
              I recently completed a 3-month internship at Algo Analytics as a DevOps intern, 
              gaining hands-on experience in deploying and maintaining 
              applications through various DevOps tools and practices.I addition to internship i completed 'AWS Cloud Practitioner' certification, 
              showcasing my cloud computing proficiency, and completed the 'Web Development Bootcamp,' 
              mastering the MERN stack for full-stack web application development.
              </p>

              <p className="my-4 font-medium">
                I've engaged in diverse projects using C++ and Java, 
                enhancing my grasp of lower-level constructs. 
                Simultaneously, I've honed my expertise in front-end development, 
                mastering frameworks such as React and Next.js, along with HTML, CSS, and JavaScript. 
                This skill set empowers me to craft user-centered interfaces, emphasizing both intuitiveness and functionality.
              </p>
              <p className="font-medium">
                I am enthusiastic about applying this diverse skill set to contribute 
                effectively to software development teams. With a foundation in cloud computing, 
                full-stack development, and lower-level programming, 
                I am poised to navigate the evolving landscape of software development, delivering high-quality, 
                innovative solutions.
              </p>
            </div>
            <div
              className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark
             bg-light p-8 dark:bg-dark dark:border-light md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Ayush"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Blog/>
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
