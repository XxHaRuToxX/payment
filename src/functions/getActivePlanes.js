import { db } from '../firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default async function () {
    const collectionRef = collection(db, "products");
    const snaps = await getDocs(collectionRef);
    const planess = [];

    for await (const snap of snaps.docs) {
        planess.push(snap.data())
    }

    console.log(planess);
}