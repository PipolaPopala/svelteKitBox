import { error } from "@sveltejs/kit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "$lib/firebaseConfig";
import type { TUser } from "$lib/components/types";

export const getUser = async (uid: string):Promise<TUser> => {
  const userRef = doc(db, 'users', uid)
  const userSnap = await getDoc(userRef)
  if (userSnap.exists()) {
    return userSnap.data() as TUser
  }
  else {
    throw error(404, 'user not found')
  }
}
