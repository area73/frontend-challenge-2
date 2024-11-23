# Install

### ES6

```bash
npm install @landbot/core
```

Before creating a new instance of LandbotCore, you need to fetch your bot configuration from the bot share URL. You can find it in the "Share" section of your bot builder:

```javascript
import LandbotCore from "@landbot/core";

// If you want, use your own bot share URL (replace .html to .json) here.
const CONFIG_URL =
  "https://chats.landbot.io/u/H-441480-B0Q96FP58V53BJ2J/index.json";

fetch(CONFIG_URL)
  .then((res) => res.json())
  .then((config) => {
    const core = new LandbotCore(config);
  });
```
