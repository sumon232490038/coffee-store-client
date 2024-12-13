import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = () => {
  const coffee = useLoaderData();
  const { name, supplier, photo, chef, details, category, price, _id } = coffee;
  return (
    <div className="w-10/12 mx-auto capitalize py-10">
      <Link to="/" className="btn btn-neutral">
        Go Back Home
      </Link>
      <h1 className="text-center text-5xl text-purple-500 items-center   mb-5">
        Detils Page
      </h1>
      <div className="flex capitalize bg-[#F4F3F0]  items-center gap-5">
        <div className="flex-1 justify-center items-center flex ">
          <img src={photo} alt="" />
        </div>
        <div className="flex-1  ">
          <p>
            <span className="text-xl font-bold">Name:</span> {name}
          </p>
          <p>
            <span className="text-xl font-bold">Category:</span> {category}
          </p>
          <p>
            <span className="text-xl font-bold">Supplier:</span> {supplier}
          </p>
          <p>
            <span className="text-xl font-bold">Chef:</span> {chef}
          </p>
          <p>
            <span className="text-xl font-bold">Details:</span> {details}
          </p>
          <p>
            <span className="text-xl font-bold">Price:</span> ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
