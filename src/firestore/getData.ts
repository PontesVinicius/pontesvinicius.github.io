import { FIREBASE_APP } from "@/config";
import { getFirestore, getDocs, doc, collection } from "firebase/firestore";
const db = getFirestore(FIREBASE_APP);

const getDocument = async () => {
  let result;
  const colRef = collection(db, "projects");

  try {
    const docsSnap = await getDocs(colRef);
    return docsSnap.forEach((doc) => {
      return doc.data();
    });
  } catch (e) {
    return { e };
  }
};

export default getDocument;
