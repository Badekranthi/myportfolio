import React from 'react'; 
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Home() {
  return (
    <section id="home" className="home-section">
      <img src={`${process.env.PUBLIC_URL}/kranthi.JPG`} alt="Profile" className="profile-pic"/>
      <h2>Welcome to my portfolio!</h2>
      <div className="social-links"> 
        <a href="https://github.com/Badekranthi" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i> </a>
        <a href="https://www.linkedin.com/in/kranthi-priya-bade-088b57221/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i> </a> 
      </div>
        
    </section>
  );
}

export default Home;
