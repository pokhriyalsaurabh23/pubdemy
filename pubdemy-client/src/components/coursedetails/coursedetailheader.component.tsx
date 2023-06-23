import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Rating from '../atoms/rating.component';
import { CourseModel } from '../../models/course.model';

interface CourseHeaderProps {
  course: CourseModel | undefined
}

const CourseDetailHeader: React.FC<CourseHeaderProps> = ({ course }) => {
  const formatNumberWithCommas = (number: number| undefined) => {
    if(number)
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  useEffect(()=>{
  },[course]);
  return (
    <header className="bg-dark text-light py-4">
      <div className="container">
        <h2 className=" word-break">{course?.title}</h2>
        <p className="lead">Step-by-step with: {course?.trainerName}</p>
        <div className="d-flex align-items-center mb-2">
            <button
              className="btn btn-warning text-dark badge rounded-0 me-2"
            >
              Bestseller
            </button>
          <span className='me-2'>{4.5}</span>
          <Rating
              maxCount={course?.rating}
              iconClasses="fa-solid fa-star"
              color="orange"
            />
            <a className="fw-bold ms-2" style={{ color: "#8b3dff" }}>({formatNumberWithCommas(course?.likes)})</a>
             <span className='ms-2'>{formatNumberWithCommas(course?.studentsEnrolled)} students</span>
        </div>
        <div className="mb-2">
          Created by <a className="fw-bold" style={{ color: "#8b3dff" }}>Enrich Andrew, Job Robson</a>
        </div>
        <i className="fa fa-exclamation-circle" aria-hidden="true"></i> Last Updated at 2/2022
        <i className="fa fa-globe ms-4 me-2"></i> English
      </div>
    </header>
  );
};

export default CourseDetailHeader;
