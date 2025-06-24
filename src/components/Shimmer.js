const Shimmer = () => {
  return (
    <div className="shimmer_restaurant_list">
      {Array(30).fill("").map((e,index)=> <div className="shimmer_image" key={index}>
       
      </div>)}
       
      
    </div>
  );
};

export default Shimmer;
