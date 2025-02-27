import React from 'react';
import "./contact.css"
import { useLocation } from 'react-router-dom';


const useScrollToTop = () => {
  const location = useLocation();
  React.useEffect(() => {
      window.scrollTo(0, 0);
  }, [location]);
};

const Contact = () => {
  useScrollToTop();
  let btn = {
    // border: "none",
    border: "1px solid #E3FC01",
    color: "#E3FC01",
    padding: "10px 40px",
    margin: "1vw 0 0 0 ",
  }

  return (
    <>
      <div className="contactOuter py-5">
        <h1 className='text-center'>contact</h1>
        <div className="container">
          <div className="contactInner col-sm-12">

            <form action="https://formspree.io/f/xpwqoeny" method='POST' className='d-flex justify-content-center' required>
              <div className="inputContact w-50">
                <div className='d-flex'>

                  <input type="text" placeholder='Name' name='name' />


                  <input type="email" placeholder='Email *' name='email' />

                </div>

                <input type="number" placeholder='Phone Number' name='phone' />


                <textarea name="comment" id="comment" rows={10} placeholder='Comment' required></textarea>

                <button  type="submit" style={btn}>Send</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact