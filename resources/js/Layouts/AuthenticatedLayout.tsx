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
    const user = usePage().props.auth.user;

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

                        <div className="hidden sm:-my-px sm:flex ms-4">
                                <div>
                                    <FontAwesomeIcon className="text-white/[0.24]" icon={faHouse} />
                                    <NavLink
                                        className="ps-[10px]"
                                        href="#"
                                        active={route().current('dashboard')}
                                    >
                                        Domov
                                    </NavLink>
                                </div>
                                <NavLink
                                    href="#"
                                    active={route().current('dashboard')}
                                >
                                    O nas
                                </NavLink>
                                <NavLink
                                    href="#"
                                    active={route().current('dashboard')}
                                >
                                    Kontakt
                                </NavLink>
                                <NavLink
                                    href="#"
                                    active={route().current('dashboard')}
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
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden'
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
