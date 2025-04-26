import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={`flex w-full items-start border-l-4 py-4 px-[10%] ${
                active
                    ? 'uppercase border-[#48C6EF] bg-gradient-to-r from-[#48C6EF] to-[#6F86D6] text-white'
                    : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800'
            } text-base font-medium transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
