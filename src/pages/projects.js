
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import proj1 from "../../public/images/projects/image1.jpg";
import proj2 from "../../public/images/projects/image2.jpg";
import proj3 from "../../public/images/projects/image3.png";
import proj4 from "../../public/images/projects/image4.png";
import proj5 from "../../public/images/projects/image5.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="group w-full flex items-center justify-between rounded-3xl 
    border border-solid border-dark bg-light shadow-xl p-12 relative rounded-br-2xl
    dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    transition-all duration-300 hover:shadow-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
      dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      transition-all duration-300" />
      
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={link}
        target="_blank"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </Link>
      
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link 
            className="w-10 transition-transform hover:scale-110" 
            href={github} 
            target="_blank"
          >
            <GithubIcon />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
            dark:bg-light dark:text-dark sm:px-4 sm:text-base
            transition-all duration-300 hover:bg-opacity-90 dark:hover:bg-opacity-90"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="group w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        transition-all duration-300 hover:shadow-xl"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <Image 
          src={img} 
          alt={title} 
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105" 
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            className="text-lg font-semibold underline md:text-base transition-colors hover:text-primary dark:hover:text-primaryDark"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          <Link 
            className="w-8 md:w-6 transition-transform hover:scale-110" 
            href={github} 
            target="_blank"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  
  const projectData = [
    {
      id: 1,
      featured: true,
      title: "AWS Automation with Terraform",
      summary: "Automated and modernized AWS infrastructure provisioning, improving setup efficiency, scalability, and security using Terraform.",
      link: "https://github.com/Ayush2948/Terraform-Architecture",
      type: "DevOps Project",
      img: proj1,
      github: "https://github.com/Ayush2948/Terraform-Architecture"
    },
    {
      id: 2,
      featured: false,
      title: "Library Management System",
      summary: "Java-based system to streamline book handling processes, with advanced search and user-friendly UI.",
      link: "https://github.com/Ayush2948/Library-Management-System",
      type: "Java Project",
      img: proj2,
      github: "https://github.com/Ayush2948/Library-Management-System"
    },
    {
      id: 3,
      featured: false,
      title: "LayerEdge - Layer 2 Crypto Exchange",
      summary: "Decentralized exchange using Polygon CDK and Layer 2 scaling. Includes smart contracts, on-chain transactions, and wallet integration.",
      link: "https://layer-edge-kbub.vercel.app/",
      type: "Blockchain Project",
      img: proj3,
      github: "https://github.com/Ayush2948"
    },
    {
      id: 4,
      featured: false,
      title: "TermsBuddy - Terms & Conditions Summarizer",
      summary: "Browser extension that summarizes Privacy Policies and Terms & Conditions using OpenAI, with real-time text extraction and secure backend.",
      link: "https://github.com/Ayush2948/TermsBuddy",
      type: "AI Tool",
      img: proj4,
      github: "https://github.com/Ayush2948/TermsBuddy"
    },
    {
      id: 5,
      featured: false,
      title: "CryptPay - Crypto Wallet Exchange",
      summary: "A crypto wallet exchange platform where users can connect wallets and securely exchange cryptocurrencies.",
      link: "https://crypto-exchange-two-rho.vercel.app/",
      type: "Web3 App",
      img: proj5,
      github: "https://github.com/Ayush2948/Crypto-Exchange"
    }
  ];

  // Get unique project types for filter
  const projectTypes = ["All", ...new Set(projectData.map(project => project.type))];
  
  // Filter projects based on selection
  const filteredProjects = filter === "All" 
    ? projectData.filter(project => !project.featured) 
    : projectData.filter(project => project.type === filter && !project.featured);
  
  const featuredProject = projectData.find(project => project.featured);

  return (
    <>
      <Head>
        <title>Ayush | Projects</title>
        <meta
          name="description"
          content="A showcase of my professional projects and development work."
        ></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Project Gallery"
            className="mb-8 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          
          {/* Filter options */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {projectTypes.map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${filter === type 
                  ? 'bg-primary text-light dark:bg-primaryDark' 
                  : 'bg-light text-dark dark:bg-dark dark:text-light border border-dark dark:border-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark'}`}
              >
                {type}
              </button>
            ))}
          </div>
          
          {/* Featured Project */}
          {featuredProject && (
            <div className="w-full mb-16">
              <h2 className="font-bold text-2xl mb-4 text-center text-primary dark:text-primaryDark">Featured Project</h2>
              <FeaturedProject
                title={featuredProject.title}
                summary={featuredProject.summary}
                link={featuredProject.link}
                type={featuredProject.type}
                img={featuredProject.img}
                github={featuredProject.github}
              />
            </div>
          )}
          
          {/* Project grid */}
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {filteredProjects.map(project => (
              <div key={project.id} className="col-span-6 sm:col-span-12">
                <Project
                  title={project.title}
                  summary={project.summary}
                  link={project.link}
                  type={project.type}
                  img={project.img}
                  github={project.github}
                />
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="w-full text-center mt-12">
              <p className="text-xl font-medium">No projects found in this category.</p>
            </div>
          )}
        </Layout>
      </main>
    </>
  );
};

export default ProjectsPage;
