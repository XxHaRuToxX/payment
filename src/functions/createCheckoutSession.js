import { db } from '../firebase/firebase';
import { collection, doc, addDoc, onSnapshot } from 'firebase/firestore';

export const createCheckouSession = async (uid, cart) => {
    const collectionRef = collection(db, `customers/${uid}/checkout_session`);
    addDoc(collectionRef, {
        mode: "payment",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
        collect_shipping_address: true,
        line_items: cart.map(item => {
            return {
                quantity: 1,
                price: item.priceId
            }
        })
    })
}