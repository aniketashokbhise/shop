import { useEffect, useState } from "react";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";
import ProductCard from "../comman/ProductCard";
import axios from "axios";



function Home() {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([])
  const [feature_product, setFeature_Product] = useState([])
  const [new_product, setNew_Product] = useState([])
  const [selling_product, setSelling_Product] = useState([])
 
  useEffect(()=>{
    axios.get("https://a2zithub.org/dairy/abi/slider_det").then((res)=>{
      console.log("server log",res.data)
      setSlides(res.data)
    })
  })

  useEffect(() => {
    if (slides.length === 0) return;

    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(slider);
  }, [slides]);


useEffect(() => {
  axios.get("https://a2zithub.org/dairy/abi/feature_product").then((res) => {
    setFeature_Product(res.data);
  });
}, []);

useEffect(() => {
  axios.get("https://a2zithub.org/dairy/abi/new_product").then((res) => {
    setNew_Product(res.data);
  });
}, []);

useEffect(() => {
  axios.get("https://a2zithub.org/dairy/abi/best_selling_product").then((res) => {
    setSelling_Product(res.data);
  });
}, []);

  return (
    <>
      <Navbar />

      {/* Hero Slider */}
      <section className="relative h-[300px] md:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.slider_tbl_id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <a href={slide.slider_btn} target="_blank">
            <img
              src={slide.slider_img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            </a>
          </div>
        ))}

        {/* Dots */}
        {slides.length > 0 && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  current === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           
           {feature_product.map((val, index)=>(
             <ProductCard data={val} />
           ))}
      

          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            New Arrivals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

           
               
           {new_product.map((val, index)=>(
             <ProductCard data={val} />
           ))}
          </div>
        </div>
      </section>

      {/* Best Selling */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Best Selling Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
           {selling_product.map((val, index)=>(
             <ProductCard data={val} />
           ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;