import { db } from '../firebase/firebase';
import { doc, collection, getDoc } from 'firebase/firestore';

async function getPlansByIs(id) {
    const collectionRef = collection(db, "products");
    const docuRef = doc(collectionRef, id);
    const snapDoc = await getDoc(docuRef);
    const plan = snapDoc.data();

    return plan;
}

export default getPlansByIs;