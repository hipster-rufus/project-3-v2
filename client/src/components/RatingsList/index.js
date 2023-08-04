// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function RatingsList ({
//   ratings,
//   value,
//   showValue = true,
//   showUsername = true,
// }) {
//   if (!ratings.length) {
//     return <p>No ratings yet.</p>;
//   }

//   return (
//     <div>
//       {showValue && <h3>{value}</h3>}
//       {ratings &&
//         ratings.map((rating) => (
//           <div key={rating._id} className="card mb-3">
//             <h4 className="card-header bg-primary text-light p-2 m-0">
//               {showUsername ? (
//                 <Link
//                   className="text-light"
//                   to={`/profiles/${rating.user}`}
//                 >
//                   {rating.user} <br />
//                   <span style={{ fontSize: '1rem' }}>
//                     posted this rating on {rating.createdAt}
//                   </span>
//                 </Link>
//               ) : (
//                 <>
//                   <span style={{ fontSize: '1rem' }}>
//                     You posted this rating on {rating.createdAt}
//                   </span>
//                 </>
//               )}
//             </h4>
//             <div className="card-body bg-light p-2">
//               <p>{rating.value}</p>
//             </div>
//             <Link
//               className="btn btn-primary btn-block btn-squared"
//               to={`/ratings/${rating._id}`}
//             >
//               View
//             </Link>
//           </div>
//         ))}
//     </div>
//   );
// };
