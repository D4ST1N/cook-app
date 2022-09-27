import { defineStore } from 'pinia';
import { User } from 'firebase/auth';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    
  },
  actions: {
    setUser(user: User) {
      this.user = user;
    },

    unsetUser() {
      this.user = null;
    },
  },
});

// const email = 'd4st1nh0uk@gmail.com';
// const password = 'wook3Uaroy';

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(error);
//     // ..
//   });