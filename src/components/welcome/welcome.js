import icon from "../../assets/iconbw.png";

const Welcome = () => {
  return (
    <div
      className="container-fluid  d-flex flex-column justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="row d-flex flex-row justify-content-around h-50">

        <div className="col-4 border-light rounded shadow-sm p-5 bg-white d-flex flex-column justify-content-center">
          <h1>Welcome to Rahals admin panel!</h1>
          <h3>You can track your activity here. </h3>
        </div>
        <div className="col-4 d-flex flex-row justify-content-center  border-light rounded shadow-sm p-5 bg-white">
          <img src={icon} />
        </div>
      </div>
    </div>
  );
};
export default Welcome;
