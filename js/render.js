var header = document.getElementById('header');
var carousel = document.getElementById('carousel');
var card_title = document.getElementById('card_title');
var card = document.getElementById('card');
var footer = document.getElementById('footer');





//event-listeners



//global Variables
var carousel_one='./resources/candidates/carousel/carousel_one.png';
var carousel_two= './resources/candidates/carousel/carousel_two.png';
var carousel_three= './resources/candidates/carousel/carousel_three.png';
var title = "E-Polls";
var img ='./resources/candidates/logo/voting-kenya-187195867.jpg';
var candidates=[
{
     name:'Hon. Alfred Mutua',
     button_id:'button_alfred',
     party:'Independent Party',
     imgUrl:'./resources/candidates/img/alfred_mutua_.jpg',
     votes:'display'
},


{
	name:'Hon. Gideon Moi',
	 button_id:'button_moi',
     party:'KANU',
     imgUrl:'./resources/candidates/img/Moi.jpg',
     votes:'vote_moi'
},
{
    name:'Hon Peter Kenneth',
    button_id:'button_peter',
    party:'Jubilee Alliance',
    imgUrl:'./resources/candidates/img/peter_keneth.jpg',
    votes:'vote_peter'

},
{
	name:'Hon. Kalonzo Musyoka',
    button_id:'button_kalonzo',
    party:'Wiper Democratic Movement',
    imgUrl:'./resources/candidates/img/kalonzo_musyoka.jpg',
    votes:'vote_kalonzo'
},

{
	 name:'Hon. Martha Karua',
     button_id:'button_martha',
     party:'Narc Kenya',
     imgUrl:'./resources/candidates/img/Martha-Karua.png',
     votes:'vote_mukhisa'

},
{
	 name:'Hon. Mukhisa Kitui',
     button_id:'button_mukhisa',
     party:'Independent Party',
     imgUrl:'./resources/candidates/img/icc-mukhisakituyi.jpg',
     votes:'vote_mukhisa'

},
{
    name:'Hon. Musalia Mudavadi',
    button_id:'button_musalia',
    party:'ANC',
    imgUrl:'./resources/candidates/img/mudavadi_moses.jpg',
    votes:'vote_musalia'
},
{
	name:"Hon. Moses Wetangula",
	button_id:'button_moses',
	party:'Ford Kenya',
	imgUrl:'./resources/candidates/img/moses_wetangula.jpeg',
	votes:'vote_moses'
},
{
	name:'Hon. Raila Odinga',
	button_id:'button_raila',
	party:'Orange Democratic Movement',
	imgUrl:'./resources/candidates/img/Raila_A._Odinga.jpg',
	votes:'vote_raila'
},
{
	name:'Hon. William Ruto',
	button_id:'button_ruto',
	party:'UDA',
	imgUrl:'./resources/candidates/img/DP_Ruto.png',
	votes:'vote_ruto'
}

];



var Header=
	 `
         <nav class="navbar  navbar-expand-lg navbar-light bg-light fixed-top">
             <a class="navbar-brand" href="#"><img src="${img}" width="30" height="30" alt="">
             ${title}
             
            </a>
	`;


var Carousel =`

        
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                        <div class="carousel-item active">
                  <img class="d-block w-100" src="${carousel_one}" alt="First slide">
             </div>
    <div class="carousel-item">
                  <img class="d-block w-100" src="${carousel_two}" alt="Second slide">
     </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="${carousel_three}" alt="Third slide">
    </div>
  </div>
</div>

`;

var Card_title = `

  <div class="container text-center ">
               <h4 class="underline">Candidate Lists</h4>

   </div>



`;

