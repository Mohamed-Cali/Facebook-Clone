import firebase from "firebase";
import "firebase/storage";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFbH5e3dc-hfYv8H-oY3lTTnC2wm6jvXE",
  authDomain: "facebook-2-8dcad.firebaseapp.com",
  databaseURL: "https://facebook-2-8dcad-default-rtdb.firebaseio.com",
  projectId: "facebook-2-8dcad",
  storageBucket: "facebook-2-8dcad.appspot.com",
  messagingSenderId: "701866981532",
  appId: "1:701866981532:web:4c556e9778fd53fd7f1559"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };



{/* 
const sendPost = async () => {


        const docRef = await addDoc(collection(db, "posts"), {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            timestamp: serverTimestamp(),
          })
          const imageRef = ref(storage, `posts/${docRef.id}`);

          

          await uploadString(imageRef, selectedFile, "data_url").then(
            async snapshot => {
              const downloadURL = await getDownloadURL(imageRef);
              
              await updateDoc(doc(db, "posts", docRef.id), {
                image: downloadURL,
              });
            }
          );
      
        
       
        };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    };
*/}