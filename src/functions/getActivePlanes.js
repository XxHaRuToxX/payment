import { db } from '../firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default async function () {
    const collectionRef = collection(db, "products");
    const filterActives = query(collectionRef, where("active", "==", true))
    const snaps = await getDocs(filterActives);
    const products = [];

    for await (const snap of snaps.docs) {
        const product = snap.data();
        product.id = snap.id;
        const priceSnaps = await getDocs(collection(snap.ref, "prices"));
        product.price = priceSnaps.docs[0].data();
        product.priceId = priceSnaps.docs[0].id;
        products.push(product)
    }
    /*    console.log(products); */
    return products;
}