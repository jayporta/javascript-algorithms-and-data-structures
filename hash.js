(() => {
  function createHash(string, size) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % size;
  }

  class Hash {
    constructor() {
      this.storage = [];
      this.limit = 10;
    }

    add(key, value) {
      // Create index from hash
      const index = createHash(key, this.limit);
      // If the index doesn't exist in storage
      // create an array containing the key, value
      if (!this.storage[index]) {
        this.storage[index] = [[key, value]];
        return `Added ${key}, ${value}`;
      }
      // Otherwise, loop through the item at the hashed index
      for (let i = 0; i < this.storage[index].length; i++) {
        // If the first item (key position) of the item at hashed index
        // matches the key inputted, it's the same key being overwritten with
        // new data
        if (this.storage[index][i][0] === key) {
          const replaced = this.storage[index][i][1];
          this.storage[index][i][1] = value;
          return `Replaced ${key} ${replaced} with ${key} ${value}`;
        }
      }
      // If we've reached this point, there was a collision
      // so we can only push a new key value pair to an existing index
      this.storage[index].push([key, value]);
    }

    remove(key) {
      const index = createHash(key, this.limit);
      // If it doesn't exist, return
      if (!this.storage[index]) return `${key} doesn't exist`;
      for (let i = 0; i < this.storage[index].length; i++) {
        // Loop through the indexed item in storage,
        // if one of the sub array's keys matches, delete it
        if (this.storage[index][i][0] === key) {
          const removed = this.storage[index][i][1];
          this.storage[index].splice(i, 1);
          return `Removed ${key} ${removed}`;
        }
      }
    }

    find(key) {
      const index = createHash(key, this.limit);
      let result;
      if (!this.storage[index]) return `${key} doesn't exist`;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          result = this.storage[index][i][1];
        }
      }
      return `Found ${key} ${result}`;
    }
  };

  const hash = new Hash();
})();
