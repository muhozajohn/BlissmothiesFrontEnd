import { Link } from "react-router-dom";
import Avatar from "../assets/images/a.jpg";

const Signup = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-xl">
        <div>
          <img src={Avatar} alt="" />
        </div>
        <div className="px-4">
          <p className="font-semibold text-sm ">
            !Create! <span className="text-btnColor">Acount</span>
          </p>
          <form action="" className="flex flex-col gap-6 mt-4">
            <input
              type="text"
              placeholder="Full name"
              className="py-3 px-3 border border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
            />
            <input
              type="text"
              placeholder="Email"
              className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
            />
            <div className="flex justify-between items-center py-2 px-2 border border-solid border-gray-500 rounded-sm outline-none active:outline-none text-sm">
              <input type="file" className="w-1/2" />
              <div className="flex gap-6">
                <label htmlFor="">Gender</label>
                <select
                  name=""
                  id=""
                  className="w-full bg-transparent placeholder-black outline-none active:outline-none text-sm"
                >
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="py-3 px-3 border border-solid border-gray-500 rounded-sm bg-transparent placeholder-black outline-none active:outline-none text-sm"
            />
            <input
              type="button"
              value="SignUp"
              className="btn cursor-pointer py-3 px-3 rounded-sm "
            />
            <p className="text-center font-semibold text-sm">
              Already have an account?
              <Link to="/login" className="text-blue-800">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
