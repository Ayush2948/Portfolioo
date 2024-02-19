import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium
    dark:text-light dark:border-light sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-center lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; Ayush Patil</span>
      </Layout>
    </footer>
  );
};

export default Footer;
