// import React from 'react';
// import HelpContext from '../../../../context/HelpContext';
// import { useContext } from 'react';
// import { Link } from 'react-router-dom';

// const createTableRows = (arr) => {
//   return arr;
// };

// const SupplyPage = () => {
//   const { supplyAssignedIssues, setSupplyAssignedIssues } = useContext(HelpContext);
//   return (
//     <div className="pageContainer">
//       <div className="mainSection">
//         <div className="createIssueContainer">
//           <div className="full-ticket-table">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Key</th>
//                   <th>Summary</th>
//                   <th>Reporter</th>
//                   <th>Status</th>
//                   <th>Created</th>
//                   <th>Updated</th>
//                   <th>Complete Request</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {supplyAssignedIssues.map((value) => (
//                   <tr key={value.key}>
//                     <td>
//                       <a href={'https://jira.signifyhealth.com/browse/' + value.key} target="_blank" rel="noopener noreferrer">
//                         {value.key}
//                       </a>
//                     </td>
//                     <td>{value.fields.summary}</td>
//                     <td>{value.fields.reporter.emailAddress}</td>
//                     <td>{value.fields.status.name}</td>
//                     <td>{value.fields.created}</td>
//                     <td>{value.fields.updated}</td>
//                     <td>
//                       <Link
//                         to={{
//                           pathname: '/supplyPreviewPage',
//                           state: { myProp: value },
//                         }}
//                       >
//                         X
//                       </Link>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SupplyPage;
