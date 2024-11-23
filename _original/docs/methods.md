# Methods

- `init`. Core initialization. Returns a Promise that resolves with a bunch of initial messages, corresponding to "welcome" messages or previous conversation messages.

```javascript
core.init().then(function (data) {
  console.log(data.messages);
});
```

- `sendMessage`. Sends a message to the bot from the client side. See [messages](./messages) for more info about message structures.

```javascript
core.sendMessage({ message: "Hey bro!" });
```

- `destroy`. Destroy Landbot.Core instance and all its listeners.

- `getLastMessages`. Retrieve last database messages.

```javascript
core
  .getLastMessages(25) // Get last 25 messages
  .then(function (data) {
    console.log(data);
  });
```
