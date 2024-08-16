'use client';
// import Logo from "../component/sidebar";
import { useState, useEffect, ReactNode } from "react";
import { GiNetworkBars } from "react-icons/gi";
import {LinkDetails} from "@/app/lib/type"
import { handleGetLinks } from "@/app/lib/action";
import { FaEye } from "react-icons/fa";
import Link from "next/link"


// eslint-disable-next-line @next/next/no-async-client-component
export default function Links() {
  const [link, setLink] = useState<LinkDetails[] | null>(null);
  useEffect(() => {
    const fetchedLink = async () => {
      const links = await handleGetLinks();
      const ascLink = links.sort((a,b) => b.createdAt?.toDate()?.getTime() - a.createdAt?.toDate()?.getTime() );
      setLink(ascLink);
      console.log(links);
    };
    fetchedLink(); // Call the function to fetch data when the component mounts
  }, []);

 
  return (
    <div className="mb-32 md:mb-4">
      <h1 className="font-bold text-3xl text-center my-2">
        Links
      </h1>
      <div>
      {link && link.map((item, index) => (
        <div key={index} className="flex gap-28 p-4 my-5 shadow-lg items-center justify-between mt-4">
          <div className="flex-1 mb-2 my-2 flex flex-col gap-3">
            <p className="text-2xl font-bold underline">{item.name}</p>
            <div className="w-56">
              <p className="truncate text-current text-sm">{item.link}</p>
            </div>
            <a href={`/${item.shortLink}`} target="blank">
              <p className="text-xs font-medium">short-url-two-bay.vercel.app/{item.shortLink}</p>
            </a>
            <p className="text-xs font-light">{item.createdAt.toDate().toDateString()}</p>
          </div>
          <div>
            <p className="text-sm font-bold">{item.clicks}</p>
            <FaEye className="text-green-800 text-lg font-extrabold" />
          </div>
        </div>
      ))}
      </div>
    </div>
  );

}