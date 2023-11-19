import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, get, child, onValue } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";


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
  const db = getDatabase(app);

//filling the table
var rating = 0;
var tbody = document.getElementById("user-list");
function AddItemToTable(username, item, photo, swap_info) {
    let trow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    td1.innerHTML= ++rating;
    td2.innerHTML= username;
    td3.innerHTML= item;
    td4.innerHTML= photo;
    td5.innerHTML= swap_info;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);

    tbody.appendChild(trow);
}

function AddAllItemsToTable(TheUser) {
    rating=0;
    tbody.innerHTML="";
    TheUser.forEach(element => {
        AddItemToTable(element.username, element.item, element.photo, element.swap_info);
    });
}

// async function GetAllDataOnce() {
//     const dbRef = ref(db, "users");
//     await get(child(dbRef, "users"))
//     .then((snapshot) => {
//         var allUsers = [];

//         snapshot.forEach(childSnapshot =>{
//             students.push(childSnapshot.val());
//         });
//         AddAllItemsToTable(allUsers);
//     });
// }

function GetAllDataRealtime() {
    const dbRef = ref(db, 'users');
    onValue(dbRef, (snapshot)=> {
        var allUsers = [];

        snapshot.forEach(childSnapshot => {
            allUsers.push(childSnapshot.val());
        });
        AddAllItemsToTable(allUsers);
    });
}

window.onload = GetAllDataRealtime();






