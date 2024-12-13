import { useLoaderData } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import CoffeeCard from "./components/CoffeeCard";
import { Link } from "react-router-dom";

function App() {
  const loadedData = useLoaderData();
  const [coffees, setCoffees] = useState(loadedData);

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
            coffee={coffee}
            setCoffees={setCoffees}
            coffees={coffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
