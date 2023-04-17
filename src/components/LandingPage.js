import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Iframe from "./Location" 
library.add(fab);

const LandingPage = () => {
  const demos = {
    googlelocation:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3124.418435150721!2d-78.85277288426383!3d38.45490007964116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89b4ed4d4cb3248f%3A0xe29cea4321ca6a47!2s582%20Vine%20St%2C%20Harrisonburg%2C%20VA%2022802!3m2!1d38.454900099999996!2d-78.8505842!5e0!3m2!1sen!2sus!4v1598548766589!5m2!1sen!2sus" width="550" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  };
  return (
    <div className="landing-page-container">
      
      <section id="home" className="home-section">
        <button><a href="https://dosamigosmoving.com/book/index.php" target="noopener noreferrer">Book A Move</a></button>
      </section>

      <section id="about" className="about-us-section">
      <div className="about-us-image">
          <img src={require("../images/AboutUs.JPG")} alt="About Us" />
        </div>
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>2 Amigos Moving & Labor Express LLC is committed to being the best full service moving company in Virginia and DMV as well as North and South Carolina area. Since our founding in 2019 our team is dedicated to make your moving experience as smooth and stress free as possible! We proudly employ only the best and most professional moving crew in the industry. The 2 Amigos Moving team focuses on each aspect of your move, from the initial planning & logistics to the packing (if needed) and our final walk through and clean up. We consider ourselves a full service company that is able to move apartments, homes and businesses. We treat our customers like family, from your first contact with our moving consultant to the ending walkthrough and completion of your move. We will always treat our customers with the utmost professionalism. 2 Amigos Moving & Labor Express is a full service moving company primarily serving the Virginia, DMV and greater Hampton roads. We offer complete relocation services to meet any move requirements. Residential, commercial or industrial, we are equipped and ready to make your experience as stress free as possible!.</p>
        </div>
      </section>

      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <ul>
          <li>Too busy to pack? Let one of our experts help! We can save you some time packing up your belongings to help maximize space in the moving truck and saving you time and stress. It doesn't matter if it's only one room or the whole house. We can help!</li>
          <li>We also offer hourly labor services in case you have your own truck and only need help packing or unpacking. We can help rearrange or moving, loading or unloading furniture as well. 2 Amigos Moving & Labor Express LLC can send as many expert movers to help you with the work as you need. Call us for the all your moving or transport needs!!</li>
          <li>While we are mostly working in the Virginia and DMV area, 2 Amigos Moving can certainly handle larger and longer distant moves. Across states or the country, we offer a complete line of services, including packing, moving, transport and storage services . We have a great partnership with U-haul and we occasionally use them to accommodate a complete long distance moves. Although we are a locally owned moving company, do not think our services are limited to local moves. We are willing and able to help with any type of move big or small. We are fully licensed and insured, providing you with the peace of mind that your cherished possessions will arrive safely and on time. Next time you are consider a move, please call the 2 Amigos Moving & Labor Express LLC - we offer door-to-door local and long distance moving services and labor at affordable competitive rates!!</li>
          <li>We offer additional 3rd party services to streamline your move. We offer services that range from home theater reinstallation to pet boarding and cleaning services and much more. If you have any requirement during your move that you might think is outside the scope of a traditional moving service, please don't hesitate to ask one of our Moving Consultants.</li>
        </ul>
      </section>

      
      <section id="location" className="location-section">
        <h2>Location</h2>
        <Iframe iframe={demos["googlelocation"]} />
      </section>

      <section id="hours" className="hours-section">
				<h2>Business hours</h2>
        <ul>
					<li>Mon:	9:00 AM – 7:00 PM</li>
					<li>Tue:	9:00 AM – 7:00 PM</li>
					<li>Wed:	9:00 AM – 7:00 PM</li>
					<li>Thu:	9:00 AM – 7:00 PM</li>
					<li>Fri:	9:00 AM – 7:00 PM</li>
					<li>Sat:	9:00 AM – 5:00 PM</li>
				</ul>
      </section>

      <section id="gallery" className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery-images">
          <img src={require("../images/Gallery1.JPG")} alt="Gallery 1" />
          <img src={require("../images/Gallery2.JPG")} alt="Gallery 2" />
          <img src={require("../images/Gallery3.JPG")}  alt="Gallery 3" />
          <img src={require("../images/Gallery4.JPG")}  alt="Gallery 4" />
        </div>
      </section>

  <section id="contact" className="contact-us-section">
  <div className="contact-us-container">
    <h2>Contact Us</h2>
    <form className="contact-form" method="post" action="contact-form-handler.php">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" row="6" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>

</section>

<section class="social-media">
  <h2>Follow us on social media</h2>
  <div class="social-icons">
    
    <a href="https://www.facebook.com/2AmigosMoving/" target="noopener noreferrer"><i class="fa-facebook"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
  </div>
</section>
<div>
      <footer>
        <p>
          Copyright © {new Date().getFullYear()} 2 Amigos moving and labor express
        </p>
        <br></br>
        <p>Website Design  by Juan J Vazquez G</p>
      </footer>
</div>
     
    </div>

  );
};

export default LandingPage;
