import { defineStore } from "pinia";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebase";
import { ref } from "vue";

export const useFirebaseDb = defineStore("FirebaseDb", () => {
  const SubjectsList = ref([]);
  const onlineCourses = ref([]);
  const querySnapshot = async () => {
    const data = await getDocs(collection(db, "categories"));
    data.forEach((doc) => {
      let dataObj = {
        id: doc.id,
        name: doc.data().name,
      };
      if (dataObj.id === "online-courses") {
        onlineCourses.value = doc.data().onlineCourses;
      }
      SubjectsList.value.push(dataObj);
    });
  };
  querySnapshot();
  return {
    SubjectsList,
    onlineCourses,
  };
});
