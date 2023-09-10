import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase-config";

export default function createTestImg(e: any) {
  try {
    const file = e.currentTarget.files?.[0];
    const fileName = file.name;
    const testImgsRef = ref(storage, `testImgs/${fileName}`);
    const uploadTask = uploadBytesResumable(testImgsRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(`1. snapshot:${snapshot}`);
      },
      (err) => {
        console.log(`2. upload test Img err:${err}`);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(`3. downloadURL:${downloadURL}`);
        });
      },
    );
  } catch (err) {
    console.log(`0. createTestImg err: ${err}`);
  }
}
