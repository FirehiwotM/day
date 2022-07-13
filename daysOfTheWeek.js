let day = "Saturday";

day = day.toLocaleLowerCase();
let dayToSat;

switch (day) {
    case 'Sunday':
        dayToSat = 6;
        break;
    case 'Monday':
        dayToSat = 5;
        break;
    case 'Tuesday':
        dayToSat = 4;
        break;
    case 'Wednesday':
        dayToSat = 3;
        break;
    case 'Thursday':
        dayToSat = 2;
        break;
    case 'Friday':
        dayToSat = 1;
        break;
    case 'Saturday':
        dayToSat = 0;
        break;
        default:
            dayToSat = null;
            break;


}
