import { useState } from "react";
import { Card, CardContent, Switch, FormGroup, FormControlLabel, FormControl } from "@mui/material";
import "./App.css";

const labels = ["happiness", "optimism", "kindness", "giving", "respect", "ego"];

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
        <Card className="container" sx={{ width: 350 }}>
          <CardContent>
            <FormControl>
              <FormGroup aria-label="position" row>
                {labels.map((label) => (
                  <FormControlLabel
                    key={label}
                    control={
                      <Switch
                        checked={switchStates[label]}
                        onChange={handleSwitchChange}
                        name={label}
                        sx={{
                          "& .MuiSwitch-switchBase": { color: "red" },
                          "& .MuiSwitch-switchBase.Mui-checked": { color: "#76ff03" },
                          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": { backgroundColor: "#76ff03" },
                          "& .MuiSwitch-track": { backgroundColor: "red" },
                        }}
                        disabled={label !== "ego" && switchStates.ego}
                      />
                    }
                    label={label.charAt(0).toUpperCase() + label.slice(1)}
                    labelPlacement="bottom"
                  />
                ))}
              </FormGroup>
            </FormControl>
          </CardContent>
        </Card>
      </header>
    </div>
  );
}

export default App;
