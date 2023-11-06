import React, { useEffect, useState } from "react";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
const Member = () => {
  const [loading, setIsloading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getMember = async () => {
      try {
        setIsloading(true);
        const userData = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/users/read"
        );
        const response = await userData.data.data;

        if (response) setIsloading(false);

        // Filter the data to include only items with the role of "user"
        const filteredUsers = response.filter((user) => user.role === "user");
        setUsers(filteredUsers);
      } catch (error) {
        setIsloading(false);
        console.error("Error fetching data: ", error);
      }
    };
    getMember();
  }, []);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light cursor-pointer">
              <thead className="border-b font-medium dark:border-neutral-500  hover:bg-neutral-800 hover:text-white">
                <tr>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    #PID
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    User Profile
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    FullName
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    email
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Gender
                  </th>

                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Created On
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length ? (
                  users.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <img
                          src={item.userProfile}
                          alt=""
                          className="h-8 rounded-md"
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.fullName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.email}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.gender}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        {item.updatedAt}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.role}
                      </td>
                    </tr>
                  ))
                ) : (
                  <div className=" mt-5 flex justify-center items-center w-full text-center  ">
                    <PulseLoader color="#F06C05" loading={loading} size={10} />
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
