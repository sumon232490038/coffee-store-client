import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { Link } from "react-router-dom";

const AddCoffee = () => {
  const handleCoffeeFormData = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const photo = form.photo.value;
    const chef = form.chef.value;
    const details = form.details.value;
    const category = form.category.value;
    const price = form.price.value;

    const coffeeData = {
      name,
      supplier,
      photo,
      chef,
      details,
      category,
      price,
    };
    // console.log(coffeeData);
    fetch("http://localhost:5000/addCoffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data) {
          Swal.fire({
            title: "Success!",
            text: "Add coffee is successfull!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="w-10/12 mx-auto p-5 my-10 bg-[#F4F3F0] capitalize">
      <Link to="/" className="btn btn-neutral">
        Back Home
      </Link>
      <h1 className="text-center text-5xl text-purple-400 font-bold ">
        Add Coffee!
      </h1>
      <div className="  w-full  ">
        <div></div>
        <form
          onSubmit={handleCoffeeFormData}
          className="grid grid-cols-2 capitalize grid-rows-3 gap-5 "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Name"
              name="name"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl">Suppiler</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Supplier"
              name="supplier"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl">Category</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Category"
              name="category"
              className="input "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl">Chef</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Chef"
              className="input "
              name="chef"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl">price</span>
            </label>
            <input
              type="number"
              placeholder="Enter Coffee price"
              className="input "
              name="price"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl">Details</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Details"
              className="input "
              name="details"
              required
            />
          </div>
          <div className="form-control w-full col-span-2">
            <label className="label">
              <span className="label-text font-bold text-xl">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Photo"
              className="input "
              name="photo"
              required
            />
          </div>
          <div className="form-control mt-6 col-span-2">
            <button className="btn bg-[#D2B48C]">Add Coffee!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
