import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {

    return (
        <Link
            {...props}
            style={{textShadow: '0 1px 0 rgba(0,0,0,0.30)'}}
            className={
                'text-white font-bold inline-flex items-center px-[24px] my-[10px] py-[3px] leading-[22px] border-r border-black/[0.14] text-shadow-2xs ' +
                (active
                    ? 'uppercase font-extrabold'
                    : '') +
                className
            }
        >
            {children}
        </Link>
    );
}
