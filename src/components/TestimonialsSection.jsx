import Testimonials from "./Testimonials";

 
 

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: '../src/assets/profile-1.jpg',
      name: 'John Doe',
      role: 'Happy Customer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet odio nec nisi gravida eleifend. Duis nec mauris quis quam pulvinar ullamcorper.'
    },
    {
      image: '../src/assets/profile-2.jpg',
      name: 'Jane Smith',
      role: 'Satisfied Customer',
      text: 'Sed nec tristique lacus. In a elit vel lorem pretium mollis. Donec at lorem malesuada, vestibulum metus nec, tincidunt velit. Integer nec ipsum sapien.'
    },
    {
      image: '../src/assets/profile-3.jpg',
      name: 'Alice Johnson',
      role: 'Loyal Customer',
      text: 'Aenean eleifend ultricies ligula at lacinia. Nam id tincidunt libero, vel tristique nulla. Aliquam erat volutpat. Nulla bibendum consectetur convallis.'
    }
  ];

  return (
    <div className="bg-gray-800 py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">What Our Customers Say</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonials
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
