import { db } from "../firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";

export const fetchData = async () => {
  try {
    const snapshot = collection(db, "podcast");
    const querySnapshot = await getDocs(snapshot);

    var dataList = [];

    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        dataList.unshift({ ...doc.data(), doc: doc.id });
      });
    }
    return dataList
  } catch (error) {
    console.log(error);
  }
};
