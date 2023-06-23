import { CourseModel } from "../../models/course.model";
import Rating from "../atoms/rating.component";
import { useDispatch } from "react-redux";
import {
  deleteCourse,
  incrementLikes,
} from "../../redux/reducers/courses.reducer";
import { addItemToCart } from "../../redux/reducers/cart.reducer";
import { Link } from "react-router-dom";
import { sagaActions } from "../../saga/sagaActions";

type CourseProps = {
  coursedetails: CourseModel;
};

export default function Course(props: CourseProps): JSX.Element {
  return (
    <div className="col-md-2">
      <div className="card p-2" style={{height: "390px", width:"270px"}}>
        <Link to={"/dashboard/coursedetails/" + props.coursedetails.id}>
          <img
            src={props.coursedetails.imageUrl}
            height="150px"
            className="card-img-top"
            alt={props.coursedetails.title}
          />
        </Link>
        <p className="card-title fw-bold" style={{fontSize: "1rem"}}> {props.coursedetails.title}</p>
        <p className="text-secondary">{props?.coursedetails?.trainerName}</p>
        <div className="card-body p-0">
          <div className="d-flex justify-content-start align-items-center">
            <p className="m-0" style={{color: "red"}}>{props?.coursedetails?.rating}</p>
            <Rating
              maxCount={props?.coursedetails?.rating}
              iconClasses="fa-solid fa-star"
              color="orange"
            />
            <span>({props.coursedetails.likes})</span>
          </div>
          <div className="d-flex">
          <p className="card-text me-2 fw-bold">₹. {props.coursedetails.discountedPrice}</p>
          <p className="card-text text-secondary text-decoration-line-through">₹. {props.coursedetails.price}</p>
          </div>
          <div className="">
            <button
              className="btn btn-warning text-dark badge"
            >
              Bestseller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
