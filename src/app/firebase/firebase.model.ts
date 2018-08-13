export const config = {
  apiKey: "AIzaSyAuH-oF2M7bL79vxe4930GTe4dWgkVodRg",
  authDomain: "dorado-project.firebaseapp.com",
  databaseURL: "https://dorado-project.firebaseio.com",
  projectId: "dorado-project",
  storageBucket: "dorado-project.appspot.com",
  messagingSenderId: "992264342616"
};



export interface Recipient {
  uid: string,
  name?: string,
  address?: string,
  cellphoe?: string
}