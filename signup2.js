import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyD6nDqwgjdIjbdlq9EvPnRTr7tAwyYaSgE",
    authDomain: "codejam-4934c.firebaseapp.com",
    databaseURL: "https://codejam-4934c-default-rtdb.firebaseio.com",
    projectId: "codejam-4934c",
    storageBucket: "codejam-4934c.appspot.com",
    messagingSenderId: "1030276208419",
    appId: "1:1030276208419:web:bd48475b7a045271bd5e96",
    measurementId: "G-HS4QR21Y3P"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

async function writeUserData(userId, username, photo, item, swap_info) {
    console.log(username);
    await set(ref(database, 'users/' + userId), {
        username : username,
        item : item,
        photo : photo,
        swap_info : swap_info
    });
  }

function inputs() {
    
    let submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', async function() {
        let username = document.getElementById('name').value;
        let item = document.getElementById('item').value;
        let photo = document.getElementById('photo').value;
        let swap_info = document.getElementById('swapinfo').value;

        await writeUserData(username, username, photo, item, swap_info);
        window.location.href = "main.html";
    })  
}

inputs();
