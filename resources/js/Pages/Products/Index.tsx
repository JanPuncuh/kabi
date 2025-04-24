import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {Product} from "@/types";
import ProductCard from "@/Components/ProductCard";

export default function Index({products}: { products: Product[] }) {
    return (
        <AuthenticatedLayout>
            <Head title="Izdelki"/>

            <div className="py-[30px]">
                <div className="mx-auto w-4/5">

                    <div className="mb-4 grid grid-cols-3 gap-8">
                        {products.slice(0, 3).map((product) => (
                            <ProductCard product={product} key={product.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
