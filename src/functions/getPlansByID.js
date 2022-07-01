import { db } from '../firebase/firebase';
import { doc, collection, getDocs, getDoc } from 'firebase/firestore';

async function getPlansByIs(id) {
    const collectionRef = collection(db, "products");
    const docuRef = doc(collectionRef, id);
    const snapDoc = await getDoc(docuRef);
    const plan = snapDoc.data();

    const priceSnaps = await getDocs(collection(snapDoc.ref, "prices"));
    plan.price = priceSnaps.docs[0].data();
    plan.priceId = priceSnaps.docs[0].id;

    return plan;
}

export default getPlansByIs;