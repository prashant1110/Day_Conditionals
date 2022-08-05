//1.Write a code which can give grades to students according to theirs scores:

let marks=prompt("enter the marks: ");

switch (true)
 {
    case marks>80 && marks<100:
        console.log("A");
        break;
    case marks>70 && marks<89:
         console.log("B");
        break;
     case marks>60 && marks<79:
        console.log("C");
         break;
    case marks>50 && marks<59:
         console.log("A");
        break;
    case marks>0 && marks<49:
         console.log("A");
         break;    
    default:
        break;
}

//2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is 

let monthTaken=prompt("enter the month ");
let month=monthTaken.toLowerCase();

switch (month) {
    case "january":
        console.log("the season is winter");
        break;
    case "february":
         console.log("the season is winter");
         break;
    case "march":
         console.log("the season is spring");
         break
    case "apirl":
         console.log("the season is spring");
         break
      case "may":
         console.log("the season is spring");
         break 
     case "june":
         console.log("the season is summer");
         break
     case "july":
         console.log("the season is summer");
         break
     case "august":
         console.log("the season is summer");
         break
     case "september":
         console.log("the season is autum");
         break
     case "october":
         console.log("the season is autum");
         break
     case "november":
         console.log("the season is autum");
         break
     case "december":
         console.log("the season is winter");
         break   
    default:
        break;
}


//3.Check if a day is weekend day or a working day. Your script will take day as an input.

let dayTakenByUser=prompt("enter the day :");
let day=dayTakenByUser.toLowerCase();

switch (day) {
    case "monday":
        console.log("monday is working day")
        break;
    case "tuesday":
        console.log("tuesday is working day")
         break;
    case "thrusday":
        console.log("thrusday is working day")
         break;
     case "wednesday":
        console.log("wednesday is working day")
         break;
    case "friday":
        console.log("friday is working day")
         break;
     case "saturday":
         console.log("saturday is weekend")
         break;
    case "sunday":
        console.log("sunday is weekend")
         break;
                
    default:
        break;
}