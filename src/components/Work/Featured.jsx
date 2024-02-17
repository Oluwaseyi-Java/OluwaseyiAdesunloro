import React, { useState } from 'react'
import "./featured.css"


const Featured = () => {

    const [Data, setData] = useState(
        
[
    {
        id: 1,
        title: "To Do List",
        description: "An interactive web app to help you schedule your data. Also helps you in time management.",
        imgUrl: "Screenshot(22)",
        websiteUrl: "https://todo-qwcybdacz-oluwaseyi-java.vercel.app/",
        sourceUrl: "https://www.google.com",
        tools: ["React", "useReducer", "CSS", "HTML"]
    },
    {
        id: 2,
        title: "E-commerce Website",
        description: "A typical e-commerce website landing page template. ",
        imgUrl: "Screenshot(31)",
        websiteUrl: "https://e-commerce-project-git-main-oluwaseyi-java.vercel.app/",
        sourceUrl: "https://github.com/Oluwaseyi-Java/E-commerceProject/tree/main/e-commerce",
        tools: ["React", "React Reveal", "CSS", "HTML"]
    },
    {
        id: 3,
        title: "Weather App",
        description: "A web app created for you to the weather of different cities around the world.",
        imgUrl: "Screenshot(33)",
        websiteUrl: "https://weather-app-rose-five.vercel.app/",
        sourceUrl: "https://github.com/Oluwaseyi-Java/WeatherApp",
        tools: ["React", "Data Fetching", "CSS", "HTML"]
    },
    {
        id: 4,
        title: "Quiz App",
        description: "A simple web app to take test or quiz.",
        imgUrl: "Screenshot(32)",
        websiteUrl: "https://quiz-app-gray-xi.vercel.app/questions/",
        sourceUrl: "https://github.com/Oluwaseyi-Java/QuizApp",
        tools: ["React", "Conditional Rendering", "CSS", "ContextAPI"]
    },
    {
        id: 5,
        title: "Question App",
        description: "A simple web app to take test or quiz.",
        imgUrl: "Screenshot(34)",
        websiteUrl: "https://question-app-ten.vercel.app/",
        sourceUrl: "https://github.com/Oluwaseyi-Java/QuestionApp",
        tools: ["React", "Conditional Rendering", "CSS", "ContextAPI"]
    },
    {
        id: 6,
        title: "Static Job Listing",
        description: "A single page app to list availabele jobs with filter.",
        imgUrl: "Screenshot(35)",
        websiteUrl: "https://static-job-listing-zeta.vercel.app/",
        sourceUrl: "https://github.com/Oluwaseyi-Java/StaticJobListing",
        tools: ["React", "Responsive Design", "Filter"]
    },
    {
        id: 7,
        title: "Social Media Dashboard",
        description: "A sigle page app that list your social network engagements.",
        imgUrl: "Screenshot(42)",
        websiteUrl: "https://social-media-dashboard-vert-ten.vercel.app/",
        sourceUrl: "https://github.com/Oluwaseyi-Java/SocialMediaDashboard",
        tools: ["React", "Responsive Design", "Filter"]
    },
    {
        id: 8,
        title: "Easy Bank Landing Page",
        description: "A bank landing page design.",
        imgUrl: "Screenshot(43)",
        websiteUrl: "https://easy-bank-landing-page-lovat.vercel.app/",
        sourceUrl: "https://github.com/Oluwaseyi-Java/SocialMediaDashboard",
        tools: ["React", "Responsive Design", "Filter"]
    }
]
    );



  return (
      <div className='feature'>
          <h1>Featured Work</h1>

          <div className='Featured'>{Data.map((data, index) => {
              return (
                <div key={index} className='Card'>
                    <img src={require("./images/" + data.imgUrl + ".png")} alt='pic'/>
                    <h2>{data.title}</h2>
                      <p>{data.description}</p>
                    <div className='Extra'>
                       {data.tools.map((item, index) => {
                            return (<span key={index}>{item}</span>)
                            })}             
                    </div>
                </div>)
          })} </div>
      
      </div>
  )
}

export default Featured