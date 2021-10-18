function welcomeGuest(name, time){
    console.log('welcome', name);
    console.log(time);
    placeHandler();
}
function placeHandler(){
   console.log('where are you going?');
}


welcomeGuest('mr.sharif', 'good Morning', 'placeHandler' );
welcomeGuest('mr.jhankar mahbub', 'good evening');