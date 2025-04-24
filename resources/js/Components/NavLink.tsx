import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {

    // todo change font and bold font

    return (
        <Link
            {...props}
            className={
                'text-white inline-flex items-center px-[24px] my-[10px] py-[3px] leading-[22px] border-r border-black/10 text-shadow-2xs ' +
                (active
                    ? 'uppercase'
                    : '') +
                className
            }
        >
            {children}
        </Link>
    );
}
