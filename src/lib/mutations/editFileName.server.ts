import { db } from "$lib/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function editFileName(id: string, newName: string) {
  if (id === '') throw new Error('no file selected');
  if (newName === '') throw new Error('name cannot be empty');
  const docRef = doc(db, 'files', id);
  await updateDoc(docRef, { fileName: newName });
}