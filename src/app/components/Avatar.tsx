'use client';

import Image from "next/image";

const Avatar = () => {
    return (
        <Image
            src="/images/avatar.jpg"
            alt="Avatar"
            width={30}
            height={30}
            className="rounded-full"
        ></Image>
    )
}

export default Avatar;