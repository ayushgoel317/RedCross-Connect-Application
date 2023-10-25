import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />


          <p>
          RedCross Connect" is a cutting-edge blood bank application that has been developed with a mission to make blood donation and management more efficient, accessible, and responsive. This innovative application is a vital tool for blood banks, donors, and recipients, offering a seamless and user-friendly experience from start to finish.
          

The heart of "RedCross Connect" lies in its user-friendly interface, making it effortless for potential donors to register and create their profiles. Users can provide essential information such as their name, contact details, and blood type, enabling them to become a part of a vibrant and life-saving community.

For those eager to donate, the app offers a feature to locate the nearest blood banks and ongoing blood drives. This makes the process of finding a donation center convenient and ensures that users can contribute to the cause without hassle.


          </p>
          <p>
          The application prioritizes user privacy and data security. All personal and medical information is safeguarded, providing users with peace of mind as they engage in the blood donation process.

In summary, "RedCross Connect" is not just an application; it's a lifeline that connects donors, recipients, and blood banks in an ecosystem designed to save lives. Its user-centric approach, real-time updates, and commitment to community engagement make it an indispensable tool in the world of blood donation and management. Whether you're a donor or a recipient, "RedCross Connect" is the bridge that brings together those in need and those willing to help.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
