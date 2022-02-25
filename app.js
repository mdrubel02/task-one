console.log('connentig');
//fist task done  01
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(Response=> Response.json()) //data ta ke convert kortese json a
// .then(data => console.log(data));


//02 task 

//   function loadData(){
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res=>res.json())
//     .then (data=>display(data));
//   }

//   function display(rubel){
//         console.log(rubel);
//   }


  // 03 task

  // const dataLoad=()=>{
  //        fetch('https://jsonplaceholder.typicode.com/comments')
  //        .then(res=> res.json())
  //        .then(data => display(data))
  // }
  // dataLoad();


  // const display=(robin)=>{
  //     const main = document.getElementById('main');
  //       for(let element of robin){
  //           console.log(element.email);
  //           const p =document.createElement('p')
  //           p.innerText=element.email
  //           main.appendChild(p);
  //       }
  // }


// 04 task 
// document.getElementById('arrow').addEventListener('click',()=>{
//   lodaComment();
// })


// const lodaComment=()=>{
//   fetch('https://jsonplaceholder.typicode.com/comments')
//   .then(res=>res.json())
//   .then(data => displayUser(data));
// }


// const displayUser=(data)=>{
//     console.log(data)
//     const second=document.getElementById('second');
//     data.forEach(dogs =>{
//         console.log(dogs);
//     })
// }


// 05 task

// ৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা।


// document.getElementById('dynamic').addEventListener('click',()=>{
//   loadData();
// });

// const loadData=()=>{
//   fetch('https://jsonplaceholder.typicode.com/comments')
//   .then(res=>res.json())
//   .then(data =>displayUi(data));
// };


// const displayUi=(rubel)=>{
//   const mainDiv=document.getElementById('main');
//   rubel.forEach(comment =>{
//     console.log(comment.body);
//   })
// }



// ৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে। 


document.getElementById('random-user').addEventListener('click',()=>{
  loadData();
})


const loadData=()=>{
  fetch('https://randomuser.me/api/?results=5000')
  .then(res =>res.json())
  .then(data => display(data))
}


const display=(desh)=>{
  // console.log(hello.results);
  const main=document.getElementById('main');
  main.classList.add('mystyle')
  const random=desh.results.slice(5,57);
  console.log(random);
  random.forEach(randomUser =>{
    console.log(randomUser);
  const div=document.createElement('div');
  div.classList.add('col-lg-3');
  div.innerHTML=`
  <div class="card" style="width: 18rem;">
  <img src="${randomUser.picture.thumbnail}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${randomUser.name.title} ${randomUser.name.first} ${randomUser.name.last}</h5>
    <p class="card-text">city: ${randomUser.location.city}</p>
    <p class="card-text">state: ${randomUser.location.state}</p>
    <p class="card-text">country: ${randomUser.location.country}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
 </div>
  `;
  
  main.appendChild(div);
  
})
};
  
