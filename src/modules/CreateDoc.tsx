import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export default async function createTestDoc() {
  try {
    await addDoc(collection(db, "tests"), {
      hello: "hello~",
    });
  } catch (err) {
    console.log(`createTestDoc err: ${err}`);
  }
}
