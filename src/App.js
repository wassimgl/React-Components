import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/profile/ProfilePhoto';
import FullName from './Component/profile/FullName';
import Address from './Component/profile/Address';
function App() {
  const myname = 'wassiim'
  const lastName = 'glouia'
  return (
    <div className="App">
      <div className='header'> <ProfilePhoto/>
      <FullName/></div>
      <Address/>
      <h2>Hallo! Ich möchte mich kurz vorstellen. Mein name ist Wassim Glouia,ich bin 29 jahre alt,ich komme aus Tunisien und ich wohne in Sousse. Ich bin Textilingenieur und jetzt studiere ich Webentwicklung und ich möchte ein guter Webentwickler werden. Meine hobbies sind: Reisen, Sport treiben und Musik hören. Dies ist eine kleine Vorstellung von mir und willkommen auf meinem Profil.   </h2>
    </div>
    
  );
}

export default App;
