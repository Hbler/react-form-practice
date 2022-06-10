import { useState } from "react";

import Form from "../components/Form";
import FadingFrame from "../components/frames/fadingFrame";
import { Button, Header } from "../components/styled";
import { FlexBox, SlidingBackground } from "../globalComponents";

export default function LoginPage({ setLoggedIn }) {
  const horizontal = {
    x: "0",
    y: "50%",
    x1: "1000px",
    y1: "50%",
  };

  const vertical = {
    x: "50%",
    y: "0",
    x1: "50%",
    y1: "1000px",
  };

  const [bgDirection, setBgDirection] = useState(horizontal);
  const [formVisible, setFormVisible] = useState(false);

  return (
    <>
      <SlidingBackground
        x={bgDirection.x}
        x1={bgDirection.x1}
        y={bgDirection.y}
        y1={bgDirection.y1}
      ></SlidingBackground>
      <FadingFrame>
        <div className="container">
          <Header>
            <FlexBox
              flexDirection="column"
              alignItems="center"
              justifyConten="center"
            >
              <h1>O.o.B.E.</h1>
              <small>Out of Body Experience</small>
              <p>
                An amazing experience at the tip of your fingers, leave your
                body resting and travel space and time!
              </p>
              <p>
                Register below and get access to our exclusive personalised tool
                to start exploring
              </p>
              <Button
                onClick={() => {
                  setFormVisible(true);
                  setBgDirection(vertical);
                }}
              >
                Register
              </Button>
            </FlexBox>
          </Header>
          {formVisible && (
            <Form
              setLoggedIn={setLoggedIn}
              setFormVisible={setFormVisible}
              setBgDirection={setBgDirection}
              horizontal={horizontal}
            />
          )}
        </div>
      </FadingFrame>
    </>
  );
}
