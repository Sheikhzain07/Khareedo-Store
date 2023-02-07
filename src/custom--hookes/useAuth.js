import React, { useState, useeEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";

function useAuth() {
  const [currentUser, setCurrentUser] = useState({});

  useeEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  });
  return { currentUser };
}

export default useAuth;
