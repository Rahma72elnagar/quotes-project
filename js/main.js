//  var list=[
// {
//     'name':"--Frank Sinatra",
//     'quote': "The best revenge is massive success."
// },

//     {'name': 'Epictetus', 
//         'quote': 'It\'s not what happens to you, but how you react to it that matters.'
//        },
//        {'name': 'Frank Sinatra', 
//         'quote': 'The best revenge is massive success.'
//        },

//        {'name': 'Wayne Gretzy', 
//         'quote': 'You miss 100% of the shots you don\'t take.'
//        },
//        {'name': 'Nelson Mandela', 
//         'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
//        },
//        {'name': 'Elbert Hubbard', 
//         'quote': 'Do not take life too seriously. You will not get out alive.'
//        },


//  ];
 
function quote(){
 var quote=['"The best revenge is massive success."',  '"It\'s not what happens to you, but how you react to it that matters."', '"You miss 100% of the shots you don\'t take."','"Resentment is like drinking poison and waiting for your enemies to die."','"Do not take life too seriously. You will not get out alive."'];
 var autor=['--Wayne Gretzy','--Frank Sinatra','--Epictetus','--Nelson Mandela', '--Elbert Hubbard' ]

 const num=Math.floor(Math.random()*quote.length);
 document.querySelector("#quote").innerHTML=( quote[num] );
 document.querySelector("#autor").innerHTML=( autor[num] );



 
 
}