import Layout from '@/Layouts/Layout';
import {Head} from '@inertiajs/react';
import {Product} from "@/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import ProductLink from "@/Components/ProductLink";

export default function Show({product}: { product: Product }) {

    return (
        <Layout>
            <Head title={product.name}/>

            <div className="py-[30px]">
                <div className="mx-auto w-4/5">

                    <div className="block sm:flex gap-[30px]">
                        <div>
                            <img className="rounded w-full" src={'/storage/img.png'} alt=""/>
                        </div>

                        <div className="flex-1">
                            <h5 className="mt-4 sm:mt-0 text-2xl text-kabi-black font-bold uppercase">{product.name}</h5>
                            <h6 className="text-xl text-kabi-gray">{product.subtitle}</h6>
                            <p className="text-xs text-kabi-gray whitespace-pre-wrap mt-5">
                                {product.description}
                                {/*{'Odstavek 1. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.\n' +*/}
                                {/*    '\n' +*/}
                                {/*    'Odstavek 2. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'}*/}
                            </p>

                            <ProductLink href={route('product.index')} className="mt-[30px]">
                                <FontAwesomeIcon icon={faChevronLeft} className="me-1.5"/>
                                Nazaj na seznam
                            </ProductLink>
                        </div>

                        <div>

                        </div>

                    </div>

                </div>
            </div>
        </Layout>
    );
}
