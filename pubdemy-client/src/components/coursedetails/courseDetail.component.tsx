import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseDetailHeader from './coursedetailheader.component';
import { CourseModel } from '../../models/course.model';
import WhatYouWillLearn from './coursedetailwhatyoulearn.component';
import Requirements from './coursedetailrequirements.component';
import Description from './coursedetaildescription.component';
import CourseSection from "./coursedetailsection.component";
import CourseIncludesComponent from "./coursedetailcard.component";
import { useSelector } from 'react-redux';
import { RootState } from "../../redux/store/store";

const CourseDetail: React.FC = () => {
    const courses = useSelector((state: RootState) => state.courses);
    const { id } = useParams();
    const course = courses.find((course: CourseModel) => course.id === Number(id));

    const whatYoullLearn = [
        'Fingerstyle Guitar',
        'Fingerpicking Guitar',
        'Beginner Guitar',
    ];
    const requirements = [
        'Guitar',
        'Willing to practice',
    ];

    return (
        <div>
            <div className="position-relative">
                <CourseDetailHeader course={course} />
                <CourseIncludesComponent course={course} /> {/* Pass the course prop */}
            </div>

            <CourseSection
                title="What you'll learn"
                data={whatYoullLearn}
                component={WhatYouWillLearn}
            />
            <CourseSection
                title="Requirements"
                data={requirements}
                component={Requirements}
            />
            <CourseSection
                title="Description"
                data={course?.description}
                component={Description}
            />
        </div>
    );
};

export default CourseDetail;
