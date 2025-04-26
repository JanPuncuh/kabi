import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import {Link, usePage} from '@inertiajs/react';
import {PropsWithChildren, ReactNode, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-[url(/public/storage/bg.png)]">

            <nav className="">
                <div className="mx-auto w-full sm:w-4/5">

                    <div className="hidden sm:block py-[30px]">
                        <Link href="/">
                            <ApplicationLogo className="block h-[60px] w-auto"/>
                        </Link>
                    </div>

                    <div
                        className="py-3 sm:py-0 sm:border-t-[3px] sm:border-[#ABE5FF] bg-gradient-to-b from-[#48C6EF] to-[#6F86D6] sm:rounded">

                        <div className="hidden sm:-my-px sm:flex ms-5">
                            <NavLink
                                className="ps-0"
                                href="#"
                            >
                                <FontAwesomeIcon className="text-white/[0.24] me-[10px]" icon={faHouse}/>
                                Domov
                            </NavLink>
                            <NavLink
                                href="#"
                            >
                                O nas
                            </NavLink>
                            <NavLink
                                href="#"
                            >
                                Kontakt
                            </NavLink>
                            <NavLink
                                href="#"
                            >
                                Pišite nam
                            </NavLink>
                            <NavLink
                                href={route('product.index')}
                                active={route().current()!.includes('product')}
                            >
                                Izdelki
                            </NavLink>
                        </div>

                        <div className="flex justify-between px-[10%] items-center sm:hidden">

                            <div className="">
                                <Link href="/">
                                    <ApplicationLogo
                                        className='block w-auto'/>
                                </Link>
                            </div>

                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown((previousState) => !previousState)
                                }
                                className="inline-flex items-center justify-center rounded-md p-3 text-white"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

                <div
                    className={
                        (showingNavigationDropdown ? 'block bg-white' : 'hidden') +
                        ' sm:hidden'
                    }
                >
                    <ResponsiveNavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                    >
                        Domov
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                    >
                        O nas
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                    >
                        Kontakt
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                    >
                        Pišite nam
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        href={route('dashboard')}
                        active={route().current()!.includes('product')}
                    >
                        Izdelki
                    </ResponsiveNavLink>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
