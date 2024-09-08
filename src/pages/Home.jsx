import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./assets/hero.png')", backgroundSize: "100% 100%" }}>
          <div className="container max-w-[360px] mx-auto md:ml-auto md:px-4 md:px-6 md:max-w-[1440px]">
            <div className="flex justify-end">
              <div className="flex flex-col justify-center space-y-4 bg-white bg-opacity-20 p-6 rounded-xl max-w-[600px]">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                    Discover Amazing Products
                  </h1>
                  <p className="text-gray-700 md:text-xl">
                    Shop the latest trends and find incredible deals on our
                    curated selection of high-quality products.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    to="/shop"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 sm:px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
                  >
                    Shop Now
                  </Link>
                  <Link
                    to="/categories"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-4 sm:px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100"
                  >
                    Browse Categories
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Featured Products
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[1, 2, 3, 4].map((product) => (
                <div
                  key={product}
                  className="group relative overflow-hidden rounded-lg border"
                >
                  <img
                    alt={`Product ${product}`}
                    className="object-cover w-full h-60"
                    height="300"
                    src={`/placeholder.svg?height=300&width=300`}
                    width="300"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Product {product}</h3>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-bold">$99.99</span>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Newsletter
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with our latest products and exclusive offers.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    className="flex-1 px-4 py-2 border rounded-md"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
