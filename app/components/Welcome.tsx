import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function Welcome()

{

    return <div className="py-20 flex justify-center">
        <div className="max-w-3xl text-center ">
            <h1 className="font-bold text-4xl ">
            <span className="text-blue-900 ">Simplify Your Links, </span>Amplify Your Impact
                </h1>
            <p className="mt-4 font-light">
             ShortURL makes it easy to shorten, customize, 
            and track your URLs. Whether you&apos;re sharing on social media, in emails. 
            Our platform ensures your links are clean, concise, and memorable.
            </p>

            <Link href="/signup"><Button className="bg-blue-900 mt-10 px-10 py-5">Get Started</Button></Link>
        </div>
    </div>
}