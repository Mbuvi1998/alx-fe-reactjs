// function UserProfile() {
//     return (
//       <div className="user-profile bg-gray-100 p-8 md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl sm:p-4 md:p-8 sm:max-w-xs ">
//         <img
//           src="https://via.placeholder.com/150"
//           className="rounded-full mx-auto md:w-36 md:h-36 sm:w-24 sm:h-24 hover:scale-110 transition-transform duration-300 ease-in-out"
//           alt="User"
//         />
//         <h1 className="text-xl text-blue-800 hover:text-blue-500 my-4 md:text-xl sm:text-lg">
//           John Doe
//         </h1>
//         <p className="text-gray-600 text-base sm:text-sm md:text-base">
//           Developer at Example Co. Loves to write code and explore new
//           technologies.
//         </p>
//       </div>
//     );
//   }
  
//   export default UserProfile;

// src/components/UserProfile.jsx

function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-36 h-36 mx-auto"
        />
        <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
        <p className="text-gray-600 text-base">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  