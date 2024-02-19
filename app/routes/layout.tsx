"use client"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
        setIsMounted(true);
  },[]);

  if(!isMounted){
      return null;
  }

  return (
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
  )
}
