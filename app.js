// alert("hello world"); 

////////////////////      Arrays  ////////////////////////////////////

// Q no 1 :

//     var arr = [];

// // Q no 2 :

//      var arr = new Array();

 /// Q no 3 :
    
//  var arr = ["Umair Iqbal"];

//  /// Q no 4 :

//  var arr = [13,14];

//  /// Q no 5 :

//  var arr = [true,false];

//  /// Q no 6 :

//  var arr = ["Umair Iqbal", 14 , true];

 ///  Q no 7 :

//  var arr = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];

//  document.write("<h1> Qualifications : </h1>" + "</br>");

//  document.write("1)" + arr[0] + "</br>" + "2)" + arr[1] + "</br>" + "3)" + arr[2] + "</br>" + "4)" + arr[3] + "</br>"
// + "5)" + arr[4] + "</br>" + "6)" + arr[5] + "</br>" + "7)" + arr[6] + "</br>" + "8)" + arr[7] + "</br") ;


/// Q no 8 :

 
// var arr = ["Umair" , "Sanjay" , "Salman"];
// var arrNum = [200 , 320, 390];

// var per1 = (arrNum[0] / 500) * 100;
// var per2 = (arrNum[1] / 500) * 100;
// var per3 = (arrNum[2] / 500) * 100;

// // document.write("<h2>" + "Score of Umair is " + arrNum[0 ] + ". Percentage: " + per1 
// + "%" + "<br/>" + "Score of Sanjay is " + arrNum[1] + ". Percentage: " + per2 + "%" + "<br/>" + "Score of Salman is " + arrNum[2 ] + ". Percentage: " + per3 + "%" +"</h2>" );

/// Q no 9 :

//    var arrColor = ["green" , "black" ,"blue"];
//    document.write(arrColor);

 // var arr = ["green;" , "black , "blue"];
 //  arr.unshift(prompt("Enter the color"));
//  arr.unshift(prompt("Enter the color"));

// document.write("<h2>" + arr + "<h2>");

            
// var arr = ["green" , "black" , "blue"];
// arr.push(prompt("Enter the color Name"));
// document.write("<h2>" + arr + "</h2>");

    
// var arr = ["green;" , "black" , "blue"];
// arr.unshift(prompt("Enter the color"));
// arr.unshift(prompt("Enter the color"));

//   document.write("<h2>" + arr + "<h2>");

        
// var arr = ["green" , "black" , "blue"];
// arr.shift(arr[0]);
// document.write(arr);

        
// var arr = ["green" , "black" , "blue"];
// arr.pop(arr[2]);
// document.write(arr);
        
        
// var color = ["green", "black", "blue"];
// var indNum = prompt("Enter Index Number");
 // var colorName = prompt("Enter the color name");
//  color.splice(indxNum, 0, colorName);
 // document.write(color);
       

        
//  var arr = ["green , "black" , "blue" ,"yellow" , "red" , "purple"];
 // arr.splice(prompt("how to start",  prompt("at which index you want to delete the color")))
// console.log(arr);

// var color = ["green" , "black" , "blue" ,"yellow" , "red" , "purple"];
// var arr = prompt("Enter index location for deleting Color :eg(0-4)");
// var deletetClear = prompt("How many color  you want to delete?" );
// color.splice(arr, deltClr);
// document.write("<h1>" + "After deleting" + "</h1>" + "<br/>");
// document.write(color);

////   Q no 10 :

// var arr = [256, 135, 521, 200];
// arr.sort();
// console.log(arr);
        
// const points = [20, 80, 2, 4, 32, 10];
// points.sort(function(a, b){return a - b});

////    Q no 11 :

// var arr = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var arrCopy = arr.slice(2,4);
// console.log(arrCopy);

/// Q no 12 :

// var arr = ["This", "is", "my", "cat"];
//  arrjoin = arr.join(" ");
// document.write("<h2>" + "Array: " + "<br/>" + arr + "<br/>" + "<br/>" + "String " + "<br/>" +arrjoin + "<h2>");


///  Q no 13 :

// // var arr = ["Keyboard", "Mouse", "Printer", "Monitor"];
// // document.write("<h1>"  + "Devices" + "<br/>" +arr+ "</h1>"  + "<h2>" 
// + "Out: " + "<br/>" + arr.shift() + "<br/>"
// // + "Out: " + "<br/>" + arr.shift() + "<br/>"+ "Out: " + "<br/>" + 
// arr.shift() + "<br/>"+ "Out: " + "<br/>" + arr.shift() + "<br/>" // + "</h2>");

