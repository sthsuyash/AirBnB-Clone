'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import { useCallback, useState } from 'react';
import Avatar from '../Avatar';
import MenuItems from './MenuItems';

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    /* The `useCallback` hook is used to memoize a function so that it is not recreated on every
    render. In this case, the `toggleOpen` function is memoized using `useCallback`. */
    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
                    onClick={() => { }}
                >AirBnB your home
                </div>
                <div
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow:md transition"
                ><AiOutlineMenu />
                    <div className='hidden md:block'><Avatar /></div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="absolute rounded-xl shadow-md w-fit my-2 mx-5 p-3 bg-white overflow-hidden -right-5 top-12 text-sm"
                >
                    <div
                        className="flex flex-col cursor-pointer"
                    >
                        <>
                            <MenuItems onClick={() => { }} label='Login' classname="rounded-xl" />
                            <MenuItems onClick={() => { }} label='Register' classname="rounded-xl" />
                        </>
                    </div>
                </div>
            )}
        </div >
    )
}

export default UserMenu;