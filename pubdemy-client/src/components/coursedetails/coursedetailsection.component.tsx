import React from "react";
interface CourseSectionProps {
    title: string;
    data: any;
    component: React.FC<any>;
}

const CourseSection: React.FC<CourseSectionProps> = ({ title, data, component }) => {
    return (
        <section className="container mt-4">
            <div className="row justify-content-start">
                <div className="col-md-8">
                    <div className="mb-3">
                        {React.createElement(component, { data })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseSection;