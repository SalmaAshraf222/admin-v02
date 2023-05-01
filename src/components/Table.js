import React from "react";

const Table = ({ name, headers, data }) => {
  return (
    <section>
      <h2>{name}</h2>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {Object.keys(row).map((key) => (
                <td key={key}>{row[key]}</td>
              ))}
              <td>
                <a href="#">Edit</a> | <a href="#">Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
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