function Card(i){
 
 return `
     

  <div class="col-md-4">
     <div class="card-transparent border-secondary mb-3 shadow-lg">
          <img class="card-img-top" style="width:100%;" src="${candidates[i].imgUrl}" alt="Card image cap">
              <div class="card-body">
              <i style="color:orange;" class="fa fa-star"></i>
              <i style="color:orange;" class="fa fa-star"></i>
              <i style="color:orange;" class="fa fa-star"></i>
              <i style="color:orange;" class="fa fa-star"></i>
              <i style="color:orange;" class="fa fa-star"></i>
              <p class="card-text">Name:&nbsp ${candidates[i].name}</p>
              <p class="card-text">Party:&nbsp${candidates[i].party}</p>


        <div class="d-flex justify-content-between align-items-center">
           
           
           <button id="${candidates[i].button_id}" class="btn btn-primary button-stable icon-left ion-ios-book">Vote</button>
           <div id="${candidates[i].votes}"></div>
        </div>
  </div>
</div>

</div>



 `;

}

var Footer= `



<div class="container text-center">

   <h4>Days Left To 2022 Elections</h4>
</div>
<div class="col-lg-6">
		<div class="container text-center">
			<div id="clockdiv">
<div>	
<span class="days" id="day"></span>
<div class="smalltext">Days</div>
</div>

<div>
<span class="hours" id="hour"></span>
<div class="smalltext">Hours</div>
</div>

<div>
<span class="minutes" id="minute"></span>
<div class="smalltext">Minutes</div>
</div>


<div>
<span class="seconds" id="second"></span>
<div class="smalltext">Seconds</div>
</div>
</div>
	</div>
</div>
<div class="container text-center">

   <p>Copyrights@2021 E-systems</p>
</div>



    

`;



