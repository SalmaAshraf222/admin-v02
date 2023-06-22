import "./pagination.css";
const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="container-fluid">
      <div className="row pagination mt-3">
        {pages
          .filter((page) => page < 11)
          .map((page, index) => {
            return (
              <button key={index} onClick={() => setCurrentPage(page)}>
                {page}
              </button>
            );
          })}
      </div>

      <div className="row pagination mt-3">
        {pages
          .filter((page) => page > 11)
          .map((page, index) => {
            return (
              <button key={index} onClick={() => setCurrentPage(page)}>
                {page}
              </button>
            );
          })}
      </div>
    </div>
  );
};
export default Pagination;
