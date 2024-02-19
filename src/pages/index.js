import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import BrandingImage from "../../public/images/profile/home-pic.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayush Patil</title>
        <meta name="description" content="Developer's portfolio" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={BrandingImage}
                alt="Ayush Logo"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi, I'm Ayush"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                A versatile Software Engineer with knowledge across a multitude
                of technologies and programming languages. Explore my latest
                projects, showcasing my expertise in software engineering.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg 
                  text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid 
                  border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark 
                  hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className="w-auto h-auto ml-1" />
                </Link>
                <Link
                  href="mailto:patilayush.2948@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-16 flex items-center justify-center">
            <h1 className="font-medium text-2xl lg:mt-5 lg:text-xl sm:text-sm">
              Engineer &nbsp; | &nbsp; Developer &nbsp; | &nbsp; Programmer
            </h1>
          </div>
        </Layout>
      </main>
    </>
  );
}
