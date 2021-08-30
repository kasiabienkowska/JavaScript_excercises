let allGood= false;
//Define a Promise
//A Promise can be in one of three states:
//-pending:hasn't settled to a value yet
//-fulfilled: settled successfully (calling resolve())
//-rejected: settled unsuccessfully (calling reject())
let fetchSomeData = new Promise((resolve, reject) =>{
    if(!allGood){
        reject("error fetching data!")
    } else{
        resolve({
            id: 1,
            message:'nice work!'
        })
    }
})

//Consuming a Promise
fetchSomeData.then(fetchData =>{
    console.log('then:', fetchData);
}).catch(err =>{
    console.error('catch:',err);
})