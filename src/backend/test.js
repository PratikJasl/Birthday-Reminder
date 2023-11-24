import users from '../backend/data.json' assert {type: 'json'};
  let upcomingBirthdays = [];
  function displayUpcomingBirthday(set,name,birthdate){
    if(set){
        console.log(`${name} has birthday Upcoming on ${birthdate.toLocaleDateString()}`);
        upcomingBirthdays.push(`${name}: ${birthdate.toLocaleDateString()}`);
        console.log(upcomingBirthdays);
    }
    else{
        console.log("No Upcoming Birthday's");
    }
}
  function isWithinNextMonth(date,name){
    let set;
    const currentDate = new Date();
    console.log("Current Date:", currentDate);

    const nextMonth = new Date();
    nextMonth.setMonth(currentDate.getMonth() + 1);
    console.log("Next Month:", nextMonth);

    const isSameMonth = date.getMonth() === currentDate.getMonth();
    const isNextMonth = date.getMonth() === nextMonth.getMonth();

    if (isSameMonth || isNextMonth) {
    if (isSameMonth && date.getDate() >= currentDate.getDate()) {
      set = true;
      return displayUpcomingBirthday(set,name,date);
    }
    if (isNextMonth) {
      set = true;
      return displayUpcomingBirthday(set,name,date);
    }
  }
    set = false;
    return displayUpcomingBirthday(set,name,date);
  }
  function getUpcomingBirthdays(users){
    const upcomingBirthday = users.filter((user) => {
    const birthday = new Date(user.birthdate);
    const name = (user.name);
    console.log(`${name} birthday:`, birthday.toLocaleDateString());
    return isWithinNextMonth(birthday, name);
    });
  }
  getUpcomingBirthdays(users);
