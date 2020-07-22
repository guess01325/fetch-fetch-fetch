

document.addEventListener('DOMContentLoaded', function(){
    const requestURL = 'https://randomuser.me/api/?results=5&?gender'
    const ulList = document.getElementById('people')
    function addPerson(person){
        // create an Li dom element and add it to ul
        let newPerson = document.createElement('li')
        console.log(person.name)
        newPerson.innerText  = person.name.first + ' ' + person.name.last + ' ' + person.dob.date.slice(0, 10)
        ulList.appendChild(newPerson)
    }
        //request is endpoint and promise isURL once fetch request fullfield then do the rest of then
        fetch(requestURL)
        .then(function(responseData){
            //Fetch will package response into an object
            //called fetch object that method allus to do someuseful things we the response
            //use the .json() metohd to return data in the JSON format
        //    take response from api and spit into next promise
        console.log(responseData)
            return responseData.json()
        })
        .then(function(jsonData){
            //noe we have the data in the json format!
            //use it
            //console.log to see what  json
            // let firstPerson = jsonData.results[0].name
            // console.log('first Person:', firstPerson.first, firstPerson.last)
            let people = jsonData.results
            // console.log(jsonData)
            //write out code even if i have written out the definition
            people.forEach(addPerson)
        })
        .catch(function(error){
            //any error encounter in the request or in the .then promise will be passed into tis catch callback
            //oh no.. then print what that error is
            console.log('oh no, theres been an error', error)
        })
    })

