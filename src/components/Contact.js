import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="Contact-div">
        <div className="information">
          <h1>Hi, Abhishek here</h1>
          <br />
          <br />
          <h2>I am a Frontend Web Developer</h2>
          <br />
          <br />
          <h2>
            I am a full-stack web developer with a passion for building modern,
            user-friendly applications using the MERN stack. I have experience
            in all aspects of the MERN stack, from MongoDB database design to
            React frontend development. I am also proficient in JavaScript,
            Node.js, and Express.js.
          </h2>
        </div>
        <div className="footer">
          <div
            className="email"
            style={{
              textAlign: "center",
              fontSize: "large",
            }}
          >
            <a
              href="mailto:abhi23khande@gmail.com?subject=Frontend%20Hiring%20Enquiry&body=Your%20Email%20Body"
              style={{
                height: "55%",
                width: "75%",
                lineHeight: "355%",
              }}
            >
              <div></div>
            </a>
          </div>
          <div className="linkedin">
            <a href="https://linkedin.com/in/abhishek-khande-0271bb237/"> </a>
          </div>
          <div className="github">
            <a href="https://github.com/AbhishekKhande"> </a>
          </div>
        </div>
      </div>
    </>
  );
}
