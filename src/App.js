import { useState } from "react";
import {
  Card,
  CardContent,
  Switch,
  FormGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import ConfettiExplosion from "react-confetti-explosion";
import "./App.css";

const labels = [
  "happiness",
  "optimism",
  "kindness",
  "giving",
  "respect",
  "ego",
];

function App() {
  const [switchStates, setSwitchStates] = useState({
    happiness: false,
    optimism: false,
    kindness: false,
    giving: false,
    respect: false,
    ego: false,
  });

  const handleSwitchChange = (event) => {
    const { name, checked } = event.target;

    setSwitchStates((prevState) => {
      if (name === "ego") {
        return {
          happiness: false,
          optimism: false,
          kindness: false,
          giving: false,
          respect: false,
          ego: checked,
        };
      }
      return { ...prevState, [name]: checked };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Card className="container" sx={{ width: 370 }}>
          <CardContent>
            <FormControl>
              <FormGroup aria-label="position" row>
                {labels.map((label) => (
                  <div key={label}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={switchStates[label]}
                          onChange={handleSwitchChange}
                          name={label}
                          sx={{
                            "& .MuiSwitch-switchBase": { color: "red" },
                            "& .MuiSwitch-switchBase.Mui-checked": {
                              color: "#76ff03",
                            },
                            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                              { backgroundColor: "#76ff03" },
                            "& .MuiSwitch-track": { backgroundColor: "red" },
                          }}
                          disabled={label !== "ego" && switchStates.ego}
                        />
                      }
                      label={label.charAt(0).toUpperCase() + label.slice(1)}
                      labelPlacement="bottom"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontWeight: 'bold',  // Makes the label text bold
                        }
                      }}
                    />
                    {switchStates[label] && label !== "ego" && (
                      <ConfettiExplosion
                        force={0.8}
                        duration={5000}
                        particleCount={350}
                        width={1600}
                        height={"120vh"}
                      />
                    )}
                  </div>
                ))}
              </FormGroup>
            </FormControl>
          </CardContent>
        </Card>

        <div className={`screen-dim ${switchStates.ego ? "active" : ""}`}></div>
      </header>
    </div>
  );
}

export default App;
