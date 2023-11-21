import { AiFillDelete } from "react-icons/ai";
const Comment = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light cursor-pointer">
              <thead className="border-b font-medium dark:border-neutral-500  hover:bg-neutral-800 hover:text-white">
                <tr>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    #TID
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Comment Owner
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Comment
                  </th>

                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Created On
                  </th>
                  <th scope="col" className="whitespace-nowrap px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Zxus</td>
                  <td className="whitespace-nowrap px-6 py-4">keller</td>
                  <td className="whitespace-nowrap px-6 py-4">01/ 02 /2023</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center gap-1">
                      <div
                        className="rounded-sm py-2 px-2 bg-btnColor text-white w-fit"
                        onClick={(e) => {
                          //   deleteData(item._id);
                        }}
                      >
                        <AiFillDelete />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
