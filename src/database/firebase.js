import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDna-vdwn1ygCYmAG1KFmUMo8-zm2oVzlA",
  authDomain: "shop-portfolio-b7b2b.firebaseapp.com",
  projectId: "shop-portfolio-b7b2b",
  storageBucket: "shop-portfolio-b7b2b.appspot.com",
  messagingSenderId: "641028200142",
  appId: "1:641028200142:web:5d6c79a27b879cb384229f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const productsRef = collection(db, "products");

export const getProducts = async () => {
  const productsSnap = await getDocs(productsRef);
  const productList = [];
  productsSnap.forEach((doc)=>{productList.push(doc.data())});
  return productList;
}