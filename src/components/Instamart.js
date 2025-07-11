import React, { useState } from "react";

const Section = ({ name, description, isVisible, setIsVisible }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 m-4 border border-slate-200 hover:border-amber-300">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">{name}</h2>
        {isVisible ? (
          <button
            className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Hide
          </button>
        ) : (
          <button
            className="cursor-pointer bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md"
            onClick={() => {
              setIsVisible(true);
            }}
          >
            Show
          </button>
        )}
      </div>
      
      {isVisible && (
        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-slate-600 leading-relaxed text-lg">{description}</p>
        </div>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Instamart
          </h1>
          <p className="text-xl text-slate-600 font-medium">
            Quick Grocery Delivery
          </p>
        </div>
        
        <Section
          name="About Instamart"
          description={
            "Instamart is your one-stop solution for instant grocery delivery. We bring fresh groceries, daily essentials, and household items right to your doorstep within minutes. Our mission is to make grocery shopping convenient, fast, and hassle-free. With a wide range of products from trusted brands and local vendors, we ensure quality and freshness in every order. Our dedicated team works around the clock to provide you with the best shopping experience, whether you need fresh vegetables, pantry staples, or last-minute dinner ingredients."
          }
          isVisible={visibleSection === "about"}
          setIsVisible={() => {
            setVisibleSection(visibleSection === "about" ? "" : "about");
          }}
        />
        
        <Section
          name="Our Products"
          description={
            "We offer an extensive range of products to meet all your daily needs. Our inventory includes fresh fruits and vegetables sourced directly from farms, dairy products with guaranteed freshness, packaged foods from top brands, personal care items, household cleaning supplies, and much more. We also feature organic and health-conscious options for those who prefer natural products. Our product categories span across groceries, beverages, snacks, frozen foods, baby care, pet supplies, and seasonal items. Every product is carefully selected to ensure quality and value for money."
          }
          isVisible={visibleSection === "product"}
          setIsVisible={() => {
            setVisibleSection(visibleSection === "product" ? "" : "product");
          }}
        />
        
        <Section
          name="Contact & Support"
          description={
            "Getting in touch with us is easy! Our customer support team is available 24/7 to assist you with any queries or concerns. You can reach us through multiple channels: call our helpline at 1800-INSTAMART, send us an email at support@instamart.com, or use our in-app chat feature for instant assistance. We also have dedicated social media teams on Facebook, Twitter, and Instagram for quick responses. For business partnerships or vendor inquiries, please contact our business development team. We value your feedback and continuously work to improve our services based on your suggestions."
          }
          isVisible={visibleSection === "contact"}
          setIsVisible={() => {
            setVisibleSection(visibleSection === "contact" ? "" : "contact");
          }}
        />
        
        <Section
          name="Delivery Information"
          description={
            "We pride ourselves on lightning-fast delivery times. Most orders are delivered within 10-30 minutes, depending on your location and order size. Our delivery network covers major cities and suburban areas, with plans to expand to more locations soon. We offer flexible delivery slots including early morning, late evening, and weekend deliveries. Our delivery partners are trained professionals who handle your orders with care. Track your order in real-time through our app and get updates at every step. Free delivery is available on orders above ₹199, and we also offer express delivery for urgent requirements."
          }
          isVisible={visibleSection === "delivery"}
          setIsVisible={() => {
            setVisibleSection(visibleSection === "delivery" ? "" : "delivery");
          }}
        />
        
        <Section
          name="Pricing & Offers"
          description={
            "We believe in transparent and competitive pricing. Our prices are regularly updated to reflect market rates while ensuring affordability. We offer various discount schemes including first-time user discounts, bulk order savings, seasonal promotions, and loyalty rewards. Premium members enjoy additional benefits like free delivery, exclusive deals, and priority customer support. We also have special pricing for students, senior citizens, and healthcare workers. Keep an eye on our app for flash sales, weekend specials, and festival offers that can save you significant amounts on your grocery bills."
          }
          isVisible={visibleSection === "pricing"}
          setIsVisible={() => {
            setVisibleSection(visibleSection === "pricing" ? "" : "pricing");
          }}
        />
      </div>
    </div>
  );
};

export default Instamart;