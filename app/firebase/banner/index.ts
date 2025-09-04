import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  Timestamp,
  updateDoc,
} from "@firebase/firestore";
import { v4 } from "uuid";
import { db } from "../config";

export interface IBanner {
  id: string;
  title: string;
  imageUrl: string;
  isBannerMobile: boolean;
  position: number;
}

export const updateObjectParser = (obj: any) => {
  const newObj = { ...obj };
  for (const key in newObj) {
    if (newObj[key] === undefined) {
      delete newObj[key];
    }
  }
  return newObj;
};

export const addBanner = async (variable: Partial<IBanner>) => {
  const id = v4();
  const docRef = doc(db, "banners", id);
  await setDoc(docRef, {
    ...variable,
    id: id,
    createdAt: Timestamp.now(), // Added creation timestamp
  });
  return { ...variable, id };
};

export const getBanners = async () => {
  const _query = query(collection(db, "banners"));
  const docs = await getDocs(_query);
  return docs.docs.map((item) => item.data() as IBanner);
};

export const updateBanner = async (variable: Partial<IBanner>) => {
  const docRef = doc(db, "banners", variable.id!);
  await updateDoc(docRef, updateObjectParser(variable));
  return true;
};

export const deleteBanner = async (id: string) => {
  const docRef = doc(db, "banners", id);
  await deleteDoc(docRef);
};
