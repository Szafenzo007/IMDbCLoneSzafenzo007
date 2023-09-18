import Link from 'next/link';
import React, { ReactNode } from 'react';


// Define the interface for props
interface MenuItemProps {
  title: string;
  address: string;
  Icon: any;
}

// Implement the component with the defined props interface
const MenuItem: React.FC<MenuItemProps> = ({ title, address, Icon }) => {
  return (
    <div className='mx-2'>
        
            <Link 
            href={address}
            className="mx-4 lg:mx-6 hover:text-red-700">
                <Icon className="text-2xl sm:hidden mx-4"/>
                <p className=" hidden sm:inline m-4">{title}</p>
            </Link>
              
    </div>
  );
};

export default MenuItem;