// Q no 14 :
// var arr = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("<h1>"  + "Devices" + "<br/>" +arr+ "</h1>"  + "<h2>" + "Out: " + "<br/>" + 
// arr.pop() + "<br/>"
// // + "Out: " + "<br/>" + arr.pop() + "<br/>"+ "Out: " + "<br/>" + arr.pop() + "<br/>"+ 
// "Out: " + "<br/>" + arr.pop() + "<br/>"// + "</h2>");


// Q no 15 :

// var mobile = ["Apple", "Samsung" ,"Motorola" , "Nokia", "Sony ","Haier"];
 
// not done sir se pochna hoga



// xxxxxxxxxxxxxxxxxxxxxxxx ---------------------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

/////////////////////////     Arrays and Loops   /////////////////////////////////////////////////////////


// Q  no 1 :

//   var multidiArray = [
//       ["umair"] , ["iqbal"] ,["21"]
//   ];

//   console.log(multidiArray);

//  Q no 2 :

//   var matrix = [
//       [3,4,3,5],
//       [4,5,2,6],
//       [4,1,4,2],
//   ];

//   document.write(matrix[0]+ "</br>" + matrix [1] + "</br>" + matrix [2] + "</br>");
  


//   Q no 3 :

// for (var i = 1 ; i <=10 ; i++){
//     console.log(i);
// }


//  Q no 4 :

// var tableNumber = +prompt("Enter your table number");
// var tableLength = +prompt("Enter your table Length");
// for (var i = 1 ; i <=tableLength; i++){
//     document.write(tableNumber + "x" + i + "=" + tableNumber*i + "</br>");
// }

// Q no 5 :

// var fruitNames = ["apple", "banana","mango" , "orange","strawberry"];
// for(var i = 0; i < fruitNames.length; i++){
// document.write(fruitNames[i]+"<br>"")
// }

// for(var i = 0; i< fruitNames.length; i++){
// document.write("Element at index "+ i+ " is " + fruitNames[i]+'<br>');
// }

// Q no 6 :

// var i = "Counting";
// document.write(i + " : " + "<br><br>"); 
//        for(var a = 1; a < 16; a++){
//          document.write(a + " , ");
 
//  }
//  var i = "Reverse Counting";
 
//  document.write(i + " : " + "<br><br>"); 
//  for(var a = 15; a >= 1; a--){
//      document.write(a + ",");
     
//  }
// var i = " Even";
//     document.write(i + " : " + "<br><br>"); 
//     for(var a = 0; a <= 20; a += 2){
//         document.write(a + " , ");
        
// }
// var i = "Odd";
//     document.write(i + " : " + "<br><br>"); 
//     for(var a = 1; a <= 20; a += 2){
//         document.write(a + " , ");
        
//     }
// var i = "Series";
//    document.write(i + " : " + "<br><br>"); 
//    for(var a = 2; a <=20; a += 2){
//        document.write(a + "k" + " , ");
// }
    

// Q no 7 :

// var B = ["cake","apple pie","cookie","chips","patties"];
// var user = prompt("Enter your item");
// var maych = false;

// for (var i = 0 ; i < B.length; i++){
//     if(user===B[i]){
//         document.write(user + " is avaliable at Index "+ i +" in our mart ")
//   maych=true;
//   break;
//   }
// }

// if (maych === false){
//     document.write( "We are Sorry "+user +" is not Avaliable ")

// }

// Question No 8 :

// for (var i=0; i<=largest;i++){
// if (array[i]>largest) {
// var largest=array[i];
// }
// }
// document.write("arrays item : " + array + "</br>" );
// document.write("the largest number is " + largest);
    

    
//  Question No 9   //
    
// var array = [24, 53, 78, 91, 12]
// var smallest= 12;
    
// for (i=0; i<=smallest;   i++){
// if (array[i]<smallest) {
//  var smallest=array[i];
// }
// }
// document.write("Aaray item  " + array + "</br>");
// document.write("the Smallest number is " + smallest);
    
    
    
//  Question no 10  //
    
// for(var i=5 ; i<=100 ; i +=5){
// document.write(i +"  ," )
// }
