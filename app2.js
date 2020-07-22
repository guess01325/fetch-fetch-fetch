console.log('this works');

const container = document.querySelector('.container');
console.log(container)



fetch('https://api.spacexdata.com/v3/capsules')
.then(response =>{
    
    return response.json();


})
.then(data =>{
    //console.log(data);
    //const firstElement = data[0];
    //console.log(firstElement);
    
   // let capseID = firstElement.caspule_id; 
   // console.log(capsuleID);
    
    //let details = firstElement.details;
    //console.log(details)
    //let landings = firstElement.landings
    //console.log(landings)

    for (let i = 0; i < data.length; i++){
        let eachCapsule = data[i];
        //console.log(eachCapsule);

        const obj = {
            capsuleID: eachCapsule.capsule_id, 
            details: eachCapsule.details, 
            landings: eachCapsule.landings
        }
        const capsuleElement = doucument.createElement('p');
        capsuleElement.textContent = obj.capsuleID

        container.appendChild(capsuleElement);
        console.log(obj);
    }

})

