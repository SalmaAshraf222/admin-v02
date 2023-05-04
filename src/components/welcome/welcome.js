const Welcome = () => {
  return (
    <div
      className="container-fluid  d-flex flex-column justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="row d-flex flex-row justify-content-around h-50">
        <div className="col-4 border-light rounded shadow p-5">
          <h1>Welcome to Rahals admin panel!</h1>
          <h3>You can track your activity here. </h3>
        </div>
        <div className="col-4 d-flex flex-row justify-content-center  border-light rounded shadow p-5">
          <h1 >LOGO HERE</h1>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
