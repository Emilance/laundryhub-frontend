import { Button } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
import Spinner from "react-bootstrap/Spinner";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import { db } from "../firebase";
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

  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, "products"), where("active", "==", true));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (productDoc) => {
        products[productDoc.id] = productDoc.data();

        const priceSnap = await getDocs(collection(productDoc.ref, "prices"));
        priceSnap.docs.forEach((price) => {
          products[productDoc.id].prices = {
            priceId: price.id,
            priceData: price.data(),
          };
        });
      });
      setProducts(products);
    }
    fetchData();
  }, []);
  console.log(products);

  const loadCheckOut = async (priceId) => {
    try {
      const checkoutSessionsCollection = collection(db, "customers", user?.uid, "checkout_sessions");
      const newCheckoutSession = await addDoc(checkoutSessionsCollection, {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
  
      const unsubscribe = onSnapshot(newCheckoutSession, async (snap) => {
        const { error, sessionId } = snap.data();
  
        if (error) {
          alert(`Error occurred: ${error.message}`);
        }
  
        if (sessionId) {
          const stripe = await loadStripe("pk_test_51JEYJpJa0zMXSN18IBHbwMzqLlJq6jsvxJtD8yfzD7MBFx8FttPSWKsRFJz4BVhjja8PL2j9yadtLTIIYRLdtk7200NeFqEB2J");
          stripe.redirectToCheckout({ sessionId });
        }
      });
  
      return unsubscribe;
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  }
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
                      loadCheckOut(productData.prices.priceId);
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
