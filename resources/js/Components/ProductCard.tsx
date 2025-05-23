import {HTMLAttributes} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Product} from "@/types";
import ProductLink from "@/Components/ProductLink";

export default function ProductCard({
    product,
    className = '',
    children,
    ...props
}: HTMLAttributes<HTMLDivElement> & { product: Product }) {

    return (
        <div
            {...props}
            style={{boxShadow: '0 3px 10px 0 rgba(0,0,0,0.05)'}}
            className="flex flex-col justify-between rounded bg-white"
        >

            <div>
                <div>
                    <img className="w-full" src={'/storage/img.png'} alt=""/>
                </div>

                <div className="h-96 px-[30px] py-5">

                    <h5 className="text-2xl text-kabi-black font-bold uppercase">{product.name}</h5>

                    <h6 className="text-xl text-kabi-gray">{product.subtitle}</h6>

                    <p className="mt-5 text-xs line-clamp-[14] text-kabi-gray whitespace-pre-wrap">
                        {product.description}
                        {/*{'Odstavek 1. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.\n' +*/}
                        {/*    '\n' +*/}
                        {/*    'Odstavek 2. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'}*/}
                    </p>
                </div>
            </div>

            <div className="px-[30px] pb-5">
                <ProductLink href={route('product.show', product.id)}>
                    <FontAwesomeIcon icon={faPlus} className="me-[5px]"/>
                    Več o izdelku
                </ProductLink>
            </div>
        </div>
    );
}
