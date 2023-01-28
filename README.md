# QR Code Generator API

This API allows you to generate QR code images from a given URL by sending a GET request to the API endpoint.

## Endpoint

The endpoint for generating QR codes is `/qr`.

## Parameters

- `url` (required): The URL that you want to convert into a QR code.

## Usage

Make a GET request to the API endpoint, with the `url` parameter in the query string. For example:

`GET http://localhost:3000/qr?url=http://google.com`

The API will return an SVG image of the QR code for the specified URL.

## Example

```js
const request = require('request');
const url = 'http://localhost:3000/qr?url=http://google.com'
request(url, function (error, response, body) {
  console.log(body);
});
```

const request = require('request');
const url = 'http://localhost:3000/qr?url=http://google.com'
request(url, function (error, response, body) {
  console.log(body);
});


## Requirements

- Node.js
- Express
- qr-image

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `node app.js` to start the server

## Note

This API uses the `qr-image` library to generate the QR code images. Please make sure that you have installed it before running the code.

## Support

If you have any issues or questions, please feel free to reach out to the repository owner.
