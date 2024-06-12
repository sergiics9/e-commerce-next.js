export const revalidate = 60; // 60 segundos

import { redirect } from "next/navigation";

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <>
      <div className="py-36 bg-gray-300 rounded">
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
          <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
            <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
              <h1 className="text-4xl text-gray-700 font-bold md:text-5xl">
                Compra ahora y llevate hasta un{" "}
                <span className="text-blue-500">30% </span>
                <span className="text-4xl text-gray-700 font-bold md:text-5xl">
                  en productos de{" "}
                </span>
                <span className="text-4xl text-red-500 font-bold md:text-5xl">
                  Tesla
                </span>
              </h1>
              <p className="text-lg">
                Forme parte de las millones de personas de todo el mundo que
                utilizan el merch de Tesla!
              </p>
              <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
                >
                  <Link
                    className="block text-white font-semibold"
                    href={"/gender/men"}
                  >
                    Tienda
                  </Link>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
              <div className="col-span-2 row-span-4">
                <Image
                  src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/kushagra.webp"
                  className="rounded-full"
                  width="640"
                  height="960"
                  alt="shoes"
                  loading="lazy"
                />
              </div>
              <div className="col-span-2 row-span-2">
                <Image
                  src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp"
                  className="w-full h-full object-cover object-top rounded-xl"
                  width="640"
                  height="640"
                  alt="shoe"
                  loading="lazy"
                />
              </div>
              <div className="col-span-3 row-span-3">
                <Image
                  src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/daniel.webp"
                  className="w-full h-full object-cover object-top rounded-xl"
                  width="640"
                  height="427"
                  alt="shoes"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Title
        title="🌟 Articulos Populares 🌟"
        subtitle=""
        className="mb-2 text-center"
      />

      <ProductGrid products={products} />

      {/* <Pagination totalPages={totalPages} /> */}
    </>
  );
}
