import React from "react";




const Table = ({ name, headers, data }) => {

  console.log(data);

  return (
    <div className="container-fluid"
    >
      <div className="row mx-auto " >
        
      <h1 className="m-5 mb-3 ms-4"><strong><u><em>{name}</em></u></strong></h1>
      
      <table className="table  table-bordered table-condensed" style={{
       tableLayout: "fixed",
width: "100%",
wordBreak:"break-all"}}>
        <thead  >
          <tr className="table-active">
            {headers.map((header) => (
              <th scope="col" key={header}>{header}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        
        <tbody>

          {
            data.map((row) => (
              <tr key={row.id}>
                {Object.keys(row).map((key) => (
                  <td key={key}>{row[key]}</td>

                ))}
                <td>

                  <a href={`127.0.0.1/api/restaurants/${row.id}`} > Edit</a> | <a href="127.0.0.1/api/restaurants/${row.id}" >Delete</a>

                  
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

//function Table({ name, headers, data }) {
//   return (
//     <section>
//       <h2>{name}</h2>
//       <table>
//         <thead>
//           <tr>
//             {headers.map((header) => (
//               <th key={header}>{header}</th>
//             ))}
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row) => (
//             <tr key={row.id}>
//               {Object.keys(row).map((key) => (
//                 <td key={key}>{row[key]}</td>
//               ))}
//               <td>
//                 <a href="#">Edit</a> | <a href="#">Delete</a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </section>
//   );
// }
