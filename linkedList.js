(() => {
    class Node  {
      constructor(x) {
        this.value = x;
        this.next = null;
      }
    }

    class LinkedList {
      constructor() {
        this.head = null
        this.length = 0;
      }

      add(x) {
        const node = new Node(x);
        let current = this.head;
        if (!current) {
          this.head = node;
          this.length++;
          return `Added ${x}`;
        }
        while (current.next) current = current.next;
        current.next = node;
        this.length++;
      }

      remove(x) {
        let current = this.head;
        if (!current) return `${x} is not in the list`;
        if (current.value === x) {
          current = current.next;
          this.length--;
          return `Removed ${x}`;
        }
        while (current.next) {
          if (current.next.value === x) {
            current.next = current.next.next;
            this.length--;
            return `Removed ${x}`;
          } else {
            current = current.next;
          }
        }
      }

      find(x) {
        let current = this.head;
        if (!current) return `${x} is not in the list`;
        if (current.value === x) return `Found ${x}`;
        while (current.next) {
          if (current.next.value === x) return `Found ${x}`;
          current = current.next;
        }
      }

      reverse() {
        let current = this.head;
        let previous = null;
        if (!current) return `${x} is not in the list`;
        while (current) {
          const temp = current.next;
          current.next = previous;
          previous = current;
          current = temp;
        }
        this.head = previous
      }
    };

    const list = new LinkedList();
  })();
