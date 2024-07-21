import React from "react";
import Layout from "./../components/Layout/Layout";






import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
// import aboutImg from '../assets/images/about-us-img.jpg';

const About = () => {
  const imgVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Layout title={"About us - Ecommer app"}>

    <Container className="mt-5">
      <Row>
        <Col md={6} className="my-auto">
          <motion.img src="/images/ab.jpg"  alt="About Us" variants={imgVariants} initial="hidden" animate="visible" transition={{ duration: 0.5 }} />
        </Col>
        <Col md={6} className="my-auto">
          <motion.h1 variants={contentVariants} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>About Us</motion.h1>
          <motion.p variants={contentVariants} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>Here at our eCommerce store, we strive to provide the best shopping experience for our customers. Our team is dedicated to offering a wide selection of high-quality products at affordable prices.</motion.p>
          <motion.p variants={contentVariants} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>Our website is built with the MERN stack, which allows us to provide a seamless and secure checkout process. We prioritize customer satisfaction and are always looking for ways to improve our services.</motion.p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <motion.h3 variants={contentVariants} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>Our Mission</motion.h3>
          <motion.p variants={contentVariants} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>Our mission is to become the go-to eCommerce store for all your shopping needs. We aim to provide a convenient and reliable platform for customers to find and purchase products they love.</motion.p>
          <motion.p variants={contentVariants} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>We also strive to give back to the community by supporting local charities and organizations. We believe in the power of giving and hope to make a positive impact on the world.</motion.p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <motion.h3 variants={contentVariants} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>Our Team</motion.h3>
          <motion.p variants={contentVariants} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>Our team consists of passionate and dedicated individuals who share a common goal of providing the best shopping experience for our customers. From our developers to our customer service representatives, each member plays a vital role in making our eCommerce store successful.</motion.p>
          <motion.p variants={contentVariants} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>We value diversity and inclusion and are committed to creating a welcoming and inclusive environment for our team members and customers alike

</motion.p>
</Col>
</Row>
</Container>
    </Layout>

);
};
export default About;


// // import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// const About = () => {
//   return (
//     <Layout title={"About us - Ecommer app"}>

//     <Container className="mt-5">
//       <Row>
//         <Col>
//           <h1>About Us</h1>
//           <p>Here at our eCommerce store, we strive to provide the best shopping experience for our customers. Our team is dedicated to offering a wide selection of high-quality products at affordable prices.</p>
//           <p>Our website is built with the MERN stack, which allows us to provide a seamless and secure checkout process. We prioritize customer satisfaction and are always looking for ways to improve our services.</p>
//         </Col>
//       </Row>
//       <Row className="mt-5">
//         <Col>
//           <h3>Our Mission</h3>
//           <p>Our mission is to become the go-to eCommerce store for all your shopping needs. We aim to provide a convenient and reliable platform for customers to find and purchase products they love.</p>
//           <p>We also strive to give back to the community by supporting local charities and organizations. We believe in the power of giving and hope to make a positive impact on the world.</p>
//         </Col>
//       </Row>
//       <Row className="mt-5">
//         <Col>
//           <h3>Our Team</h3>
//           <p>Our team consists of passionate and dedicated individuals who share a common goal of providing the best shopping experience for our customers. From our developers to our customer service representatives, each member plays a vital role in making our eCommerce store successful.</p>
//           <p>We value diversity and inclusion and are committed to creating a welcoming and inclusive environment for our team members and customers alike.</p>
//         </Col>
//       </Row>
//     </Container>
//     </Layout>

//   );
// };

// export default About;


// const About = () => {
//   return (
//     <Layout title={"About us - Ecommer app"}>
//       <div className="row contactus ">
//         <div className="col-md-6 ">
//           <img
//             src="/images/about.jpeg"
//             alt="contactus"
//             style={{ width: "100%" }}
//           />
//         </div>
//         <div className="col-md-4">
//           <p className="text-justify mt-2">
//           ShopyFast is a dynamic and innovative online marketplace that has quickly become a go-to destination for savvy shoppers. What started as a small e-commerce platform with a focus on speedy delivery and affordable pricing has now grown into a global network with a presence in over 50 countries. Each day, millions of customers turn to ShopyFast to browse and purchase from an extensive selection of products across various categories. In 2022, ShopyFast recorded an impressive revenue of $10 billion, a testament to its commitment to providing value and convenience to its customers. ShopyFast is also passionate about making a positive impact on the world, through responsible business practices, philanthropy, and a dedication to creating meaningful employment opportunities for individuals worldwide. With an unwavering commitment to excellence and a customer-centric approach, ShopyFast continues to be at the forefront of the e-commerce industry.
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default About;
