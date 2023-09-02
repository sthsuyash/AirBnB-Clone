'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            src="/images/logo.png"
            alt="AirBnB Logo"
            className="cursor-pointer hidden md:block"
            onClick={() => router.push('/')}
            width={100}
            height={100}
        ></Image>
    )
}

export default Logo;