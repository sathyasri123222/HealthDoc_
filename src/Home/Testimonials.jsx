import React, { useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: 'https://via.placeholder.com/50',
      text: 'The DforDoctor visit was private and confidential. I felt comfortable discussing my health concerns without worrying about others overhearing.',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/50',
      text: 'I was worried about the technical aspects of telehealth, but the process was seamless.',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/50',
      text: 'DforDoctor platform was user-friendly and easy to navigate. I was able to connect with my doctor without any issues',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/50',
      text: 'DforDoctor has saved me so much time. I no longer have to sit in a waiting room for hours. The appointments are prompt, and I can get back to my day quickly.',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/50',
      text: 'I appreciate that I can speak with my doctor from home, especially when I am not feeling well. It’s reassuring to know I dont have to expose myself to others when I am sick.',
    },
  ];

  const listRef = useRef(null);

  useEffect(() => {
    const scrollTestimonials = () => {
      if (listRef.current) {
        listRef.current.scrollTop += 1;
        if (listRef.current.scrollTop >= listRef.current.scrollHeight - listRef.current.clientHeight) {
          listRef.current.scrollTop = 0;
        }
      }
    };

    const intervalId = setInterval(scrollTestimonials, 20); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <h2 className="testimonials-header">Hear the voices of our patients sharing...</h2>
        <div className="testimonials-list" ref={listRef}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <img src={testimonial.image} alt="Profile" className="testimonial-image" />
              <p>{testimonial.text}</p>
            </div>
          ))}
          {testimonials.map((testimonial) => (
            <div key={testimonial.id + '-clone'} className="testimonial-item">
              <img src={testimonial.image} alt="Profile" className="testimonial-image" />
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Testimonials;
