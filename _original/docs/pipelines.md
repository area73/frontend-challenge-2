# Pipelines

It's hard to get an ordered flow of messages when they are dropped from an external service almost instantly. Thanks to pipelines, you can create a listener for incoming messages in your application.

- `$sequence`. Used to get a sequential flow of messages.

```javascript
core.pipelines.$sequence.subscribe(function (message) {
  console.log(message);
});
```

- `$readableSequence`. Used to get a sequential flow of messages, including an extra delay between each one. Each delay is obtained from its previous message, improving readability.

```javascript
core.pipelines.$readableSequence.subscribe(function (message) {
  console.log(message);
});
```

- `$typingSequence`. Used to get a sequential flow of messages with their typing states. Each tick includes information about typing state, delay and message content.

```javascript
core.pipelines.$typingSequence.subscribe(function (data) {
  if (data) {
    console.log(data);
  }
});
```
