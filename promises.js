function getStuff() {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
  return promise;
}

getStuff().then(result => {
  // if (result) console.log('promise ', result);
  // else throw new Error(result);
}).catch(error => console.log(error));

async function asyncVersion() {
  try {
    const result = await getStuff();
    if (!result) throw new Error(result);
    console.log(`async ${result}`);
  } catch (error) {
    console.log(`error ${error}`);
  }
}

// asyncVersion();
