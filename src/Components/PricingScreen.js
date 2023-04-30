import { Button } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
import Spinner from "react-bootstrap/Spinner";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import "../Styles/Pricing.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc, onSnapshot } from "firebase/firestore";

function PricingScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

 
  console.log(products);

 
  return (
    <div className="pricing">
      <h2>Our pricing</h2>
      <h3>You can book the following services</h3>
      <div className="pricing__container">
        {Object.entries(products)
          .slice(0, 3)
          .map(([productId, productData]) => {
            return (
              <div key={productId} className="pricing__content">
                <h4>{productData.name}</h4>
                <h5>{productData.description}</h5>
                <img
                  style={{ marginTop: "40px" }}
                  src={productData.images}
                  alt=""
                />
                {!user ? (
                  <Button onClick={() => { navigate("/login") }}>
                    sign In to book
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      load();
                    }}
                    disabled={loading}
                    variant="outlined"
                    color="secondary"
                  >
                    {loading && (
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    )}{" "}
                    Book Now{" "}
                  </Button>
                )}
              </div>
            );
          })}
      </div>

      <Button
        color="secondary"
        variant="outlined"
        onClick={() => navigate("/pricing")}
      >
        View More Pricing
      </Button>
    </div>
  );
}

export default PricingScreen;
