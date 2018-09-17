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
          return;
        }
        while (current.next) current = current.next;
        current.next = node;
        this.length++;
      }

      remove(x) {
        let current = this.head;
        if (!current) return;
        if (current.value === x) {
          current = current.next;
          this.length--;
          return;
        }
        while (current) {
          if (current.next.value === x) {
            current.next = current.next.next;
            this.length--;
            break;
          } else {
            current = current.next;
          }
        }
      }

      find(x) {
        let current = this.head;
        if (!current) return;
        if (current.value === x) return true;
        while (current.next) {
          if (current.next.value === x) return current.next.value;
          current = current.next;
        }
        return;
      }

      reverse() {
        let current = this.head;
        let previous = null;
        if (!current) return;
        while (current) {
          const temp = current.next;
          current.next = previous;
          previous = current;
          current = temp;
        }
        this.head = previous;
      }
    };

    const list = new LinkedList();
    list.add(1)
    list.add(2)
    list.add(3)
    list.reverse();
    console.log(JSON.stringify(list, null, 2));
  })();
