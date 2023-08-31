import { Link } from "react-router-dom";

const Book = () => {
  return (
    <section className="bg">
      <div className="container text-right flex items-center flex-col gap-6">
        <div className="text-center">
          <h4 className="font-semibold">
            BOOK <span className="text-white">A TABLE</span>{" "}
          </h4>
          <h2 className="text-xl font-bold">Book A Table Now</h2>
        </div>
        <div className="w-full lg:w-1/2 mx-auto text-center">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts
          </p>
        </div>
        <div>
          <Link to="/book-table">
            <button className="btn">Book Table</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Book;
