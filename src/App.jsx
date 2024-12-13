import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import CoffeeCard from "./components/CoffeeCard";
import { Link } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function App() {
  const loadedData = useLoaderData();
  const [coffees, setCoffees] = useState(loadedData);
  const handleDeleteCoffee = (_id) => {
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remening = coffees.filter((coffee) => coffee._id !== _id);
            setCoffees(remening);
          }
        });
      });
  };

  return (
    <div className="w-11/12 mx-auto p-5 my-10 ">
      <Link to="/addCoffee" className="btn btn-neutral">
        Add Coffee
      </Link>
      <h1 className="text-center text-5xl text-purple-400 font-bold mb-5">
        Our Products!
      </h1>
      <div className=" grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3  ">
        {coffees.map((coffee, idx) => (
          <CoffeeCard
            key={idx}
            handleDeleteCoffee={handleDeleteCoffee}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
