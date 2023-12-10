import React from "react";
import { useState } from "react";
import { Header } from "../components/Header.js";
import { SideNav } from "../components/SideNav.js";
import { Body } from "../components/ContactBody.js";
import { Modal } from "../components/Modal.js";

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  );
}

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const user = { email: 'MKaminski@Momnt.com' }; // Replace with actual user data
  const [isMinimized, setIsMinimized] = useState(false);
  const toggleMinimized = () => setIsMinimized(!isMinimized);

  return (
    <div>
      <Header />
      <SideNav isMinimized={isMinimized} toggleMinimized={toggleMinimized} />
      <Body isMinimized={isMinimized} toggleMinimized={toggleMinimized} />
      <Modal show={showModal} onClose={() => setShowModal(false)} user={user} />
    </div>
  );
}