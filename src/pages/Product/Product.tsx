import {Await, useLoaderData} from "react-router-dom";
import {ProductInterface} from "../../interfaces/product.interface.ts";
import {Suspense} from "react";

export const Product = () => {
    const data = useLoaderData() as { data: ProductInterface };
    return (
        <div>
            <Suspense fallback={'Loading'}>
                <Await resolve={data.data}>
                    {({data}: { data: ProductInterface }) => (
                        <> Product - {data.name}</>
                    )}
                </Await>
            </Suspense>
        </div>
    );
};
