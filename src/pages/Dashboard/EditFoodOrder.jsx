import { useEffect, useState } from 'react';
 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const EditFoodOrder = () => {
  const navigate = useNavigate();
  const food = useLoaderData();
  console.log('food',food)
  const { id } = useParams();
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    category: '',
    items: '',
  });
  const [itemsList, setItemsList] = useState([]);
  const [demandCharge, setDemandCharge] = useState('');
  useEffect(() => {
    // Fetch the food order data based on the id
    const fetchFoodOrder = async () => {
      try {
        const response = await fetch(`http://localhost:5000/foods/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const foodOrder = await response.json();
        setForm(foodOrder); // Populate the form fields with the fetched data
        setItemsList(categories[foodOrder.category]); // Populate itemsList based on the category
        setDemandCharge(foodOrder.demandCharge);
      } catch (error) {
        console.error('Error fetching food order:', error);
        toast.error('Error fetching food order data!');
      }
    };

    fetchFoodOrder();
  }, [id ]);
  const categories = {
    "Pizza": [
      { name: "Margherita", charge: "$10" },
      { name: "Pepperoni", charge: "$12" },
      { name: "BBQ Chicken", charge: "$14" },
      { name: "Vegetarian", charge: "$11" }
    ],
    "Burgers": [
      { name: "Cheeseburger", charge: "$8" },
      { name: "Veggie Burger", charge: "$7" },
      { name: "Chicken Burger", charge: "$9" },
      { name: "Fish Burger", charge: "$10" }
    ],
    "Pasta": [
      { name: "Spaghetti Carbonara", charge: "$13" },
      { name: "Penne Arrabbiata", charge: "$12" },
      { name: "Fettuccine Alfredo", charge: "$14" },
      { name: "Lasagna", charge: "$15" }
    ]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  
    if (name === 'category') {
      setItemsList(categories[value]);
      setForm({
        ...form,
        category: value,
        items: '',
      });
      setDemandCharge('');
    }
  
    if (name === 'items') {
      const selectedItem = itemsList.find(item => item.name === value);
      const demandCharge = selectedItem ? selectedItem.charge : '';
      setDemandCharge(demandCharge);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
 const token = localStorage.getItem('token');
 
    const { name, address, phone, category, items } = form;
  const data = {  name, address, phone, category, items, demandCharge };  
 

  try {
    const response = await fetch(`http://localhost:5000/foods/${food?._id}`, {
      method: 'PATCH',  
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    toast.success('Food order updated successfully!');
    setItemsList([]);
    setDemandCharge('');
    navigateFunc()
  } catch (error) {
    console.error('Error updating food order:', error);
    toast.error('Error updating food order!');
  }

};
 function navigateFunc(){
  setTimeout(() => {
    navigate('/dashboard/all-order')
   }, 1000);
 }
  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Food Order Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          >
            <option value="" disabled>Select category</option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        {form.category && (
          <div>
            <label className="block text-lg font-medium text-gray-700">Order Items</label>
            <select
              name="items"
              value={form.items}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              required
            >
              <option value="" disabled>Select item</option>
              {itemsList.map((item) => (
                <option key={item.name} value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
        )}
        {demandCharge && (
          <div className="text-lg font-medium text-gray-700">
            <p>Demand Charge: <span className="text-blue-600">{demandCharge}</span></p>
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default EditFoodOrder;
