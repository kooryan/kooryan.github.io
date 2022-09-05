import Typewriter from "typewriter-effect";
import About from "../sections/about.js";
import Link from "next/link";
import Image from "next/image";
import styles from "/components/layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Hello() {
  return (
    <section className="hello-section">
      <h1
        style={{
          fontSize: "4em",
          fontWeight: 200,
          height: "0.8em",
          marginLeft: "0px",
        }}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("안녕하세요~")
              .callFunction(() => {
                console.log("Start introduction");
              })
              .pauseFor(500)
              .deleteAll()
              .typeString("Hello!")
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </h1>
      <div className="fade-in">
        <h2
          style={{
            fontSize: "2em",
            fontWeight: 300,
            height: "4em",
            marginLeft: "0px",
          }}
        >
          my name is ryan koo (구현교){" "}
        </h2>
        <div className="image-container">
          <figure>
            <Image
              src="/profile.jpeg"
              className={utilStyles.borderCircle}
              height={"600vh"}
              width={"600vw"}
          />
          <figcaption className="fig-caption">New Jersey, Princeton 2022</figcaption>
          </figure>
          <div className="intro-text">
            <a href="">[blog]</a> / <a href="https://www.linkedin.com/in/kooryan/">[linkedin]</a> / <a href="https://github.com/kooryan">[github]</a>
            <p>
              I am a student doing my undergrad at the University of Minnesota
              studying Computer Science and Statistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
