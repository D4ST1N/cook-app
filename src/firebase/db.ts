import { Ingridient } from '@/ts/interfaces/Ingridient.interface';
import { User } from '@firebase/auth';
import { getFirestore, collection, getDocs, addDoc, Firestore, query, where } from 'firebase/firestore';
import firebaseApp from './firebaseApp';

class DbHelper {
  private db: Firestore;

  constructor() {
    this.db = getFirestore(firebaseApp);
  }

  async getDocuments(dbName: string) {
    const q = query(collection(this.db, dbName), where('user', '==', ''))
    const querySnapshot = await getDocs(q);

    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  }

  async getUserRecipes(user: User) {
    console.log(user.uid);
    const q = query(collection(this.db, 'resipes'), where('creatorId', '==', user.uid));
    const querySnapshot = await getDocs(q);

    console.log(querySnapshot);

    return querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  }

  async getAllIngridients() {
    const querySnapshot = await getDocs(collection(this.db, 'ingridients'));

    return querySnapshot.docs;
  }

  async addUserIngridient(ingridient: Ingridient) {
    const docRef = await addDoc(collection(this.db, 'ingridients'), ingridient);

    return docRef;
  }
}

const Db = new DbHelper()

export default Db;
