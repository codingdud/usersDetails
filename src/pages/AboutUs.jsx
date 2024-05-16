import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const StyledAppBar = styled(AppBar)({
  marginBottom: '20px',
});

const ContentPaper = styled(Paper)({
  padding: '20px',
  marginTop: '30px',
});

const InfoContainer = styled(Container)({
  marginTop: '30px',
});

function AboutUsPage() {
  return (
    <div style={{ marginTop: '20px', padding: '20px' }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            About Us
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <InfoContainer>
        <ContentPaper elevation={3}>
          <Typography variant="h4" gutterBottom>
            Animesh Kumar
          </Typography>
          <Typography variant="body1" paragraph>
            Computer Science student with a knack for building user-friendly web applications. Proven skills in modern
            web development frameworks (React.js, Next.js), backend technologies (Node.js, Python), cloud platforms
            (AWS S3, Docker), and database management.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          <Typography variant="body1" paragraph>
            Kalinga Institute of Industrial Technology
            <br />
            Bachelor of Technology in Computer Science and System Engineering
            <br />
            Expected May 2025
            <br />
            Bhubaneswa, Odisha
          </Typography>
          <Typography variant="body1" paragraph>
            Relevant Coursework:
            <ul>
              <li>Data Structures and Algorithms (C++)</li>
              <li>AI & ML in CS (Python)</li>
              <li>DBMS, Probability and Statistics</li>
              <li>Linear Algebra, Operating System</li>
              <li>Cloud Computing, Big Data</li>
            </ul>
          </Typography>
          <Typography variant="h6" gutterBottom>
            Technical Skills
          </Typography>
          <Typography variant="body1" paragraph>
            Languages: JavaScript, C/C++, Python, TypeScript, YMAL
            <br />
            Technologies: React.js, Next.js, React Native ,Express.js, TensorFlow, PyTorch, Flask, Node.js, Docker
            <br />
            Concepts: Operating System, Virtual Memory, Cache Memory, Encryption, Decryption, Artificial Intelligence,
            Machine Learning, Neural Networks, API, Database Normalization, Agile Methodology, Cloud Computing
          </Typography>
          <Typography variant="h6" gutterBottom>
            Experience
          </Typography>
          <Typography variant="body1" paragraph>
            Salesforce
            <br />
            Virtual Developer Intern
            <br />
            Nov 2023–Jan 2024
            <br />
            Remote
            <ul>
              <li>Learned Apex, Visualforce, and Lightning Web Components (LWC) for Salesforce development.</li>
              <li>Developed expertise in API integration and Batch Apex Unit testing.</li>
              <li>Grasped knowledge of Batch Apex Unit testing.</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            K3, KIIT University
            <br />
            Development Intern
            <br />
            June 2022–June 2023
            <br />
            Bhubaneswar, Odisha
            <ul>
              <li>Developed a comprehensive employee data management web application using Node.js.</li>
              <li>Managed MongoDB database, integrated AWS S3, and created Docker Build File for deployment.</li>
            </ul>
          </Typography>
          <Typography variant="h6" gutterBottom>
            Projects
          </Typography>
          <Typography variant="body1" paragraph>
            Form Easy | React.js, Nodejs, Mongodb, Docker-Compose, Makefile
            <br />
            Dec 2023
            <ul>
              <li>Developed a user-friendly web application for creating simple forms efficiently. Utilized technologies such as Node.js, React, GitHub, Docker, Azure, and MongoDB.</li>
              <li>Designed and deployed a RESTful API using Node.js and MVC architecture.</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph>
            Student Accommodation Finder | Node.js, React.js, Express.js, Python, Flask, Redux
            <br />
            Developed a student accommodation search platform using React.js.
            <br />
            Built a dynamic and user-friendly interface with components.
            <br />
            Enabled location-based search functionality through geospatial data integration.
          </Typography>
          <Typography variant="body1">
            NextLevel Food | Next.js, S3(aws), sqlLite
            <br />
            Built a dynamic recipe sharing application using Next.js for optimized performance.
            <br />
            Utilized AWS S3 for scalable and reliable storage of multimedia content (images, videos).
          </Typography>
        </ContentPaper>
      </InfoContainer>
    </div>
  );
}

export default AboutUsPage;
