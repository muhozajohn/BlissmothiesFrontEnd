import { useEffect, useState } from "react";
import CommentTable from "../components/Table/CommentTable";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
const Comment = () => {
  const [comment, setComment] = useState([]);
  const [loading, isLoading] = useState(false);
  console.log("Comments", comment);
  useEffect(() => {
    const getComment = async () => {
      try {
        isLoading(true);
        const comment = await axios.get(
          "https://blissmothies.onrender.com/blissmothies/blog/readComment"
        );
        const response = await comment.data.data;
        if (response) {
          setComment(response);
          isLoading(false);
        }
      } catch (error) {
        console.log("Failed to Get it", error);
        isLoading(false);
      }
    };
    getComment();
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
              {comment.length ? (
                comment.map((item, index) => (
                  <CommentTable key={index} commentItem={item} index={index} />
                ))
              ) : (
                <div className=" mt-5 flex justify-center items-center w-full text-center  ">
                  <PulseLoader color="#F06C05" loading={loading} size={10} />
                </div>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
