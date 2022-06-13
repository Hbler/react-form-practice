import { Link, useParams } from "react-router-dom";

import FadingFrame from "../components/frames/fadingFrame";
import { FlexBox, Signature } from "../globalComponents";
import { Button, Canvas, Info } from "../components/styled";
import { consciences } from "../data/consciences";
import { motion } from "framer-motion";

export default function ConsciencePage() {
  const { abstraction } = useParams();
  const conscience = consciences.find((obj) => obj.abstraction === abstraction);

  const transition = {
    duration: 30,
    ease: "linear",
    // times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 0,
  };

  return (
    <FadingFrame>
      <div className="container">
        <Info>
          <FlexBox
            flexDirection="column"
            alignItems="center"
            justifyConten="center"
          >
            <h1>Hello {conscience?.abstraction}</h1>
            <p>
              To leve your body {conscience?.alias} focus on the dot in the
              center.
            </p>
          </FlexBox>
        </Info>
        <Canvas>
          <motion.div
            animate={{
              scale: [1, 1.3, 1.5, 1.3, 1],
              rotate: [0, 180, 270, 200, 0],
              borderRadius: ["20%", "30%", "50%", "50%", "20%"],
              backgroundColor: [
                "#f7258550",
                "#7209b750",
                "#3a0ca350",
                "#4361ee50",
                "#4cc9f050",
                "#f7258550",
              ],
            }}
            transition={transition}
          >
            <motion.div
              animate={{
                scale: [0.9, 1.2, 1.7, 1.4, 0.9],
                rotate: [0, 90, 360, 270, 90],
                borderRadius: ["20%", "20%", "30%", "50%", "50%", "20%"],
                backgroundColor: [
                  "#4cc9f050",
                  "#f7258550",
                  "#7209b750",
                  "#3a0ca350",
                  "#4361ee50",
                  "#4cc9f050",
                ],
              }}
              transition={transition}
            >
              <motion.div
                animate={{
                  scale: [1.6, 1.1, 0.8, 1.3, 1.6],
                  rotate: [0, 120, 270, 200, 45],
                  borderRadius: ["50%", "20%", "20%", "30%", "50%"],
                  backgroundColor: [
                    "#4361ee50",
                    "#4cc9f050",
                    "#f7258550",
                    "#7209b750",
                    "#3a0ca350",
                    "#4361ee50",
                  ],
                }}
                transition={transition}
              >
                <motion.div
                  animate={{
                    scale: [0.7, 1, 1.4, 1.1, 0.7],
                    rotate: [0, 180, 270, 200, 0],
                    borderRadius: ["40%", "50%", "30%", "50%", "40%"],
                    borderColor: [
                      "#4361ee",
                      "#4cc9f0",
                      "#f72585",
                      "#7209b7",
                      "#3a0ca3",
                      "#4361ee",
                    ],
                  }}
                  transition={transition}
                >
                  <motion.div
                    animate={{
                      scale: [0.7, 0.9, 1.2, 1.2, 0.7],
                      rotate: [0, 90, 360, 270, 90],
                      borderRadius: ["50%", "50%", "20%", "20%", "30%", "50%"],
                      backgroundColor: [
                        "#3a0ca350",
                        "#4361ee50",
                        "#4cc9f050",
                        "#f7258550",
                        "#7209b750",
                        "#3a0ca350",
                      ],
                    }}
                    transition={transition}
                  >
                    <div></div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Canvas>
        <Link to="/">
          <Button>Back to Reality</Button>
        </Link>
        <Signature>
          by <a href="https://www.linkedin.com/in/hbler">Hugo Bler</a>
        </Signature>
      </div>
    </FadingFrame>
  );
}