function render(){

swal({

     	title:'E-Polls Projections',

        text: "Votes casted are anonymous.No identity is given by each voter.Vote freely for your favourite candidate and lets make the upcoming election peaceful",
        icon: "success",
        button: "Okay!",

     });

     header.innerHTML=Header;
	 carousel.innerHTML=Carousel;
	 card_title.innerHTML=Card_title;
	 footer.innerHTML=Footer;




    for (var i = 0; i < candidates.length; i++) {

    	card.innerHTML+=`${Card(i)}`;
    	
    }
      //local variables
     var button = document.getElementById('button_alfred');
     var button_2= document.getElementById('button_moi');
     var button_3= document.getElementById('button_peter');
     var button_4= document.getElementById('button_kalonzo');
     var button_5= document.getElementById('button_musalia');
     var button_6 = document.getElementById('button_moses');
     var button_7 = document.getElementById('button_raila');
     var button_8 = document.getElementById('button_ruto');
     var button_9 = document.getElementById('button_mukhisa');
     var button_10 = document.getElementById('button_martha');


     var time= new Date();

        button.addEventListener('click', voteForMutua);
		button_2.addEventListener('click', voteForMoi);
		button_3.addEventListener('click', voteForPeter);
		button_4.addEventListener('click', voteForKalonzo);
		button_5.addEventListener('click', voteForMusalia);
	    button_6.addEventListener('click', voteForMoses);
		button_7.addEventListener('click', voteForRaila);
	    button_8.addEventListener('click', voteForRuto);
	    button_9.addEventListener('click', voteForMukhisa);
	    button_10.addEventListener('click', voteForMartha);



	       
       //alfred Mutua
	  function voteForMutua(){



         document.getElementById('button_moi').disabled=true;
         var moi_votes = 0;
         document.getElementById('button_alfred').disabled=true;
         // var alfred_votes= firebase.database.ServerValue.increment(1);

         document.getElementById('button_peter').disabled=true;
         var peter_votes=0;
         document.getElementById('button_kalonzo').disabled=true;
         var kalonzo_votes=0;
         document.getElementById('button_musalia').disabled=true;
         var musalia_votes=0;
         document.getElementById('button_moses').disabled=true;
         var moses_votes=0;
         document.getElementById('button_raila').disabled=true;
         var raila_votes=0;
         document.getElementById('button_ruto').disabled=true;
         var ruto_votes=0;
         document.getElementById('button_mukhisa').disabled=true;
         var mukhisa_votes = 0;
         document.getElementById('button_martha').disabled=true;
          var martha_votes = 0;




          if( localStorage.getItem('Voted') == null){

               localStorage.setItem('Voted', 'Voted For Alfred Mutua');
               console.log(localStorage.getItem('Voted'));


               
        firebase.database()
              .ref('user') 
              .child('likes')
              .set({
              
              	alfred_votes:firebase.database.ServerValue.increment(1),
              	moi_votes:moi_votes,
              	peter_votes:peter_votes,
              	kalonzo_votes:kalonzo_votes,
              	musalia_votes:musalia_votes,
              	moses_votes:moses_votes,
              	raila_votes:raila_votes,
              	ruto_votes:ruto_votes,
              	martha_votes:martha_votes,
              	mukhisa_votes:mukhisa_votes

 })

     swal({

        title:'Voted Successfuly',
        text: "Thank You For Casting Your Voted. You have Voted For Hon. Alfred Mutua",
        icon: "success",
        button: "Okay!",

     });

              console.log('Voted Successfuly');
         }

         else{



      swal({

        title:'Already Voted',
         text: "Sorry Voter!!. You Have Already Casted Your Voted.",
        icon: "warning",
        button: "Okay!",

     });

         	console.log('Already Voted');
         }
    }




      //Gideoon Moi
      
      function voteForMoi(){


         document.getElementById('button_moi').disabled=true;
         document.getElementById('button_alfred').disabled=true;

         document.getElementById('button_peter').disabled=true;
       
         document.getElementById('button_kalonzo').disabled=true;
        
         document.getElementById('button_musalia').disabled=true;
        
         document.getElementById('button_moses').disabled=true;
      
         document.getElementById('button_raila').disabled=true;
         
         document.getElementById('button_ruto').disabled=true;

         document.getElementById('button_mukhisa').disabled=true;
       
         document.getElementById('button_martha').disabled=true;


          var peter_votes=0;
          var ruto_votes=0;
          var kalonzo_votes=0;
          var musalia_votes=0;
          var moses_votes=0;
          var raila_votes=0;
          var ruto_votes=0;
          var mukhisa_votes=0;
          var martha_votes=0;


          
          if( localStorage.getItem('Gideon') == null){

               localStorage.setItem('Gideon', 'Voted For Gideon Moi');
               console.log(localStorage.getItem('Gideon'));

            //insert to database
                var usersRef=firebase.database().ref()
                var hopperRef = usersRef.child("moi")
                var childRef=hopperRef.child('likes')

     childRef.update({
    	alfred_votes:0,
    	moi_votes:firebase.database.ServerValue.increment(1),
        peter_votes:peter_votes,
        kalonzo_votes:kalonzo_votes,
        musalia_votes:musalia_votes,
        moses_votes:moses_votes,
        raila_votes:raila_votes,
        ruto_votes:ruto_votes,
        martha_votes:martha_votes,
        mukhisa_votes:mukhisa_votes

}) 




       swal({

        title:'Voted Successfuly',
        text: "Thank You For Casting Your Voted. You have Voted For Hon. Gideon Moi",
        icon: "success",
        button: "Okay!",

     });

              console.log('Voted Successfuly');
         }

         else{



      swal({

        title:'Already Voted',
         text: "Sorry Voter!!. You Have Already Casted Your Voted.",
        icon: "warning",
        button: "Okay!",

     });


      }  
  }

      //Gideon Moi 


      //Peter Kenneth
      function voteForPeter(){

         document.getElementById('button_alfred').disabled=true;
	     document.getElementById('button_moi').disabled=true;
	     document.getElementById('button_peter').disabled=true;

         document.getElementById('button_kalonzo').disabled=true;
         document.getElementById('button_musalia').disabled=true;
         document.getElementById('button_moses').disabled=true;
         document.getElementById('button_raila').disabled=true;
         document.getElementById('button_ruto').disabled=true;
         document.getElementById('button_mukhisa').disabled=true;
         document.getElementById('button_martha').disabled=true;


          var alfred_votes=0;
          var moi_votes=0;
          var kalonzo_votes=0;
          var musalia_votes=0;
          var moses_votes=0;
          var raila_votes=0;
          var ruto_votes=0;
          var mukhisa_votes=0;
          var martha_votes=0;


            if( localStorage.getItem('Peter') == null){

               localStorage.setItem('Peter', 'Voted For Peter Kenneth');
               console.log(localStorage.getItem('Peter'));




                var usersRef=firebase.database().ref()
                var hopperRef = usersRef.child("peter")
                var childRef=hopperRef.child('likes')
             childRef.update({
                  	alfred_votes:alfred_votes,
    	            moi_votes:moi_votes,
                    peter_votes:firebase.database.ServerValue.increment(1),
                    kalonzo_votes:kalonzo_votes,
                    musalia_votes:musalia_votes,
                    moses_votes:moses_votes,
                    raila_votes:raila_votes,
                    ruto_votes:ruto_votes,
                    martha_votes:martha_votes,
                    mukhisa_votes:mukhisa_votes


           })

              swal({

                       title:'Voted Successfuly',
                       text: "Thank You For Casting Your Voted. You have Voted For Hon. Peter Kenneth",
                       icon: "success",
                       button: "Okay!",

                 });




           }else{


           	 swal({
                  title:'Already Voted',
                  text: "Sorry Voter!!. You Have Already Casted Your Voted.",
                  icon: "warning",
                  button: "Okay!",

     });




           }

      }


      //PeterKeneth


      //kalonzo musyoka

       function voteForKalonzo(){

       	 document.getElementById('button_alfred').disabled=true;
	     document.getElementById('button_moi').disabled=true;
	     document.getElementById('button_peter').disabled=true;

         document.getElementById('button_kalonzo').disabled=true;
         document.getElementById('button_musalia').disabled=true;
         document.getElementById('button_moses').disabled=true;
         document.getElementById('button_raila').disabled=true;
         document.getElementById('button_ruto').disabled=true;
         document.getElementById('button_mukhisa').disabled=true;
         document.getElementById('button_martha').disabled=true;


          var alfred_votes=0;
          var moi_votes=0;
          var peter_votes=0;
          var musalia_votes=0;
          var moses_votes=0;
          var raila_votes=0;
          var ruto_votes=0;
          var mukhisa_votes=0;
          var martha_votes=0;




            if( localStorage.getItem('Kalonzo') == null){

               localStorage.setItem('Kalonzo', 'Voted For Kalonzo Musyoka');
               console.log(localStorage.getItem('Kalonzo'));

            //   insert to database
                var usersRef=firebase.database().ref()
                var hopperRef = usersRef.child("kalonzo")
                var childRef=hopperRef.child('likes')
     childRef.update({
    	alfred_votes:alfred_votes,
    	moi_votes:moi_votes,
        peter_votes:peter_votes,
        kalonzo_votes:firebase.database.ServerValue.increment(1),
        musalia_votes:musalia_votes,
        moses_votes:moses_votes,
        raila_votes:raila_votes,
        ruto_votes:ruto_votes,
        martha_votes:martha_votes,
        mukhisa_votes:mukhisa_votes


})



                 swal({

                       title:'Voted Successfuly',
                       text: "Thank You For Casting Your Voted. You have Voted For Hon. kalonzo Musyoka",
                       icon: "success",
                       button: "Okay!",

                 });





           }else{

           	   	 swal({
                  title:'Already Voted',
                  text: "Sorry Voter!!. You Have Already Casted Your Voted.",
                  icon: "warning",
                  button: "Okay!",

     });



           }








       }


      //kalonzo musyoka


//musalia

function voteForMusalia() {


		 document.getElementById('button_alfred').disabled=true;
	     document.getElementById('button_moi').disabled=true;
	     document.getElementById('button_peter').disabled=true;

         document.getElementById('button_kalonzo').disabled=true;
         document.getElementById('button_musalia').disabled=true;
         document.getElementById('button_moses').disabled=true;
         document.getElementById('button_raila').disabled=true;
         document.getElementById('button_ruto').disabled=true;
         document.getElementById('button_mukhisa').disabled=true;
         document.getElementById('button_martha').disabled=true;


          var alfred_votes=0;
          var moi_votes=0;
          var peter_votes=0;
          var kalonzo_votes=0;
          var moses_votes=0;
          var raila_votes=0;
          var ruto_votes=0;
          var mukhisa_votes=0;
          var martha_votes=0;



            if( localStorage.getItem('Musalia') == null){

               localStorage.setItem('Musalia', 'Voted For Musalia Mudavadi');
               console.log(localStorage.getItem('Musalia'));

                 var usersRef=firebase.database().ref()
     var hopperRef = usersRef.child("musalia")
     var childRef=hopperRef.child('likes')
     childRef.update({
    	alfred_votes:alfred_votes,
    	moi_votes:moi_votes,
        peter_votes:peter_votes,
        kalonzo_votes:kalonzo_votes,
        musalia_votes:firebase.database.ServerValue.increment(1),
        moses_votes:moses_votes,
        raila_votes:raila_votes,
        ruto_votes:ruto_votes,
        mukhisa_votes:mukhisa_votes,
        martha_votes:martha_votes

})


               
                 swal({

                       title:'Voted Successfuly',
                       text: "Thank You For Casting Your Voted. You have Voted For Hon. Musalia Mudavadi",
                       icon: "success",
                       button: "Okay!",

                 });

           }else{


           	   	 swal({
                  title:'Already Voted',
                  text: "Sorry Voter!!. You Have Already Casted Your Voted.",
                  icon: "warning",
                  button: "Okay!",

               });



           }




        
}

//musalia



//wetangula

function voteForMoses(){



		 document.getElementById('button_alfred').disabled=true;
	     document.getElementById('button_moi').disabled=true;
	     document.getElementById('button_peter').disabled=true;

         document.getElementById('button_kalonzo').disabled=true;
         document.getElementById('button_musalia').disabled=true;
         document.getElementById('button_moses').disabled=true;
         document.getElementById('button_raila').disabled=true;
         document.getElementById('button_ruto').disabled=true;
         document.getElementById('button_mukhisa').disabled=true;
         document.getElementById('button_martha').disabled=true;


          var alfred_votes=0;
          var moi_votes=0;
          var peter_votes=0;
          var kalonzo_votes=0;
          var musalia_votes=0;
          var raila_votes=0;
          var ruto_votes=0;
          var mukhisa_votes=0;
          var martha_votes=0;



          if( localStorage.getItem('Moses') == null){

               localStorage.setItem('Moses', 'Voted For Musalia Mudavadi');
               console.log(localStorage.getItem('Moses'));
     var usersRef=firebase.database().ref()
     var hopperRef = usersRef.child("moses")
     var childRef=hopperRef.child('likes')
     childRef.update({
    	alfred_votes:alfred_votes,
    	moi_votes:moi_votes,
        peter_votes:peter_votes,
        kalonzo_votes:kalonzo_votes,
        musalia_votes:musalia_votes,
        moses_votes:firebase.database.ServerValue.increment(1),
        raila_votes:raila_votes,
        ruto_votes:ruto_votes,
        mukhisa_votes:mukhisa_votes,
        martha_votes:martha_votes

})

                
               
                 swal({

                       title:'Voted Successfuly',
                       text: "Thank You For Casting Your Voted. You have Voted For Hon. Moses Wetangula",
                       icon: "success",
                       button: "Okay!",

                 });

           }else{


           	   	 swal({
                  title:'Already Voted',
                  text: "Sorry Voter!!. You Have Already Casted Your Voted.",
                  icon: "warning",
                  button: "Okay!",

               });



           }



}



//wtangula

//raila 
function voteForRaila(){



		 document.getElementById('button_alfred').disabled=true;
	     document.getElementById('button_moi').disabled=true;
	     document.getElementById('button_peter').disabled=true;

         document.getElementById('button_kalonzo').disabled=true;
         document.getElementById('button_musalia').disabled=true;
         document.getElementById('button_moses').disabled=true;
         document.getElementById('button_raila').disabled=true;
         document.getElementById('button_ruto').disabled=true;
         document.getElementById('button_mukhisa').disabled=true;
         document.getElementById('button_martha').disabled=true;


          var alfred_votes=0;
          var moi_votes=0;
          var peter_votes=0;
          var kalonzo_votes=0;
          var musalia_votes=0;
          var moses_votes=0;
          var ruto_votes=0;
          var mukhisa_votes=0;
          var martha_votes=0;



          if( localStorage.getItem('Raila') == null){

               localStorage.setItem('Raila', 'Voted For Musalia Mudavadi');
               console.log(localStorage.getItem('Raila'));

     var usersRef=firebase.database().ref()
     var hopperRef = usersRef.child("raila")
     var childRef=hopperRef.child('likes')
     childRef.update({
    	alfred_votes:alfred_votes,
    	moi_votes:moi_votes,
        peter_votes:peter_votes,
        kalonzo_votes:kalonzo_votes,
        musalia_votes:musalia_votes,
        moses_votes:moses_votes,
        raila_votes:firebase.database.ServerValue.increment(1),
        ruto_votes:ruto_votes,
        mukhisa_votes:mukhisa_votes,
        martha_votes:martha_votes

}) 
               
                 swal({

                       title:'Voted Successfuly',
                       text: "Thank You For Casting Your Voted. You have Voted For Hon. Raila Odinga",
                       icon: "success",
                       button: "Okay!",

                 });

           }else{


           	   	 swal({
                  title:'Already Voted',
                  text: "Sorry Voter!!. You Have Already Casted Your Voted.",
                  icon: "warning",
                  button: "Okay!",

               });



           }


}


//raila


//ruto

function voteForRuto(){



		 document.getElementById('button_alfred').disabled=true;
	     document.getElementById('button_moi').disabled=true;
	     document.getElementById('button_peter').disabled=true;

         document.getElementById('button_kalonzo').disabled=true;
         document.getElementById('button_musalia').disabled=true;
         document.getElementById('button_moses').disabled=true;
         document.getElementById('button_raila').disabled=true;
         document.getElementById('button_ruto').disabled=true;
         document.getElementById('button_mukhisa').disabled=true;
         document.getElementById('button_martha').disabled=true;


          var alfred_votes=0;
          var moi_votes=0;
          var peter_votes=0;
          var kalonzo_votes=0;
          var musalia_votes=0;
          var moses_votes=0;
          var raila_votes=0;
          var mukhisa_votes=0;
          var martha_votes=0;



          if( localStorage.getItem('Ruto') == null){

               localStorage.setItem('Ruto', 'Voted For William Ruto');
               console.log(localStorage.getItem('Ruto'));


                   var usersRef=firebase.database().ref()
                   var hopperRef = usersRef.child("ruto")
                   var childRef=hopperRef.child('likes')
     childRef.update({
    	alfred_votes:alfred_votes,
    	moi_votes:moi_votes,
        peter_votes:peter_votes,
        kalonzo_votes:kalonzo_votes,
        musalia_votes:musalia_votes,
        moses_votes:moses_votes,
        raila_votes:raila_votes,
        ruto_votes:firebase.database.ServerValue.increment(1),
        mukhisa_votes:mukhisa_votes,
        martha_votes:martha_votes

})
            
               
                 swal({

                       title:'Voted Successfuly',
                       text: "Thank You For Casting Your Voted. You have Voted For Hon. William Ruto",
                       icon: "success",
                       button: "Okay!",

                 });

           }else{


           	   	 swal({
                  title:'Already Voted',
                  text: "Sorry Voter!!. You Have Already Casted Your Voted.",
                  icon: "warning",
                  button: "Okay!",

               });



           }


}




//ruto



//mukhisa
function voteForMukhisa(){



		 document.getElementById('button_alfred').disabled=true;
	     document.getElementById('button_moi').disabled=true;
	     document.getElementById('button_peter').disabled=true;

         document.getElementById('button_kalonzo').disabled=true;
         document.getElementById('button_musalia').disabled=true;
         document.getElementById('button_moses').disabled=true;
         document.getElementById('button_raila').disabled=true;
         document.getElementById('button_ruto').disabled=true;
         document.getElementById('button_mukhisa').disabled=true;
         document.getElementById('button_martha').disabled=true;


          var alfred_votes=0;
          var moi_votes=0;
          var peter_votes=0;
          var kalonzo_votes=0;
          var musalia_votes=0;
          var moses_votes=0;
          var ruto_votes=0;
          var raila_votes=0;
          var martha_votes=0;



          if( localStorage.getItem('Kityui') == null){

               localStorage.setItem('Kityui', 'Voted For Mukhisa Kityui');
               console.log(localStorage.getItem('Kityui'));

               var usersRef=firebase.database().ref()
     var hopperRef = usersRef.child("mukhisa")
     var childRef=hopperRef.child('likes')
     childRef.update({
    	alfred_votes:alfred_votes,
    	moi_votes:moi_votes,
        peter_votes:peter_votes,
        kalonzo_votes:kalonzo_votes,
        musalia_votes:musalia_votes,
        moses_votes:moses_votes,
        raila_votes:raila_votes,
        mukhisa_votes:firebase.database.ServerValue.increment(1),
        martha_votes:martha_votes,
        ruto_votes:ruto_votes

})
               
                 swal({

                       title:'Voted Successfuly',
                       text: "Thank You For Casting Your Voted. You have Voted For Hon. Mukhisa Kityui",
                       icon: "success",
                       button: "Okay!",

                 });

           }else{


           	   	 swal({
                  title:'Already Voted',
                  text: "Sorry Voter!!. You Have Already Casted Your Voted.",
                  icon: "warning",
                  button: "Okay!",

               });



           }


}

//mukisha

//martha

function voteForMartha(){



		 document.getElementById('button_alfred').disabled=true;
	     document.getElementById('button_moi').disabled=true;
	     document.getElementById('button_peter').disabled=true;

         document.getElementById('button_kalonzo').disabled=true;
         document.getElementById('button_musalia').disabled=true;
         document.getElementById('button_moses').disabled=true;
         document.getElementById('button_raila').disabled=true;
         document.getElementById('button_ruto').disabled=true;
         document.getElementById('button_mukhisa').disabled=true;
         document.getElementById('button_martha').disabled=true;


          var alfred_votes=0;
          var moi_votes=0;
          var peter_votes=0;
          var kalonzo_votes=0;
          var musalia_votes=0;
          var moses_votes=0;
          var ruto_votes=0;
          var mukhisa_votes=0;
          var raila_votes=0;



          if( localStorage.getItem('Martha') == null){

               localStorage.setItem('Martha', 'Voted For Martha Karua');
               console.log(localStorage.getItem('Martha'));


                  var usersRef=firebase.database().ref()
                  var hopperRef = usersRef.child("martha")
                  var childRef=hopperRef.child('likes')
     childRef.update({
    	alfred_votes:alfred_votes,
    	moi_votes:moi_votes,
        peter_votes:peter_votes,
        kalonzo_votes:kalonzo_votes,
        musalia_votes:musalia_votes,
        moses_votes:moses_votes,
        raila_votes:raila_votes,
        martha_votes:firebase.database.ServerValue.increment(1),
        mukhisa_votes:mukhisa_votes,
        ruto_votes:ruto_votes

})


               
                 swal({

                       title:'Voted Successfuly',
                       text: "Thank You For Casting Your Voted. You have Voted For Hon. Martha Karua",
                       icon: "success",
                       button: "Okay!",

                 });

           }else{


           	   	 swal({
                  title:'Already Voted',
                  text: "Sorry Voter!!. You Have Already Casted Your Voted.",
                  icon: "warning",
                  button: "Okay!",

               });



           }


}




//martha

  //    display votes

    var starCountRef = firebase.database().ref('user');
    var starCountRefMoi= firebase.database().ref('moi');
    var starCountRefPeter= firebase.database().ref('peter');
    var starCountRefKalonzo= firebase.database().ref('kalonzo');
    var starCountRefMusalia= firebase.database().ref('musalia');
    var starCountRefMoses= firebase.database().ref('moses');
    var starCountRefRaila= firebase.database().ref('raila');
    var starCountRefRuto= firebase.database().ref('ruto');
    var starCountRefMukhisa= firebase.database().ref('mukhisa');
    var starCountRefMartha= firebase.database().ref('martha');








    var time=  new Date();
    starCountRef.on('value',(snapshot)=>{
    var display= document.getElementById('display');



	var users = snapshot.val();

	for(var user in users){
		display.innerHTML+=`
           <p>${users[user].alfred_votes} Votes</p>
   
	`;
 			
	}

})


    starCountRefMoi.on('value',(snapshot)=>{
    	var vote_moi= document.getElementById('vote_moi');
    	var time=  new Date();
    	var users= snapshot.val();

    	for(var user in  users){
    		vote_moi.innerHTML+=`

    		<p>${users[user].moi_votes} Votes</p>`;
    	}
    })



       starCountRefPeter.on('value',(snapshot)=>{
    	var vote_peter= document.getElementById('vote_peter');
    	var time=  new Date();
    	var users= snapshot.val();

    	for(var user in users){
    		vote_peter.innerHTML+=`

    		<p>${users[user].peter_votes} Votes</p>`;
    	}
    })



        starCountRefKalonzo.on('value',(snapshot)=>{
    	var vote_kalonzo= document.getElementById('vote_kalonzo');
    	var time=  new Date();
    	var users= snapshot.val();

    	for(var user in  users){
    		vote_kalonzo.innerHTML+=`

    		<p>${users[user].kalonzo_votes} Votes</p>`;
    	}
    })
    



        starCountRefMusalia.on('value',(snapshot)=>{
    	var vote_musalia= document.getElementById('vote_musalia');
    	var time=  new Date();
    	var users= snapshot.val();

    	for(var user in  users){
    		vote_musalia.innerHTML+=`

    		<p>${users[user].musalia_votes} Votes</p>`;
    	}
    })


        starCountRefMoses.on('value',(snapshot)=>{
    	var vote_moses= document.getElementById('vote_moses');
    	var time=  new Date();
    	var users= snapshot.val();

    	for(var user in  users){
    		vote_moses.innerHTML+=`

    		<p>${users[user].moses_votes} Votes</p>`;
    	}
    })


        starCountRefRaila.on('value',(snapshot)=>{
    	var vote_raila= document.getElementById('vote_raila');
    	var time=  new Date();
    	var users= snapshot.val();

    	for(var user in  users){
    		vote_raila.innerHTML+=`

    		<p>${users[user].raila_votes} Votes</p>`;
    	}
    })


        starCountRefRuto.on('value',(snapshot)=>{
    	var vote_ruto= document.getElementById('vote_ruto');
    	var time=  new Date();
    	var users= snapshot.val();

    	for(var user in  users){
    		vote_ruto.innerHTML+=`

    		<p>${users[user].ruto_votes} Votes</p>`;
    	}
    })

         starCountRefMukhisa.on('value',(snapshot)=>{
    	var vote_mukhisa= document.getElementById('vote_mukhisa');
    	var time=  new Date();
    	var users= snapshot.val();

    	for(var user in  users){
    		vote_mukhisa.innerHTML+=`

    		<p>${users[user].ruto_votes} Votes </p>`;
    	}
    })


         starCountRefMartha.on('value',(snapshot)=>{
    	var vote_martha= document.getElementById('vote_martha');
    	var time=  new Date();
    	var users= snapshot.val();

    	for(var user in  users){
    		vote_martha.innerHTML+=`

    		<p>${users[user].ruto_votes} Votes</p>`;
    	}
    })

      //display voted  


      //timer


        var deadLine = new Date("Aug 04,2022,18:12:25").getTime();
	    var x= setInterval(function(){
		var now = new Date().getTime();
		var t = deadLine -now;
		var days = Math.floor(t/(1000*60*60*24));
		var hours = Math.floor((t%(1000*60*60*24))/(1000*60*60));
		var minutes = Math.floor((t%(1000*60*60))/(1000*60));
		var seconds = Math.floor((t%(1000*60))/1000);




      document.getElementById('day').innerHTML =days;
      document.getElementById('hour').innerHTML =hours;
      document.getElementById('minute').innerHTML =minutes;
       document.getElementById('second').innerHTML =seconds;

       if(t < 0){
         clearInterval(x);
         document.getElementById('demo').innerHTML ="time Up";
      document.getElementById('day').innerHTML ='0';
      document.getElementById('hour').innerHTML ='0';
       document.getElementById('minute').innerHTML ='0';
       document.getElementById('second').innerHTML ='0';
}
       

	},1000);

   

	
}