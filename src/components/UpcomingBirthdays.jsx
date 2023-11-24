function UpcomingBirthdays({user}){
  //@dev function to get upcoming Bdays.  
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

 //@dev function to check Bday in next month.
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
  //@dev function to fetch user data.
  function getUpcomingBirthdays(user){
    const upcomingBirthday = user.filter((user) => {
    const birthday = new Date(user.birthdate);
    const name = (user.name);
    console.log(`${name} birthday:`, birthday.toLocaleDateString());
    return isWithinNextMonth(birthday, name);
    });
  }
  getUpcomingBirthdays(user);

  return(
    <>
        {upcomingBirthdays.length>0 ?(
            <>
                <h2 className="displayUpcoming">You Have Upcoming Birthdays</h2>
                {upcomingBirthdays.map((users, index)=>{
                return(
                    <article key={index} className="upcoming">  
                        <h4>{users}</h4>
                    </article>
                )
            })}
            </>
        ):  
        (    
            <h1>NO UPCOMING BIRTHDAYS</h1>
        )}
        
    </>
  );
}

export default UpcomingBirthdays