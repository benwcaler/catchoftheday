import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDhEnjRndd92kb9qheBlhNnTkuacBkOPXw",
  authDomain: "catch-of-the-day-ben-1.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ben-1.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;