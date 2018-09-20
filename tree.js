(() => {
    class Node {
      constructor(x) {
        this.value = x;
        this.left = null;
        this.right = null;
      }
    }

    class BinaryTree {
      constructor() {
        this.root = null;
      }

      add(x) {
        const node = new Node(x);
        let current = this.root;
        // If there's no root, assign the new node to the root
        if (!current) {
          this.root = node;
          return;
        }
        while (current) {
          if (x < current.value) {
            if (!current.left) {
              current.left = node;
              break;
            } else {
              current = current.left;
            }
          }
          if (x > current.value) {
            if (!current.right) {
              current.right = node;
              break;
            } else {
              current = current.right;
            }
          }
          if (x === current.value) return false;
        }
      }

      remove(x) {
        // via
        // https://codepen.io/beaucarnes/pen/ryKvEQ?editors=0012
        const removeNode = (node, toRemove) => {
          if (!node) return null;
          if (node.value === toRemove) {
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            const temp = node.right;
            while (temp.left) temp = temp.left;
            node.value = temp.value;
            node.right = removeNode(node.right, temp.value);
            return node;
          } else if (node.value > toRemove) {
            node.left = removeNode(node.left, toRemove);
            return node;
          } else if (node.value < toRemove) {
            node.right = removeNode(node.right, toRemove);
            return node;
          }
        };
        this.root = removeNode(this.root, x);
      }

      inOrder() {
        if (!this.root) return;
        const result = [];
        const traverseInOrder = (node) => {
          if (node.left) traverseInOrder(node.left);
          result.push(node.value); // IN push in the middle
          if (node.right) traverseInOrder(node.right);
        };
        traverseInOrder(this.root);
        return result;
      }

      preOrder() {
        if (!this.root) return;
        const result = [];
        const traversePreOrder = (node) => {
          result.push(node.value); // PRE push before
          if (node.left) traversePreOrder(node.left);
          if (node.right) traversePreOrder(node.right);
        };
        traversePreOrder(this.root);
        return result;
      }

      postOrder() {
        if (!this.root) return;
        const result = [];
        const traversePostOrder = (node) => {
          if (node.left) traversePostOrder(node.left);
          if (node.right) traversePostOrder(node.right);
          result.push(node.value); // POST push after
        };
        traversePostOrder(this.root);
        return result;
      }

      breadthFirstSearch(x) {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
          for (let i = 0; i < queue.length; i++) {
            const current = queue.shift();
            console.log(current.value);
            if (current.value === x) return current;
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
          }
        }
        return false;
      }

      depthFirstSearch(x) {
        const stack = [];
        stack.push(this.root);
        while (stack.length) {
          const current = stack.shift();
          console.log(current.value);
          if (current.value === x) return current;
          if (current.left) stack.unshift(current.left);
          if (current.right) stack.unshift(current.right);
        }
        return false;
      }
    };

    const tree = new BinaryTree();
  })();
