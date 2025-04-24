import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {Product} from "@/types";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Index({products}: { products: Product[] }) {
    return (
        <AuthenticatedLayout>
            <Head title="Izdelki"/>

            <div className="py-[30px]">
                <div className="mx-auto w-4/5">

                    {/*grid*/}
                    <div className="mb-4 grid grid-cols-3 gap-8">
                        {products.slice(0, 3).map((product) => (

                            // card
                            <div className="flex flex-col justify-between rounded-md bg-white shadow-md">

                                {/*image*/}
                                <div>

                                    <div>
                                        <img className="w-full" src={'/storage/img.png'} alt=""/>
                                    </div>

                                    {/*content*/}
                                    <div className="px-8 py-5">

                                        <h5>
                                            {product.name}
                                        </h5>

                                        <h6>
                                            {product.subtitle}
                                        </h6>

                                        <p className="whitespace-pre-wrap">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>


                                <div className="px-8 pb-5">
                                    <Link
                                        href={route('product.show', product.id)}
                                        className="inline-block px-8 py-3 text-[#5EA0E0] uppercase text-sm font-medium text-center border-2 border-[#5EA0E0] rounded-[5px]"
                                    >
                                        <FontAwesomeIcon icon={faPlus} className="me-[5px]"/>
                                        Več o izdelku
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
