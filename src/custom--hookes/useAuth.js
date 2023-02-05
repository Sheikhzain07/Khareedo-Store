import React, { useState, useeEffect } from "react";
import { onAuthStateChange } from "firebase/auth";
import { auth } from "../firebase.config";

function useAuth() {
  const [currentUser, setCurrentUser] = useState({});
  useeEffect(() => {
    // onAuthStateChange
  });
  return <div>useAuth</div>;
}

export default useAuth;
