import mylogo from '@/public/mylogo.svg';
import Image from 'next/image';
export default function Logo(){

    return(
        <>
        <Image src={mylogo} alt="My Logo" className="h-16 w-auto"/>
        </>
    )
}