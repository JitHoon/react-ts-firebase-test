import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase-config";

export default function createTestImg(e: any) {
  const file = e.currentTarget.files?.[0];
  const fileName = file.name;
  const testImgsRef = ref(storage, `testImgs/${fileName}`);
  const uploadTask = uploadBytesResumable(testImgsRef, file);

  uploadTask.on(
    "state_changed",
    () => {},
    () => {},
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(() => {});
    },
  );
}
