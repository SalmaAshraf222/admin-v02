import icon from "../../assets/icon2.png";

const Welcome = () => {
  return (
    <div
      className="container-fluid  d-flex flex-column justify-content-center  "
      style={{ height: "100vh" }}
    >
      <div className="row d-flex flex-row justify-content-around h-50">

         <div className=" col-lg-4 mt-lg-5" 
          style={{
            color:"#8F9090",
         
          }}>
          <h1 className="mt-lg-5">Welcome to Rahals admin panel!</h1>
          <h3 className="mt-lg-5">You can track your activity here. </h3>
        </div>

        <div className="col-lg-4" >
<img  src={icon}
style={{height:"400px"}}/>
        </div>

      </div>
    </div>
  );
};
export default Welcome;
