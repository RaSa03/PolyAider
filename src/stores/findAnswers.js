import { defineStore } from "pinia";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import db from "../firebase/firebase";
import { ref, watch } from "vue";

export const useFindAnswers = defineStore("FindAnswers", () => {
  const AnswersList = ref([]);
  const Finder = async (id) => {
    const sfRef = collection(db, "categories", "online-courses", id);
    AnswersList.value = [];
    const dat = await getDocs(sfRef);
    dat.forEach((collection) => {
      AnswersList.value.push(collection.data());
    });
  };
  const SearchedList = (search) => {
    const list = AnswersList.value.filter(
      (item) => item.question.includes(search) || item.answer.includes(search)
    );
    return list;
  };
  return {
    SearchedList,
    AnswersList,
    Finder,
  };
});
