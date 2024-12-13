import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { name, photo, chef, price, _id } = coffee;
  const handleDeleteCoffee = (_id) => {
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted coffee");
          const remening = coffees.filter((coffee) => coffee._id !== _id);
          setCoffees(remening);
        }
      });
  };
  return (
    <div className="grid grid-cols-3 capitalize justify-between items-center bg-[#F5F4F1]  rounded-none border-2">
      <div>
        <img src={photo} alt="" />
      </div>
      <div className="flex flex-col capitalize items-center justify-center space-y-2">
        <h1>Name:{name}</h1>
        <h1>Chef:{chef}</h1>
        <h1>Price:${price}</h1>
      </div>
      <div className="flex    justify-end">
        <div className="join bg-[#F5F4F1]  join-vertical">
          <Link to={`/coffee/details/${_id}`} className="btn join-item">
            <TbListDetails />
          </Link>
          <Link to={`/coffee/${_id}`} className="btn join-item">
            <FaEdit />
          </Link>
          <button
            onClick={() => handleDeleteCoffee(_id)}
            className="btn join-item text-red-400 text-2xl"
          >
            <RiDeleteBin2Fill className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
