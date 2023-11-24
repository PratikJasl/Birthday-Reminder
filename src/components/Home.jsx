import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home(){
    return(
        <div className='container'>
          <h1>Welcome to the Birthday Reminder App</h1>
          <h5>
            Keep track of your friends and family birthdays with this simple and handy Birthday Reminder app.
          </h5>
          <p>Click "Get Started" to start listing birthdays!</p>
          <Link to= "/AddBirthday"> 
            <button variant="success">Get Started</button>
          </Link>
        </div>
    );
}

export default Home