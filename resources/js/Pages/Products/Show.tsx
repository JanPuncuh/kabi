import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {Product} from "@/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faPlus} from "@fortawesome/free-solid-svg-icons";

export default function Show({product}: { product: Product }) {

    return (
        <AuthenticatedLayout>
            <Head title="Izdelki"/>

            <div className="py-[30px]">
                <div className="mx-auto w-4/5">

                    <div className="flex gap-[30px]">
                        <img className="rounded-[5px] w-fit" src={'/storage/img.png'} alt=""/>

                        <div className="relative flex-1">
                            <h5 className="text-2xl text-[#262626]">{product.name}</h5>
                            <h6 className="text-xl text-[#686868]">{product.subtitle}</h6>
                            <p className="text-[13px] leading-[18px] text-[#686868] whitespace-pre-wrap mt-5">
                                {/*{product.description}*/}
                                {'Odstavek 1. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.\n' +
                                    '\n' +
                                    'Odstavek 2. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'}
                            </p>

                            <Link
                                href={route('product.index')}
                                className="absolute mt-[30px] inline-flex items-center px-[30px] py-3 text-[#5EA0E0] uppercase text-sm font-medium text-center border-2 border-[#5EA0E0] rounded-[5px]"
                            >
                                <FontAwesomeIcon icon={faChevronLeft} strokeWidth={2} className="me-1.5"/>
                                Nazaj na seznam
                            </Link>
                        </div>

                        <div>

                        </div>

                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
