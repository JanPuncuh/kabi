import Layout from '@/Layouts/Layout';
import {Head} from '@inertiajs/react';
import {Product} from "@/types";
import ProductCard from "@/Components/ProductCard";

export default function Index({products}: { products: Product[] }) {
    return (
        <Layout>
            <Head title="Izdelki"/>

            <div className="py-[30px]">
                <div className="mx-auto w-4/5">

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[30px]">
                        {products.map((product) => (
                            <ProductCard product={product} key={product.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
