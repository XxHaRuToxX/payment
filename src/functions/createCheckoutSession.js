import { db } from '../firebase/firebase';
import { collection, doc, addDoc, onSnapshot } from 'firebase/firestore';

export const createCheckouSession = async (uid, cart) => {
    const collectionRef = collection(db, `customers/${uid}/checkout_sessions`);
    const { id } = await addDoc(collectionRef, {
        mode: "payment",
        success_url: "https://localhost:3000/perfil",
        cancel_url: window.location.origin,
        collect_shipping_address: true,
        line_items: cart.map(item => {
            return {
                quantity: 1,
                price: item.priceId
            }
        })
    })

    const cancelarstreaming = onSnapshot(
        doc(db, `customers/${uid}/checkout_sessions/${id}`),
        (snapshot) => {
            let url = snapshot.data().url;
            console.log("url desde snapshot: ", url);
            if (url) {
                cancelarstreaming();
                window.location.href = url;
            }
        }
    )
}