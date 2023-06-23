
import React from "react";
import { Link } from "react-router-dom";

import "./featuredTopics.css";

interface Topic {
  id: string;
  topicName: string;
  link: string;
  studentsEnrolled: string;
}

interface Category {
  id: string;
  category: string;
  topics: Topic[];
}

const FeaturedTopics: React.FC = () => {
  const jsonData: Category[] = [
    {
      id: "1",
      category: "Development",
      topics: [
        {
          id: "t11",
          topicName: "Python",
          link: "/topic/python",
          studentsEnrolled: "36354994",
        },
        {
          id: "t12",
          topicName: "Web Development",
          link: "/topic/webdevelopment",
          studentsEnrolled: "22354994",
        },
        {
          id: "t13",
          topicName: "Machine Learning",
          link: "/topic/machinelearning",
          studentsEnrolled: "16354994",
        },
      ],
    },
    {
      id: "2",
      category: "Bussiness",
      topics: [
        {
          id: "t21",
          topicName: "SQL",
          link: "/topic/sql",
          studentsEnrolled: "06354994",
        },
        {
          id: "t22",
          topicName: "PMP",
          link: "/topic/pmp",
          studentsEnrolled: "86354994",
        },
        {
            id: "t23",
            topicName: "Financial Analysis",
            link: "/topic/pmp",
            studentsEnrolled: "86354",
          },
      ],
    },
    {
      id: "3",
      category: "IT and Software",
      topics: [
        {
          id: "t31",
          topicName: "AWS Certification",
          link: "/topic/aws",
          studentsEnrolled: "66354994",
        },
        {
          id: "t32",
          topicName: "Azure Certification",
          link: "/topic/azure",
          studentsEnrolled: "56354994",
        },
        {
          id: "t33",
          topicName: "Cyber Security",
          link: "/topic/cybersec",
          studentsEnrolled: "76354994",
        },
      ],
    },
    {
        id: "4",
        category: "Design",
        topics: [
          {
            id: "t41",
            topicName: "Photoshop",
            link: "/topic/photoshop",
            studentsEnrolled: "484384",
          },
          {
            id: "t42",
            topicName: "Graphic Design",
            link: "/topic/design",
            studentsEnrolled: "3489323",
          },
          {
            id: "t43",
            topicName: "Drawing",
            link: "/topic/drawing",
            studentsEnrolled: "96354994",
          },
        ],
      },
  ];

  const comp = jsonData?.map((item: Category) => {
    return (
      <div className="topic" key={item.id}>
        <h2 className="catName">{item.category}</h2>
        <div className="topicBdy">
          {item?.topics?.map((topic: Topic) => {
            return (
              <div key={topic.id} className="topicList">
                <Link className="topicName" style={{ color: "#8b3dff" }} to={topic.link}>
                  {topic.topicName}
                </Link>
                <div className="topicStds">
                  {topic.studentsEnrolled
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  <span> students</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="outerDiv mt-4" style={{backgroundColor:"#f1f2f0"}}>
      <div className="innerDiv">
        <h1 className="ttl">Featured topics by category</h1>
        <div className="bdy">{comp}</div>
        <button className="btn border-dark rounded-0">Explore more topic</button>
      </div>
    </div>
  );
};

export default FeaturedTopics;
