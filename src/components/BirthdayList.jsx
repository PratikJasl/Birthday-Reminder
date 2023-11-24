function BirthdayList({user}){
    console.log("User data:", user);
    return (
        <>
          {user.map((person,index) => {
            const { name, birthdate, imageURL } = person;
            return (
            <div className="List"> 
              <article key={index} className='person'>
                <img src={imageURL} alt={name} height={50}/>
                <div>
                  <h4>{name}</h4>
                  <p>{birthdate}</p>
                </div>
              </article>
            </div>
            );
          })}
        </>
      );
}

export default BirthdayList