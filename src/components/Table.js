
const Table = ({ name, headers, data,header }) => {

  
  
  return (
    <div className="container-fluid"
    >
      <div className="row mx-auto " >
        
      <h1 className="m-5 mb-3 ms-4 " style={{color:"#8F9090"}}><strong>{name}</strong></h1>
      
      <table className="table border border-grey shadow  " 
      style={{
       tableLayout: "fixed",
       height:"20px",
       overflow:"auto",
wordBreak:"break-all"}}>
        <thead  >
          <tr 
          className="table"
>
            {headers.map((header) => (
              <th style={{backgroundColor:"#F2A11E",color:"white"}} scope="col" key={header}>{header}
              </th>
            ))}
            <th style={{backgroundColor:"#F2A11E",color:"white"}}>Actions</th>
          </tr>
        </thead>
        
        <tbody style={{backgroundColor:"white"}}>

          {
            data.map((row) => (
              <tr  key={row.key}>
                { 
                 Object.keys(row).map((key) => (
                  <td 
                   key={key}>{row[key]}</td>                
                  
                ))}
                <td>

                  <button className="btn btn-light"> Edit</button> 
                
                  
                </td>
              </tr>
            ))
          }


        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Table;


