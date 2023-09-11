import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase-config";

export default function createTestImg(e: React.ChangeEvent<HTMLInputElement>) {
  const file = e.currentTarget.files?.[0];

  if (file) {
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
}
