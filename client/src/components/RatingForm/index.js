// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { ADD_RATING } from '../../utils/mutations';
// import { QUERY_RATINGS, QUERY_ME } from '../../utils/queries';
// import Auth from '../../utils/auth';

// export default function RatingForm () {
//   const [value, setValue] = useState('');

//   const [addRating, { error }] = useMutation(ADD_RATING, {
//     update(cache, { data: { addRating } }) {
//       try {
//         const { ratings } = cache.readQuery({ query: QUERY_RATINGS });

//         cache.writeQuery({
//           query: QUERY_RATINGS,
//           data: { ratings: [addRating, ...ratings] },
//         });
//       } catch (e) {
//         console.error(e);
//       }

//       const { me } = cache.readQuery({ query: QUERY_ME });
//       cache.writeQuery({
//         query: QUERY_ME,
//         data: { me: { ...me, ratings: [...me.ratings, addRating] } },
//       });
//     },
//   });

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addRating({
//         variables: {
//           value,
//           user: Auth.getProfile().data.username,
//         },
//       });

//       setValue('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === 'value') {
//       setValue(value);
//     }
//   };

//   return (
//     <div>
//       <h3>Post a rating of this brewery!</h3>

//       {Auth.loggedIn() ? (
//         <>
//           <form
//             className="flex-row justify-center justify-space-between-md align-center"
//             onSubmit={handleFormSubmit}
//           >

// *******This is where I last left off fixing the code from 'comments' to 'ratings'********

//             <div className="col-12 col-lg-9">
//               <textarea
//                 name="commentText"
//                 placeholder="Here's what I think..."
//                 value={commentText}
//                 className="form-input w-100"
//                 style={{ lineHeight: '1.5', resize: 'vertical' }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>

//             <div className="col-12 col-lg-3">
//               <button className="btn btn-primary btn-block py-3" type="submit">
//                 Add Comment
//               </button>
//             </div>
//             {error && (
//               <div className="col-12 my-3 bg-danger text-white p-3">
//                 {error.message}
//               </div>
//             )}
//           </form>
//         </>
//       ) : (
//         <p>
//           You need to be logged in to comment. Please{' '}
//           <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
//         </p>
//       )}
//     </div>
//   );
// };
