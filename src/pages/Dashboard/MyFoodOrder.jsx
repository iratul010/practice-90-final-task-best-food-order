import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/LoadingSpinner";
import { toast } from "react-toastify";

const MyFoodOrder = () => {
  const {loading } = useAuth();

  const [foods, setFoods] = useState([]);
  
 
  useEffect(() => {
    fetch('http://localhost:5000/foods')
      .then((res) => res.json())
      .then((data) => {
 
        setFoods(data);
  
       
      });
    }, []);
    
    
    const handleDelete = async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this item?");
 
      if(confirmDelete){
        console.log(id)
        await fetch(`http://localhost:5000/foods/${id}`,{
          method:'DELETE',

        }).then((res)=>res.json()).then((data)=>{
          console.log(data)
        })
        //Logic-set
        setFoods((prevFoods) => prevFoods.filter((food) => food._id !== id));
        toast.success("Item deleted successfully");
      }
    };
    
    
    if(loading){
      return <LoadingSpinner/>
    }
 
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Food Orders</h1>
      <div>
        {foods.length === 0 ? (
          <p className="text-center text-gray-600">No food orders available.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {foods.map((food) => (
              <li key={food._id} className="border p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="flex flex-col items-start">
                  <h2 className="text-xl font-semibold mb-2">{food.name}</h2>
                  <p className="text-gray-600"><strong>Address:</strong> {food.address}</p>
                  <p className="text-gray-600"><strong>Phone:</strong> {food.phone}</p>
                  <p className="text-gray-600"><strong>Category:</strong> {food.category}</p>
                  <p className="text-gray-600"><strong>Items:</strong> {food.items}</p>
                  <p className="text-gray-600"><strong>Items:</strong> {food.demandCharge}</p>
                </div>
                <div className="mt-4 flex space-x-2">
                <Link to={`/dashboard/all-order/edit/${food?._id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded-md transition duration-300">Edit</Link>
                  <button 
                    onClick={() => handleDelete(food?._id)} 
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyFoodOrder;
