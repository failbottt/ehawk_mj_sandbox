/* eslint-disable */
import { useRef, useEffect } from 'react';

import LoadEhawk from "./ehawk_6_0_7.js"

function App() {
  const ehawkInputRef = useRef(null);

  // NOTE: this ensures that the ehawk code won't initiate until
  // the input exists
  useEffect(() => {
    if (ehawkInputRef.current != null) {
        // initiate the settings
        var eHawkTalonSettings = {
          cookie: { SameSite: '', Secure: false },
          bind: { OutId: 'talon' },
          autoLoad: false,
        }
        // LoadEhawk is a function that wraps the ehawk code
        // and returns the `var Talon`
        var talon = LoadEhawk();

        // initiate the ehawk code as described here:
        // https://www.ehawk.net/support/api.php#talon:~:text=bind%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20OutId%3A%20%27talon6%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C-,autoLoad%3A%20false%2C,-%7D%3B%20%20%0A%20%20%20%20%3C/script%3E%0A%20%20%20%20%3Cscript%20src
        talon.eHawkTalon();
    }
  }, [ehawkInputRef]);

  return (
    <div className="App">
        <h1>Test</h1>
        <input
            id="talon"
            name="talon"
            type="hidden"
            value='{"version": 6, "status": -1}'
            ref={ehawkInputRef}
          />
    </div>
  );
}

export default App;
