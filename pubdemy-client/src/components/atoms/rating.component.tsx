import React from "react";

type RatingProps = {
  maxCount: number | undefined;
  color?: string;
  iconClasses: string;
};

export default function Rating(props: RatingProps) {
  let ratings = [];
  if(props.maxCount){
    for (let index = 0; index < props?.maxCount; index++) {
      ratings.push(
        <i
          className={props.iconClasses}
          style={{ color: props.color ? props.color : "black" }}
          key={index}
        ></i>,
      );
    }
  }
  return <div className="d-flex">{ratings}</div>;
}
