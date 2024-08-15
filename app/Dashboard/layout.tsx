"use client";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import DashNav from "../components/dashboard/dash-nav";
import { Inter } from "next/font/google";
import Links from "../components/dashboard/links";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [router]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <DashNav />
        </div>
        <div className="flex gap-4 px-10">
          {/* <div className="border-2 w-72 h-screen"><Links/></div> */}
          <div className="flex-1 border-2 h-screen">{children}</div>
        </div>
      </body> 
    </html>
  );
}
