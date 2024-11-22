# Events

Landbot.Core events module was made to stablish internal and external communications. As any events handler, it provides an events emitter/listener.

```javascript
// Create a listener
core.events.on('CUSTOM_EVENT', function (data) => {
  console.log(data)
});

// Emit an event
core.events.emit('CUSTOM_EVENT', {
  test: true,
});
```

## Pre-built events

- `"new_message"`. Triggered when a new message is received. Don't listen to this event unless you want to deal with a bunch of unordered messages. Use pipelines to get a correct flow of messages and render it on your app.

```javascript
core.events.on("new_message", function (message) {
  console.log(message);
});
```

> All pipelines listen to the `new_message` event to create their sequential flow.

-`"database.error"`. Triggered when an error occurred in database.

```javascript
core.events.on("database.error", function (data) {
  console.error(data);
});
```
