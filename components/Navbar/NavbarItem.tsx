'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";


interface NavbarItemProps {
    title: string;
    param: string; // Assuming param is a string
  }
  
  const NavbarItem: React.FC<NavbarItemProps> = ({ title, param }) => {

    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
    return (
      <div className="flex">
        <Link 
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
            genre &&
            genre === param &&
            "underline underline-offset-8 decoration-4  decoration-red-600 rounded-lg"
          }`}
        href={`/?genre=${param}`}>
        <h1>{title}</h1>
        </Link>
      </div>
    );
  };
  
  export default NavbarItem;
