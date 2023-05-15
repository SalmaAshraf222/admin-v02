import "bootstrap/dist/css/bootstrap.min.css";

const Pag = () => {
  return (
    <div className=" d-flex flex-row justify-content-center ">
    <nav className=" w-25 mt-5 d-flex flex-row justify-content-center"
    style={{backgroundColor:"inherit"}}
    aria-label="More table content">
    <ul className="pagination pagination-sm">
      <li className="page-item ">
        <a className="page-link" href="#" tabindex="-1">1</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">2</a></li>
      {/* <li className="page-item"><a className="page-link" href="#">3</a></li> */}
    </ul>
  </nav>
  </div>
  );
};
export default Pag;
