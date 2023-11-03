import React from 'react'

const Admin = () => {
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
                    Profile
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                   Username
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Password
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Role
                  </th>
        
                </tr>
              </thead>
              <tbody>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Zxus</td>
                  <td className="whitespace-nowrap px-6 py-4">keller</td>
                  <td className="whitespace-nowrap px-6 py-4">20</td>
                  <td className="whitespace-nowrap px-6 py-4">01/ 02 /2023</td>
                  <td className="whitespace-nowrap px-6 py-4">Admin</td>
                </tr>
           
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin