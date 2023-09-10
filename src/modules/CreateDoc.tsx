import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export default async function createTestDoc() {
  await addDoc(collection(db, "tests"), {
    hello: "hello~",
  });
}
