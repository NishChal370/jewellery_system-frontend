// @ts-ignore: CSS module import without type declarations
import "../styles/login-left-scene.css";

function LeftScene() {
    return (
        <div className="scene" >
            <div className="scene-noise"></div>
            <div className="glow"></div>
        
            <div className="particles">
              <span
                className="particle"
                style={{
                  left: "12%",
                  "--s": "3px",
                  "--dur": "8s",
                  "--delay": "0s",
                } as React.CSSProperties}
              ></span>
              <span
                className="particle"
                style={{
                  left: "22%",
                  "--s": "2px",
                  "--dur": "11s",
                  "--delay": "-2s",
                } as React.CSSProperties}
              ></span>
              <span
                className="particle"
                style={{
                  left: "34%",
                  "--s": "4px",
                  "--dur": "9s",
                  "--delay": "-4s",
                } as React.CSSProperties}
              ></span>
              <span
                className="particle"
                style={{
                  left: "48%",
                  "--s": "2px",
                  "--dur": "7s",
                  "--delay": "-1s",
                } as React.CSSProperties}
              ></span>
              <span
                className="particle"
                style={{
                  left: "60%",
                  "--s": "3px",
                  "--dur": "10s",
                  "--delay": "-5s",
                } as React.CSSProperties}
              ></span>
              <span
                className="particle"
                style={{
                  left: "71%",
                  "--s": "2px",
                  "--dur": "8.5s",
                  "--delay": "-3s",
                } as React.CSSProperties}
              ></span>
              <span
                className="particle"
                style={{
                  left: "83%",
                  "--s": "3px",
                  "--dur": "12s",
                  "--delay": "-6s",
                } as React.CSSProperties}
              ></span>
              <span
                className="particle"
                style={{
                  left: "91%",
                  "--s": "2px",
                  "--dur": "9.5s",
                  "--delay": "-2.5s",
                } as React.CSSProperties}
              ></span>
            </div>
        
            <div className="flight">
              <svg className="flight-path" viewBox="0 0 460 220" preserveAspectRatio="none">
                <path className="trail t1" d="M10,150 C100,160 160,90 260,100 C330,107 380,80 440,70"></path>
                <path className="trail t2" d="M0,170 C90,185 150,120 250,128 C320,134 370,108 450,96"></path>
                <path className="trail t3" d="M0,190 C80,205 140,150 240,156 C310,160 360,138 450,124"></path>
              </svg>
        
              <svg className="bird" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
                <g className="wing">
                  <path d="M50,30 C40,12 18,4 0,8 C16,16 26,24 30,34 C18,32 6,36 0,44 C20,44 38,40 50,30 Z" fill="var(--glow-soft)"/>
                  <path d="M50,30 C60,12 82,4 100,8 C84,16 74,24 70,34 C82,32 94,36 100,44 C80,44 62,40 50,30 Z" fill="#FFFFFF"/>
                </g>
              </svg>
            </div>
        
            <div className="scene-copy">
              <h2>Clarity takes flight.</h2>
              <p>Sign in to pick up right where you left off, wherever the work takes you next.</p>
            </div>
          </div>
    )
}

export default LeftScene;
