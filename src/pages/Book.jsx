import { Link } from "react-router-dom";

const Book = () => {
  return (
    <section className="bg ">
      <div className="container text-right flex items-center flex-col gap-6">
        <div className="text-center">
          <h4 className="font-semibold">
            BOOK <span className="text-white">A TABLE</span>{" "}
          </h4>
          <h2 className="text-xl font-bold">Book A Table Now</h2>
        </div>
        <div className="w-full lg:w-full mx-auto text-center">
          <p>
            At [Blissmothies], we understand that your dining experience
            should be seamless and enjoyable from start to finish. That's why we
            offer a convenient and efficient table booking system to enhance
            your visit. Our "Table Bookings" feature allows you to reserve a
            table in advance, ensuring that you have a designated space ready
            for you upon arrival. Whether you're planning a quick lunch, a
            family dinner, or a gathering with friends, our reservation system
            is designed to make your dining experience hassle-free
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
