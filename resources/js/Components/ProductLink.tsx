import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function ProductLink({
    className = '',
    children,
    ...props
}: InertiaLinkProps) {

    return (
        <Link
            {...props}
            className={
                'inline-block px-[30px] py-[13px] text-kabi-blue font-bold uppercase text-xs text-center border-2 border-kabi-blue rounded ' +
                className
            }
        >
            {children}
        </Link>
    );
}
