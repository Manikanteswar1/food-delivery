import React, { useState } from "react";
const Section = ({ name, description,isVisible,setIsVisible }) => {
  return (
    <div className="border-2 p-2 m-2">
      <h2 className="text-2xl">{name}</h2>
      {isVisible ? (
        <button
          className="cursor-pointer"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          hide
        </button>
      ) : (
        <button
          className="cursor-pointer"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setvisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-4xl font-bold">Instamart</h1>
      <Section
        name="About"
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={visibleSection==="about"}
        setIsVisible={()=>{
          setvisibleSection(visibleSection==="about"?"":"about")
        }}
      />
      <Section
        name="product"
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={visibleSection==="product"}
        setIsVisible={()=>{
          setvisibleSection(visibleSection==="product"?"":"product")
        }}
      />
      <Section
        name="contact"
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={visibleSection==="contact"}
        setIsVisible={()=>{
          setvisibleSection(visibleSection==="contact"?"":"contact")
        }}
      />
    </div>
  );
};

export default Instamart;
