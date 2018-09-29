function fetchPics() {
  const url = 'https://picsum.photos/list';
  const init = { method: 'GET' };
  const request = new Request(url, init);
  fetch(request).then((response) => {
    if (!response) throw new Error(response);
    return response.json();
  }).then(json => {
    console.log(json);
  }).catch(error => console.warn(`Error fetching pics ${ error }`));
}

// Uncomment below to fetch pics
// fetchPics();

function xmlRequestThing(args) {
  const { method, url, headers } = args;
  const xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhr.open(method, url);
    // Headers can be received as an object containing all headers
    // here we can iterate through them and set them with setRequestHeader()
    if (headers) {
      const keys = Object.keys(headers);
      for (let i = 0; i < keys.length; i++) {
        xhr.setRequestHeader(keys[i], headers[keys[i]]);
      }
    }
    xhr.onload = () => {
      const response = JSON.parse(xhr.response);
      if (response.error) reject(`ERROR: ${ response.error }`);
      resolve(response);
    }
    xhr.onerror = (error) => reject(`ERROR: ${ error.statusText }`);
    xhr.send();
  });
}

function runXMLDemo() {
  const picsPayload = {
    method: 'GET',
    url: 'https://picsum.photos/list',
  };
  xmlRequestThing(picsPayload)
  .then((response) => console.log(response))
  .catch((error) => console.warn(error));
}

// Uncomment below to do the XMLHttpRequest thing
// runXMLDemo();
