(() => {
    class Node {
      constructor() {
        // Every node has connections
        this.connections = [];
      }
    }

    class Graph {
      constructor() {
        // Declare network object and length
        this.network = {};
        this.length = 0;
      }

      add(x) {
        // Create a new node
        const node = new Node();

        // Only if the node (x) is not already in the network
        // add it and increase the length
        if (!this.network[x]) {
          this.network[x] = node;
          this.length++;
          return true;
        }
        return;
      }

      remove(x) {
        // If x is not in the network, remove it
        if (!this.network[x]) return;
        this.removeConnections(x);
        delete this.network[x];
      }

      findConnection(x, y) {
        // If x is in the network...
        if (this.network[x]) {
          // If x has no connections at all
          if (!this.network[i].connections.length) {
            console.log(`${x} has no connections. You can connect if you'd like.`);
            return;
          } else {
            // If y is in x's connections, return true
            for (let i = 0; i < xConnections.length; i ++) {
              if (xConnections[i] === y) {
                console.log(`${y} is connected to ${x}!`);
                return true;
              } else {
                console.log(`${x} has no connection to ${y}. Add a connection. You can be buds.`);
                return;
              }
            }
          }
        } else {
          console.log(`${x} is not in the network`);
          return;
        }
      }

      addConnection(x, y) {
        // If x or y is not in the network, nope
        if (!this.network[x] || !this.network[y]) return;
        // Iterate through x's connections and connect them
        // if they're not already connected
        for (let i = 0; i < this.network[x].connections.length; i ++) {
          if (this.network[x].connections[i] !== y) {
            this.network[x].connections.push(y);
            this.network[y].connections.push(x);
            return;
          }
        }
        // If x exists but has no connections, connect x and y
        this.network[x].connections.push(y);
        this.network[y].connections.push(x);
        return;
      }

      removeConnection(x, y) {
        // Get out if x doesn't exist
        if (!this.network[x]) return;
        // Otherwise, iterate through x's connections and remove y
        // If there is no length the function will return undefined
        for (let i = 0; i < this.network[x].connections.length; i++) {
          if (this.network[x].connections[i] === y) {
            this.network[x].connections.splice(i, 1);
          }
        }
        for (let i = 0; i < this.network[y].connections.length; i++) {
          if (this.network[y].connections[i] === x) {
            this.network[y].connections.splice(i, 1);
          }
        }
        return;
      }
    }

    const graph = new Graph();
  })();
