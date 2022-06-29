//my firts javascript

// alert("This is a new message alert");
//
// console.log("this is a log");


// var welcomeMessage="this is a welcome message";

// var age=31;

// // var exactAge=31.5;

// // var age="31";

// // var exactAge="31.5";

// // alert(welcomeMessage);

// // alert(age+exactAge);

// console.log("My age is "+ age);

// age++;

// console.log("My age next year will be: "+ age);

// var undefinedVariable;

// console.log("My age is "+ undefinedVariable); //this is going to return undefined

 

// var isPremiumUser=false;

// if(isPremiumUser){
//     console.log("Thanks for being a loyal customer");
// }else{
//     console.log("You should subscribe to our premium");
// }


// var myAge=31;

// if(myAge<1){
//     console.log("You are a baby");
// }else if(myAge<3){
//     console.log("You are a toddler");
// }else if(myAge<10){
//     console.log("You are a kid");
// }else if(myAge<20){
//     console.log("You are a teenager");
// }else if(myAge<40){
//     console.log("You are an adult");
// }

// var doUntil=5;

// for(var i=0; i<doUntil; i++){
//     console.log("Current value is ",i);
// }

// function firstFunction(){
//     console.log("My name is Monica");
// }

// //firstFunction();

// function secondFunction(name){
//     console.log("Hello,",name);
// }

// function secondFunction(name,age){
//     console.log("Hello,",name,"."," You are",age);
// }

// // secondFunction("Jahaziel");
// // secondFunction("Monica");

// // secondFunction("Jahaziel",30);
// // secondFunction("Monica",31);
// var btn=document.getElementById("go-button");
// var text=document.getElementsByClassName("my-input");
// var textarea=document.getElementsByClassName("my-textarea");

// function button_Clicked(){
//     console.log("Button clicked");
//     var resultText=document.getElementById("text");

//     resultText.innerHTML="Hello "+text[1].value+"<br/>";
//     resultText.innerHTML+="Message:"+textarea[0].value;
//     // btn.removeEventListener("click",button_Clicked);

//     // document.getElementById("text").innerHTML="Don't do it!";
// }


//event listener

// btn.addEventListener("click",button_Clicked);

//var hobbies=["Videogames","Pizza","Reading","Music"];
// console.log(hobbies);

// console.log(hobbies.pop());//removes the last item and returns that
// hobbies.push("Sing");//adds
// console.log(hobbies.shift());//removes the first item and returns that
// hobbies.unshift("Videogames");//adds


// hobbies.forEach(function(item,index){
//     console.log("I like",item, "#",index);
// })

// var indexNum=hobbies.indexOf("Pizza");

// console.log(indexNum);

// hobbies.splice(indexNum,1);


// if(hobbies.indexOf("Pizza")>-1){
//     console.log("I like pizza");
// }

// if(hobbies.indexOf("sports")==-1){
//     console.log("I don't like sports");
// }

//=== means does the value match and is the same type


// function saySomething(phrase){
//     console.log("You said:"+phrase );
// }

// function getPhraseLength(phrase, another){

//     function printBoth(){
//         return phrase+" "+another;
//     }
//     return printBoth();

//     if(typeof another !=="undefined"){//not the value and not the type
//         return phrase.length+another.length;
//     }
    
// }

// var p="This is a phrase";
// var p2="This is a second phrase";
//  console.log(getPhraseLength(p,p2));
// saySomething(p);

// function getPhraseLength(params){

//     if(typeof params.another !=="undefined"){
//         return params.phrase.length+params.another.length;
//     }
//     return params.phrase.length;
// }

// var p="This is a phrase";
// var p2="This is a second phrase";
//  console.log(getPhraseLength({phrase:p, another:p2}));//passing a class 


// var numbers=[3,8,7,9,6,1,12,5,14,2,19,16,18,11,10,15,13,17,20];
// numbers.sort();//sorts like strings not numbers;
// var words=["apple","pear","coconut","pizza","hamburger","banana"];
// words.sort();

// console.log(numbers.sort(function(a,b){ return a-b;}));

// FindMissingNumber();

// function FindMissingNumber(){
//     for (let index = 0; index < numbers.length-1; index++) {
//         const diff =numbers[index+1]- numbers[index];
//         if(diff >1){
//             console.log("Missing number is",numbers[index]+1);
//             return;
//         }
       
//     }
// }


// class Animal{

//     constructor(name,height,weight){
//         console.log("Animal created", name);
//         this.name=name;
//         this.height=height;
//         this.weight=weight;
//     }

//     nameLength(){
//         return this.name.length;
//     }
// }

// Animal.planet="Earth";//class level variable



// var dog=new Animal("Cara",25,90);
// var fish=new Animal("Goldie",2,.02);
// console.log(dog.nameLength());
// console.log(dog.constructor.planet);//to call properties from the class 


// class Dog extends Animal{
//     constructor(name,height,weight,barkVolume,leashColor){
//         super(name,height,weight);
//         this.barkVolume=barkVolume;
//         this.leashColor=leashColor;
//     }

