import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  const footerLinks = [
    {
      title: "Our Products",
      links: ["The Support Suite", "The Sales Suite", "Support", "Guide"],
    },
    {
      title: "Top Features",
      links: [
        "Ticketing System",
        "Knowledge Base",
        "Community Forums",
        "Help Desk Software",
      ],
    },
    {
      title: "Resources",
      links: ["Product Support", "Request Demo", "Library", "Peoplepower Blog"],
    },
    {
      title: "Company",
      links: ["About Us", "Press", "Investors", "Events"],
    },
    {
      title: "Favourite Things",
      links: [
        "For Enterprise",
        "For Startups",
        "For Benchmark",
        "For Small Business",
      ],
    },
  ];

  return (
    <footer
      data-layername="base"
      className="flex flex-col items-center pt-14 w-full text-white bg-zinc-800 max-md:max-w-full"
    >
      <div className="flex flex-wrap gap-5 justify-center w-4/5 whitespace-nowrap max-w-[1140px] max-md:max-w-full">
        <div
          data-layername="furniturepower"
          className="my-auto text-2xl font-bold tracking-normal"
        >
          FurniShop
        </div>
        <div className="flex gap-4 text-sm text-center">
          <a
            href="#instagram"
            className="px-5 w-16 h-16 bg-indigo-500 bg-blend-normal rounded-full flex items-center justify-center"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="#facebook"
            className="px-5 w-16 h-16 bg-indigo-500 bg-blend-normal rounded-full flex items-center justify-center"
            aria-label="Follow us on Facebook"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="#twitter"
            className="px-5 w-16 h-16 bg-indigo-500 bg-blend-normal rounded-full flex items-center justify-center"
            aria-label="Follow us on Twitter"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="#github"
            className="px-5 w-16 h-16 bg-indigo-500 bg-blend-normal rounded-full flex items-center justify-center"
            aria-label="Follow us on GitHub"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
      <div
        data-layername="shape"
        className="flex shrink-0 mt-12 max-w-full h-px bg-slate-200 w-[1140px] max-md:mt-10"
        id="contact"
      />
      <div className="flex flex-wrap gap-5 justify-center mt-16 w-full max-w-[1140px] max-md:mt-10 max-md:max-w-full">
        {footerLinks.map((column, index) => (
          <div key={index} className="flex flex-col">
            <h3
              data-layername={column.title.toLowerCase().replace(/\s+/g, "")}
              className="text-lg font-medium"
            >
              {column.title}
            </h3>
            <ul className="mt-6 text-sm leading-5">
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-2">
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        data-layername="shape"
        className="self-stretch px-16 py-5 mt-12 w-full text-sm leading-none text-center bg-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full"
      >
        © NameBrand 2022 - All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
