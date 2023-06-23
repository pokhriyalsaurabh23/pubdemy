import React from "react";
import { useDispatch } from "react-redux";
import { CourseModel } from '../../models/course.model';
import { addItemToCart } from "../../redux/reducers/cart.reducer";

type CourseIncludesProps = {
  course: CourseModel | undefined;
};

const CourseIncludesComponent: React.FC<CourseIncludesProps> = ({ course }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (course) {
      dispatch(addItemToCart(course));
    }
  };
  return (
    <div className="position-absolute top-0 end-0 bg-white p-4 shadow me-4 mt-2" style={{ width: "350px", height: "600px" }}>
      <img src={course?.imageUrl} className="card-img-top w-100" alt={course?.title} />
      <h4 className="card-text me-2 fw-bold mt-3">₹. {course?.price}</h4>
      <div className="">
        <button type="button" className="btn btn-primary rounded-0" style={{ backgroundColor: "#8b3dff", width: "205px" }} onClick={handleAddToCart}>
          Add to cart
        </button>
        <button type="button" className="btn rounded-0 ms-4 border-black">
          <i className="far fa-heart"></i>
        </button>
      </div>
      <button type="button" className="btn rounded-0 border-black mt-2" style={{width:"90%"}}>
        Buy Now
      </button>
      <p className="text-secondary small text-center my-2">30-day Money-back Guarantee</p>
      <div className="mt-4">
        <h5>This course includes:</h5>
        <ul className="list-unstyled">
          <li>
            <i className="fas fa-tv me-2"></i>
            5.5 hours on demand video
          </li>
          <li>
            <i className="far fa-file me-3"></i>
            70 downloadable resources
          </li>
          <li>
            <i className="fa fa-infinity me-2"></i>
            Full lifetime access
          </li>
          <li>
            <i className="fa fa-mobile me-3"></i>
            Access on mobile and TV
          </li>
          <li>
            <i className="fa fa-trophy me-2"></i>
            Certificate of completion
          </li>
        </ul>
        <div className="d-flex flex-nowrap">
          <a href="#" className="me-3 fw-bold text-dark small">Share</a>
          <a href="#" className="me-3 fw-bold text-dark small">Gift this course</a>
          <a href="#" className="fw-bold text-dark small">Apply Coupon</a>
        </div>
      </div>
    </div>
  );
};

export default CourseIncludesComponent;