//     Bark(){
//         if(this.barkVolume>50){
//             console.log(this.name,"barks loudly!");
//         }else{
//             console.log(this.name,"barks timidly");
//         }
//     }
// }

// class Fish extends Animal{
//     constructor(name,height,weight,swimspeed){
//         super(name,height,weight);
//         this.swimspeed=swimspeed;
//     }

//     Swim(){
//         if(this.swimspeed>50){
//             console.log(this.name,"swims around quickly!");
//         }else{
//             console.log(this.name,"swims around slowly!");
//         }
//     }
// }

// var king=new Dog("King",45,92,72,"red");

// king.Bark();

// var goldie=new Fish("Goldie",2,.1,77);

// goldie.Swim();


$(document).ready(function(){

    $(document).on('contextmenu',function(){
        return false;
    })

    // //find elements inside the class or id
    // $('#main').find('p').addClass("ooooh");

    // //find first and last from a list of elements (list of 'a' inside '.submenu')
    // console.log($('.submenu a').first('a').text());
    // console.log($('.submenu a').last('a').text());

    //Accessing a class
    // lQuery("my-selector").addClass("NEWCLASS");
    // lQuery("#main").addClass("Jaza");


    //Jquery needs the document object to load it into jquery
    //and needs to work after it is ready, then we create a function and start
    //writing code inside the function

    // $('#text').html("This is now my text");//same sintax for element name as css

    // $('.my-input').val("New input val");

    // var el=document.getElementById('text');

    // console.log("Javascript:",el);

    // console.log("JQuery:",$(el));

    // $('#go-button').on('click',function(){
    //     alert("You click the button");
    // })

    // $('#go-button').on('mouseenter',function(){
    //     console.log("You click the button");
    // });

    $(document).on('mousedown',function(event){

        if(event.which==3){
            $('.hidden').removeClass('shown');

            if($(event.target).is('img')){
                $('.saveimg, .newtab').addClass('shown');
            }else if($(event.target).is('a')){
                $('.newtab').addClass('shown');
            }
            // console.log(event.pageY,event.pageX);
            $('#context').css({
                top:event.pageY,
                left:event.pageX
            });
            $('#context').fadeIn();
            return false;
        }
        $('#context').fadeOut();
        // event.preventDefault();

        // switch(event.which){
        //     case 1:
        //         console.log("left click");
        //         break;
        //     case 2:
        //         console.log("wheel click");
        //         break;
        //     case 3:
        //         console.log("right click");
        //         break;

        // }
        // console.log(event.which);
    });

    $('[href="https://www.google.com/"]').on('click',function(event){
        console.log("link to google");

        //event.preventDefault();
        return false;
    })

    //target data element by attribute '[]'
    $('[data-trigger="dropdown"]').on('mouseenter',function(){
        var submenu=$(this).parent().find('.submenu');

        // submenu.fadeIn('active');
        submenu.fadeIn(300);

        $('.profile-menu').on('mouseleave',function(){
            // submenu.removeClass('active');
            submenu.fadeOut(300);
        });
    });

    $('#prepend,#append,#replace').on('click',function(e){
        var el=$(e.currentTarget);
        var action=el.attr('id');
        var content=$('#textarea').val();


        if(action=="prepend"){
            console.log(el);
            $('#main').prepend('<br/>'+content);
        }else if(action=="append"){
            console.log(el);
            $('#main').append(content);
        }else if(action=="replace"){
            console.log(el);
            $('#main').html(content);
        }

        $('#textarea').val('');

    })

    $('textarea').focusin(function(){
        console.log("focus");
    })

    $('textarea').focusout(function(){
        console.log("focus out");
    })

    
    // $('input[name=email]').on('keyup',function(){
    //     var passed=0;
    //     if($(this).val().indexOf('@')>-1){
    //         passed++;
    //         if($(this).val().indexOf('.')>-1){
    //             passed++;
    //         }
    //     }

    //     if(passed>1){
    //         $('.status').html('VALID');
    //     }else{
    //         $('.status').html("INVALID");
    //     }
    // })

    $('input').focusout(function(){
            var passed=0;
        if($(this).val().indexOf('@')>-1){
            passed++;
            if($(this).val().indexOf('.')>-1){
                passed++;
            }
        }

        if(passed>1){
            $('.status').html('VALID');
        }else{
            $('.status').html("INVALID");
        }
    })

// //contains selector 
//     $('p:contains("Nulla")').html("this had Nulla ");
// //checks if element is something
//     if($(':contains("Nulla")').is('p')){
//         console.log("Nulla is inside a paragraph")
//     }
// //checks if element has a class
//     if($(':contains("Nulla")').hasClass('my-selector')){
//         console.log("Nulla is has class my-selector")
//     }


// //for each 
// //Do an action for every item 'p'
//     $('p').each(function(){
//         console.log($(this).text());
//     })


//callback passing the function name only
$('p').each(printThis);

function printThis(el){
    console.log($(this).text());
}


//inside css if you want to call a property with '-' in the name, instead use camelCase
$('input').css({
    background:'#f00',
    padding:'10px',
    borderColor:'#000'
})

});