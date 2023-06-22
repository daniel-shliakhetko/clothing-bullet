import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
const storage = getStorage(app);

const productsRef = collection(db, "products");

export const getProducts = async () => {
  const productsSnap = await getDocs(productsRef);
  const productList = [];
  productsSnap.forEach((doc) => {
    const product = doc.data();
    product.id = doc.id;
    productList.push(product);
  });
  return productList;
};

export const getImage = async (storageLocation) => {
  const gsRef = ref(storage, storageLocation);

  return getDownloadURL(gsRef)
    .then((url) => {
      console.log(url);
      return url;
    })
    .catch((error) => {
      switch (error.code) {
        case "storage/object-not-found":
          console.log("Storage. Object not found!");
          break;
        case "storage/canceled":
          console.log("Storage. Canceled!");
          break;
        case "storage/unknown":
          console.log("Storage. Unknown!");
          break;
        default:
          console.log("Storage. Something went wrong!");
          break;
      }
      return null;
    });
};
