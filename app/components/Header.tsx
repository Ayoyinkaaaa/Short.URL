'use clients'
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Inknut_Antiqua } from 'next/font/google';
import Image from "next/image";
import { PiLinkSimpleBold } from "react-icons/pi";

const inknutAntiqua = Inknut_Antiqua({
    weight: ['400', '700'], // Specify the weights you want to include
    subsets: ['latin'],
  });


const links = ["Home, Features", "Pricing" ]
export default function Header()
{
    return <header className= "flex justify-between items-center px-[3%] py-[10px]" > 
        <div className = "font-bold  flex items-center">
          <PiLinkSimpleBold className='text-2xl border-blue-900 text-blue-900 ' />
          <h1 className={`${inknutAntiqua.className} text-blue-900 text-xl`}>ShortURL</h1>
        </div>
        <div>
            <nav>
                <ul className="flex gap-10 items-center">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                    <li>
                    <Button className="bg-blue-900 text-white p-5 rounded hover:bg-slate-400">
                  <Link href="/login">Login</Link>
                 </Button>
                 </li>
                </ul>
            </nav>
        </div>
    </header>

}
