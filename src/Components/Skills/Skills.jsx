import React from 'react';
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaJira,
  FaAndroid,
} from 'react-icons/fa';
import {
  SiPostgresql,
  SiMongodb,
  SiApachecassandra,
  SiPostman,
} from 'react-icons/si';
import { DiScrum } from 'react-icons/di'; 

const skillCategories = [
  {
    category: 'Front-end',
    skills: [
      { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
      { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
      { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" /> },
      { name: 'React JS', icon: <FaReact color="#61DAFB" /> },
    ],
  },
  {
    category: 'Back-end',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
      { name: 'Java', icon: <FaJava color="#007396" /> },
      { name: 'Python', icon: <FaPython color="#3776AB" /> },
      { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
    ],
  },
  {
    category: 'Mobile',
    skills: [
      { name: 'React Native', icon: <FaReact color="#61DAFB" /> },
      { name: 'Android Studio', icon: <FaAndroid color="#3DDC84" /> },
    ],
  },
  {
    category: 'Bases de datos',
    skills: [
      { name: 'Postgres', icon: <SiPostgresql color="#336791" /> },
      { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" /> },
      { name: 'Apache Cassandra', icon: <SiApachecassandra color="#1283A2" /> },
    ],
  },
  {
    category: 'Gestión y Herramientas',
    skills: [
      { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
      { name: 'Scrum', icon: <DiScrum color="#51A0D5" /> },      
      { name: 'Jira', icon: <FaJira color="#0052CC" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Mis Habilidades</h2>
      <div className="categories-container">
        {skillCategories.map(({ category, skills }, i) => (
          <div key={i} className="category-box">
            <h3 className="category-title">{category}</h3>
            <div className="skills-circles">
              {skills.map(({ name, icon }, index) => (
                <div key={index} className="skill-circle" title={name}>
                  <div className="skill-icon">{icon}</div>
                  <div className="skill-name">{name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;