import React from "react";
import styles from "../../styles/About.module.css";
const index = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}></div>
      <div className={styles.about}>
        <h4>WE ARE LEMONCRAFT</h4>
        <h1>OUR STORY</h1>
        <img src="https://i.ibb.co/TBBmzWW/leaf.png" alt="" />
        <div>
          <p>
            The story of Lemon Craft is rooted in the belief that just like a
            lemon, the digital realm can be both tangy and invigorating. We saw
            the potential to infuse zest into businesses online and embarked on
            a journey to make it happen. <br /> <br /> At Lemon craft, we are a
            team of skilled artisans, tirelessly crafting captivating websites
            that leave lasting impressions. Our designers blend creativity with
            meticulous attention to detail, ensuring that each website we create
            is a unique work of art. From the vibrant color palettes to the
            seamless interfaces, our websites are harmonious blends of
            aesthetics and functionality. <br /> <br /> We pride ourselves on
            pushing boundaries and exploring new possibilities because we help
            you push yours.....
          </p>
          <img src="" alt="" />
        </div>
      </div>
      <div className={styles.founders}>
        <h4>WE ARE LEMONCRAFT</h4>
        <h1>OUR STORY</h1>
        <img src="https://i.ibb.co/PF8XCtG/leafy.png" alt="" />
        <div className={styles.foundersPics}>
          <div className={styles.sachin}>
            <img
              src="https://www.pngmart.com/files/17/Vector-Funny-Portrait-PNG-HD.png"
              alt=""
            />
            <h1>Sachin Chauhan</h1>
            <p>
              Welcome to Lemon Craft, a zesty digital nub that was born out of
              the passion of two individuals, Sachin Chauhan and Kumar Priyan.
              After completing their Masters in Business Administration and
              leaving high-paid corporate jobs, they embarked on a mission to
              create something extraordinary in the bustling realm of technology
              and innovation. Thus, Lemon Craft was born.
            </p>
          </div>
          <div className={styles.kumar}>
            <img
              src="https://www.pngmart.com/files/17/Vector-Funny-Portrait-PNG-HD.png"
              alt=""
            />
            <h1>Kumar Priyan</h1>
            <p>
              Welcome to Lemon Craft, a zesty digital nub that was born out of
              the passion of two individuals, Sachin Chauhan and Kumar Priyan.
              After completing their Masters in Business Administration and
              leaving high-paid corporate jobs, they embarked on a mission to
              create something extraordinary in the bustling realm of technology
              and innovation. Thus, Lemon Craft was born.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.mvv}>
        {/* <div className={styles.box1}>
          <BsFillEyeFill/>
          <h1>MISSION</h1>
          <div className={styles.line}></div>
          <p>To be the most reliable pitstop for all your digital solutions.</p>
        </div>
        <div className={styles.box2}>
        <BsFillEyeFill/>
          <h1>VALUES</h1>
          <div className={styles.line}></div>
          <p>To pursue excellence by promoting organizational and individual goals.</p>
        </div>
        <div className={styles.box3}>
          <BsFillEyeFill/>
          <h1>VISION</h1>
          <div className={styles.line}></div>
          <p>To grow by enabling brand to grow.</p>
        </div> */}
        <div style={{marginTop:'-25rem'}}  class={styles.flipBox}>
          <div class={styles.flipboxinner}>
            <div class={styles.flipboxfront}>
              <h1>MISSION</h1>
              <div className={styles.line}></div>
              <img src="https://i.ibb.co/D8twtzQ/5592273.png" alt="" />
            </div>
            <div class={styles.flipboxback}>
              <p style={{color:'black'}}>To be the most reliable pitstop for all your digital solutions.</p>
            </div>
          </div>
        </div>
        <div style={{marginTop:'-15rem'}} class={styles.flipBox}>
          <div class={styles.flipboxinner}>
            <div class={styles.flipboxfront}>
              <h1>VALUES</h1>
              <div className={styles.line}></div>
              <img src="https://i.ibb.co/vsRVhw9/value.png" alt="" />
            </div>
            <div class={styles.flipboxback}>
              <p style={{color:'black'}}>To be the most reliable pitstop for all your digital solutions.</p>
            </div>
          </div>
        </div>
        <div class={styles.flipBox}>
          <div class={styles.flipboxinner}>
            <div class={styles.flipboxfront}>
              <h1>VISSION</h1>
              <div className={styles.line}></div>
              <img src="https://i.ibb.co/vsRVhw9/value.png" alt="" />
            </div>
            <div class={styles.flipboxback}>
              <p style={{color:'black'}}>To be the most reliable pitstop for all your digital solutions.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.team}>
        <h4>WE ARE LEMONCRAFT</h4>
        <h1>OUR STORY</h1>
        <img src="https://i.ibb.co/PF8XCtG/leafy.png" alt="" />
        <div className={styles.members}>
          <div className={styles.member}>
            <img src="https://i.ibb.co/G7GZWW5/kashish.png" alt="" />
            <h4>Kashish</h4>
            <p>Designation</p>
          </div> 
          <div className={styles.member}>
            <img src="https://i.ibb.co/LvZqHfd/Whats-App-Image-2023-09-05-at-12-49-23-PM-removebg-preview.png" alt="" />
            <h4>Full Name</h4>
            <p>Designation</p>
          </div> 
          <div className={styles.member}>
            <img src="https://i.ibb.co/1JpXcS4/kapil.png" alt="" />
            <h4>Full Name</h4>
            <p>Designation</p>
          </div> 
          <div className={styles.member}>
            <img src="https://i.ibb.co/Kw3Q5YY/akash.png" alt="" />
            <h4>Full Name</h4>
            <p>Designation</p>
          </div> 
          <div className={styles.member}>
            <img src="https://i.ibb.co/fqzzmPh/Bhagwant.png" alt="" />
            <h4>Full Name</h4>
            <p>Designation</p>
          </div>  
          <div className={styles.member}>
            <img src="https://www.pngmart.com/files/17/Vector-Funny-Portrait-PNG-HD.png" alt="" />
            <h4>Full Name</h4>
            <p>Designation</p>
          </div> 
          <div className={styles.member}>
            <img src="https://www.pngmart.com/files/17/Vector-Funny-Portrait-PNG-HD.png" alt="" />
            <h4>Full Name</h4>
            <p>Designation</p>
          </div> 
          <div className={styles.member}>
            <img src="https://www.pngmart.com/files/17/Vector-Funny-Portrait-PNG-HD.png" alt="" />
            <h4>Full Name</h4>
            <p>Designation</p>
          </div> 
          <div className={styles.member}>
            <img src="https://www.pngmart.com/files/17/Vector-Funny-Portrait-PNG-HD.png" alt="" />
            <h4>Full Name</h4>
            <p>Designation</p>
          </div> 
          <div className={styles.member}>
            <img src="https://www.pngmart.com/files/17/Vector-Funny-Portrait-PNG-HD.png" alt="" />
            <h4>Full Name</h4>
            <p>Designation</p>
          </div>  
          
          
        </div>
      </div>
    </div>
  );
};

export default index;
