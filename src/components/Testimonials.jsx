 

// eslint-disable-next-line react/prop-types
const Testimonials = ({ image, name, role, text }) => {
  return (
    <div className="bg-gray-200 p-8 rounded-lg max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <img src={image} alt={`${name}'s avatar`} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-700">{role}</p>
        </div>
      </div>
      <p className="text-lg text-gray-800 leading-relaxed mb-6">{text}</p>
    </div>
  );
};

export default Testimonials;
