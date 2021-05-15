import firebase from 'firebase/app';
import "firebase/database";
import 'firebase/auth';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  };

 
  firebase.initializeApp(firebaseConfig);
  
  const database = firebase.database();
  const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
 export  { firebase , googleAuthProvider ,database as default };

  /*
database.ref('expenses').on('child_removed',(snapshot)=>{
    console.log(snapshot.val());
});


  database.ref('expenses').on('child_changed',(snapshot)=>{
     console.log(snapshot.val());
 });
/*database.ref('expenses').on('value',(snapshot)=>{
    const expenses=[];

      snapshot.forEach((childSnapshot) =>{
         expenses.push({
             id: childSnapshot.key,
             ... childSnapshot.val()
         }); 
      });
        console.log(expenses); 
})*/

/*database.ref('expenses')
  .once('value')
  .then((snapshot)=>{
      const expenses=[];

      snapshot.forEach((childSnapshot) =>{
         expenses.push({
             id: childSnapshot.key,
             ... childSnapshot.val()
         }); 
      });
        console.log(expenses);
  })*/

/*database.ref('expenses').push({
         description: 'water bill',
         note : 'nothing muvch',
         amount : 33400,
         createdAt : 9998854
});


database.ref().on('value',(snapshot)=>{
     const val=snapshot.val();
     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)

})

  database.ref().set({
      name : 'manish gupta',
      age :16,
      stressLevel : 6,
      job:{
          title : 'software',
          company :'google'
      }
  }).then(()=>{
      console.log('data is served');
  }).catch((e)=>{
      console.log('this failed' , e);
  });


/*let adRef=database.ref();
adRef.remove().then(()=>{
    console.log('remove success');
}).catch((e)=>{
    console.log('error caught :' , e);
})

database.ref().update({
    stressLevel : 9,
    'job/company' : 'amazon',

})*/