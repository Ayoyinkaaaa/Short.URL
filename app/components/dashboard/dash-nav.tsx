'use clients'
import Link from 'next/link';
import {auth} from "@/app/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Inknut_Antiqua } from 'next/font/google';
import Image from "next/image";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaCircleUser } from "react-icons/fa6";
import { SlLogout } from "react-icons/sl";
import CreateLink from "../createLink";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const inknutAntiqua = Inknut_Antiqua({
    weight: ['400', '700'], // Specify the weights you want to include
    subsets: ['latin'],
  });


const links = ["Home, Features", "Pricing" ]
export default function DashNav()
{
    return <header className= "flex justify-between px-[3%] py-[10px] p-50 " > 
        <div className = "font-bold pb-5 flex items-center">
          <PiLinkSimpleBold className='text-2xl text-blue-900' />
          <h1 className={`${inknutAntiqua.className} text-blue-900`}>ShortURL</h1>
        </div>
        <div className='flex items-center gap-6'>
            <CreateLink/>
            <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                            <FaCircleUser className='text-3xl text-blue-900' />
                            <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <div className="flex flex-col gap-4">
                                    <div className='flex items-center gap-5'>
                                    <FaCircleUser className='text-3xl text-blue-900' />
                                    <div>
                                        <p>Ayoyinka</p>
                                        <p>Ayoyinka@gmail.com</p>
                                    </div>
                                    </div>
                                    <Button className='bg-blue-900' onClick= {()=>signOut(auth)}> Logout 
                                        <SlLogout />
                                        </Button>
                                </div>
                            </DropdownMenuItem>
                            
                        </DropdownMenuContent>
                    </DropdownMenu>
        </div>
        
    </header>

}