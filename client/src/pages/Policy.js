import React from "react";
import Layout from "./../components/Layout/Layout";
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Policy.css';

const Policy = () => {
  return (
    <Layout title={" Policy"}>

    <Container className="my-5">
      <Row>
        <Col md={6}>
          <div className="privacy-policy-img-container">
            <img src="/images/pp.png"alt="Privacy Policy" />
          </div>
        </Col>
        <Col md={6}>
          <h1 className="mt-3">Privacy Policy</h1>
          <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
          <h2>What information do we collect?</h2>
          <p>We collect information from you when you register on our site, place an order, subscribe to our newsletter, or fill out a form. This information may include your name, email address, mailing address, phone number, and credit card information.</p>
          <h2>How do we use your information?</h2>
          <p>We may use the information we collect from you to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Send you marketing and promotional materials</li>
            <li>Improve our website and customer service</li>
            <li>Respond to your customer service requests and support needs</li>
          </ul>
          <h2>How do we protect your information?</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
          <h2>Do we use cookies?</h2>
          <p>Yes, we use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
          <h2>Changes to our Privacy Policy</h2>
          <p>If we decide to change our Privacy Policy, we will post those changes on this page.</p>
          <h2>Contact Us</h2>
          <p>If you have any questions about our Privacy Policy, you can contact us through our contact page.</p>
        </Col>
      </Row>
    </Container>
    </Layout>

  );
};

export default Policy;



// const Policy = () => {
//   return (
//     <Layout title={"Privacy Policy"}>

//     <Container className="my-5">
//       <h1 className="mb-5">Privacy Policy</h1>
//       <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
//       <h2>What information do we collect?</h2>
//       <p>We collect information from you when you register on our site, place an order, subscribe to our newsletter, or fill out a form. This information may include your name, email address, mailing address, phone number, and credit card information.</p>
//       <h2>How do we use your information?</h2>
//       <p>We may use the information we collect from you to:</p>
//       <ul>
//         <li>Process and fulfill your orders</li>
//         <li>Send you marketing and promotional materials</li>
//         <li>Improve our website and customer service</li>
//         <li>Respond to your customer service requests and support needs</li>
//       </ul>
//       <h2>How do we protect your information?</h2>
//       <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
//       <h2>Do we use cookies?</h2>
//       <p>Yes, we use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
//       <h2>Changes to our Privacy Policy</h2>
//       <p>If we decide to change our Privacy Policy, we will post those changes on this page.</p>
//       <h2>Contact Us</h2>
//       <p>If you have any questions about our Privacy Policy, you can contact us through our contact page.</p>
//     </Container>
//     </Layout>

//   );
// };

// export default Policy;


// const Policy = () => {
//   return (
//     <Layout title={"Privacy Policy"}>
//       <div className="row contactus ">
//         {/* <div className="col-md-6 ">
//           <img
//             src="/images/contactus.jpeg"
//             alt="contactus"
//             style={{ width: "100%" }}
//           />
//         </div> */}
//         <div className="col-md-9">
//           <p>At ShopyFast, we take your privacy and the protection of your personal information very seriously. This privacy policy outlines how we collect, use, and protect your personal data when you visit and use our website.</p>
//           <p><h5>Information We Collect:</h5>

// When you register or make a purchase on our website, we may collect personal information such as your name, email address, shipping address, and payment details. We may also collect non-personal information such as your IP address, browser type, and device information to improve your user experience on our website.</p>
//           <p><h5>How We Use Your Information:</h5>

// We use your personal information to process your orders, provide customer service, and to send you updates and promotional offers if you have opted in to receive them. We may also use your information to improve our website and services, and to detect and prevent fraud.</p>
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//           <p>add privacy policy</p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Policy;
