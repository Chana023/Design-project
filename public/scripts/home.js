let button = document.getElementById('updateButton');

button.addEventListener('click', function() {
    //alert( "Hello World!" );
    console.log("Update required!!!");
}, false);



const building = document.querySelector('#Building');

function renderBuilding(doc) {
    let li = document.createElement('li');
    let build = document.createElement('span');

    li.setAttribute('data-id',doc.id);
    build.textContent = doc.data().Building;

    li.appendChild(build);

    building.appendChild(li);
}

db.collection('2018').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {

        renderBuilding(doc);
        console.log(doc.data().Building);
    });
});





