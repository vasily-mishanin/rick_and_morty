import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase';

type Props = {
  username?: string;
  email: string;
  password: string;
};

export const signUp = async (data: Props) => {
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      return updateProfile(userCredential.user, {
        displayName: data.username,
      });
    })
    .then(() => {
      console.log('User profile updated successfully');
    })
    .catch((err) => console.log(err));
};

export const signIn = async (data: Props) => {
  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error when sigin in', error.message);
      return error.message;
    }
    return 'Error while sign in';
  }
};
