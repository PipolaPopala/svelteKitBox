// @ts-nocheck
import { error } from "@sveltejs/kit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "$lib/firebaseConfig";

export const getUser = async (uid) => {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data();
  }
  else {
    throw error(404, 'user not found');
  }
};