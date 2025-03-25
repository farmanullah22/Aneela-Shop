import React, { useState, useEffect } from "react";
import './HomeHero.css';
import CustomerReviews from "./CustomerReviews";


const products = [
    { id: 1, name: "Alo Paratha", price: 330, image: "/images/ItemImg/1.jpg" },
    { id: 2, name: "Chicken Pops", price: 800, image: "/images/ItemImg/2.jpg" },
    { id: 3, name: "Crispy Chicken Strips", price: 850, image: "/images/ItemImg/3.jpg" },
    { id: 4, name: "Crispy Chicken Strips", price: 850, image: "/images/ItemImg/4.jpg" },
    { id: 5, name: "Crispy Chicken Strips", price: 850, image: "/images/ItemImg/3.jpg" },
    { id: 6, name: "Crispy Chicken Strips", price: 850, image: "/images/ItemImg/3.jpg" },
    { id: 7, name: "Crispy Chicken Strips", price: 850, image: "/images/ItemImg/3.jpg" },
    { id: 8, name: "Crispy Chicken Strips", price: 850, image: "/images/ItemImg/3.jpg" },
];

const Product = () => {
    const [quantities, setQuantities] = useState(
        products.reduce((acc, product) => {
            acc[product.id] = 1;
            return acc;
        }, {})
    );

    const [menuOpen, setMenuOpen] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            setShowScroll(window.scrollY > 300);
        };
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navigateTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>

        
            <section id="shop" className="shop-section">
            <h2 className="shop-head-text">Featured Products</h2>
                <div className="product-list">
                    {products.map((product) => (
                        <div className="product" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">Rs {product.price}</p>
                            <button className="add-to-cart">Add to cart</button>
                        </div>
                    ))}
                </div>
            </section>

            <CustomerReviews />
            
        </div>
    );
};

export default Product;
