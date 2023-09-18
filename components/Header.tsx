import Image from 'next/image'
import MenuItem from './MenuItem'

import {AiFillHome} from "react-icons/ai"
import {BsInfoCircleFill} from "react-icons/bs"
import { Button } from './ui/button'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'
 
export default function Header() {
  return (
  

            <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
          
                <div className='flex '>
                            <Image
                            src="/images/Puff1.png"
                            width={50}
                            height={50}
                            className=" animate-puls m-2 sm:rounded-t-lg 
                            group-hover:opacity-80 transition-opacity duration-200"
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                            }}
                            alt="image is not available"
                            ></Image>
                            <MenuItem title="HOME" address="/" Icon={AiFillHome}/>
                            
                            <MenuItem title="ABOUT" address="/about" Icon={BsInfoCircleFill}/>           
                    </div>
                    <div className="flex items-center space-x-4">
                        <div>
                            <DarkModeSwitch />
                        </div>
                        <Link href="">
                        <Button 
                            variant="outline"
                            className='bg-red-600/40 mr-2'>
                                <Image 
                                 height={6}
                                 width={6}
                                 alt="Puff"
                                className="mr-2 h-4 w-4"
                                src="/images/Puff1.png"
                                  />
                               <span className='font-bold text-2xl mr-1'>
                                PUFF
                                </span> 
                        <span className='text-xl hidden sm:inline'>Movies</span>
                        </Button>
                        </Link>

                    </div>
            </div>
  
  )
}
