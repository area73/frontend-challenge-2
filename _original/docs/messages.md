# Messages

A message can be received by a pipeline (see [pipelines](./pipelines.md) for more info) subscription or a `new_message` event listener. On the other hand, a message is sent via `sendMessage` method (see [methods](./methods.md) for more info).

Received message types:
| Type | Description |
| --- | --- |
| `text` | Simple text messages. |
| `dialog` | A message with options. |
| `image` | An image message. |
| `iframe` | Youtube message. |
| `hidden` | A message not supposed to be rendered on chat. An `action` parameter defines the message behavior. |

Sending message types:
| Type | Description |
| --- | --- |
| `text` | Default type. Simple text messages. |
| `button` | Used to answer a buttons message. A `payload` is required to follow a chatbot specific route. |
| `file` | Image / File message.

## Examples

### Simple text/image messages

Reception:

```javascript
{ // text
  type: 'text',
  samurai: -1343,
  message: 'Hey there!',
}

{ // image
  type: 'image',
  url: 'https://...',
  samurai: -1343,
}
```

Answer:

```javascript
{ // text
  type: 'text', // Default
  message: 'Hi!',
}

{ // image/file
  type: 'file',
  url: 'https://...',
}
```

### Buttons messages

Reception:

```javascript
{
  type: 'dialog',
  buttons: ['Nice', 'Bad'],
  // Payloads are linked to buttons routing as defined in the landbot builder.
  payloads: ['$0', '$1'],
  title: 'How are you?',
  samurai: -1343,
}
```

Answer:

```javascript
{
  type: 'button',
  message: 'Nice',
  payload: '$0',
}
```

## Parameters

Received message parameters:
| | Description | Default |
| --- | --- | --- |
| `type` | {String} Message type. | `"text"` |
| `message` | {String} Simple messages content. | |
| `title` | {String} Dialog (buttons) messages content. The difference with `message` is it doesn't include the buttons/options as a flat list. | |
| `rich_text` | {String} Simple messages rich (html) content. | |
| `buttons` | {Array} Options list. | |
| `payloads` | {Array} Options payload list | |
| `url` | {String} Image message url | |
| `samurai` | {Number} Message author. If negative, bot message. If positive, human message. If not defined, user message. | |
