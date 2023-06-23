import React from "react";
import { CourseModel } from "../../models/course.model";
import Rating from "../atoms/rating.component";
import Title from "../atoms/title.component";

type CartItemProps = {
  item: CourseModel;
};

export default function CartItem(props: CartItemProps) {
  const formatNumberWithCommas = (number: number | undefined) => {
    if (number) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="card mb-3" style={{ maxWidth: "950px", height: "170px" }}>
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={props.item.imageUrl}
            className="img-fluid rounded-start"
            alt={props.item.title}
            style={{ height: "170px", width: "400px" }}
          />
        </div>
        <div className="col-md-7 d-flex flex-column justify-content-between">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div style={{ flex: "1" }}>
                <p className="card-title fw-bold" style={{ maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {props.item.title}
                </p>
                <p className="text-secondary">By {props?.item?.trainerName}</p>
              </div>
              <div style={{ width: "120px" }}>
                <div className="text" style={{ color: "#8b3dff", fontSize: "0.8rem" }}>Remove</div>
                <div style={{ color: "#8b3dff", fontSize: "0.8rem" }}>Move to wishlist</div>
              </div>
              <div>
                <p  className="m-0" style={{ color: "#8b3dff" }}>₹.{props?.item?.discountedPrice}</p>
                <p className="text-decoration-line-through text-secondary m-0">₹.{props?.item?.price}</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-2">
              <button className="btn btn-warning text-dark badge rounded-0 me-2">
                Bestseller
              </button>
              <span className="me-2">{4.5}</span>
              <Rating
                maxCount={props?.item?.rating}
                iconClasses="fa-solid fa-star"
                color="orange"
              />
              <a
                className="ms-2 text-secondary"
                style={{ fontSize: "0.8rem", whiteSpace: "nowrap" }}
              >
                ({formatNumberWithCommas(props?.item?.studentsEnrolled)} ratings)
              </a>
            </div>
            <p
              className="text-secondary mt-"
              style={{ fontSize: "0.8rem", whiteSpace: "nowrap" }}
            >
              15 total hours. 134 lectures. Beginner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
