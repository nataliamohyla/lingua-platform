import { ref, get } from "firebase/database";
import { db } from "../firebase/config";

export const getTeachers = async () => {
  const teachersRef = ref(db, "teachers");

  const snapshot = await get(teachersRef);

  if (!snapshot.exists()) {
    return [];
  }

  const data = snapshot.val();

  return Object.entries(data).map(([id, teacher]) => ({
    id,
    ...teacher,
  }));
};