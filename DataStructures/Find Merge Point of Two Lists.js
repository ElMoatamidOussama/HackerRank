'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

function checkIfEqual(node1, node2) {

    while (node1 && node2) {
        if (node1.data != node2.data) return false;
        node1 = node1.next;
        node2 = node2.next;
    }
    return !node1 && !node2 ? true : false;
}
// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {

    let currentNode1 = headA.next ? headA.next : headA;
    let currentNode2 = headB;

    while (currentNode1) {
        currentNode2 = headB;
        while (currentNode2) {
            if (currentNode1.data == currentNode2.data && checkIfEqual(currentNode1.next, currentNode2.next)) return currentNode1.data;
            currentNode2 = currentNode2.next;
        }
        currentNode1 = currentNode1.next;
    }
    return null;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const index = parseInt(readLine(), 10);

        const llist1Count = parseInt(readLine(), 10);

        let llist1 = new SinglyLinkedList();

        for (let i = 0; i < llist1Count; i++) {
            const llist1Item = parseInt(readLine(), 10);
            llist1.insertNode(llist1Item);
        }

        const llist2Count = parseInt(readLine(), 10);

        let llist2 = new SinglyLinkedList();

        for (let i = 0; i < llist2Count; i++) {
            const llist2Item = parseInt(readLine(), 10);
            llist2.insertNode(llist2Item);
        }

        let ptr1 = llist1.head;
        let ptr2 = llist2.head;

        for (let i = 0; i < llist1Count; i++) {
            if (i < index) {
                ptr1 = ptr1.next;
            }
        }

        for (let i = 0; i < llist2Count; i++) {
            if (i != llist2Count - 1) {
                ptr2 = ptr2.next;
            }
        }

        ptr2.next = ptr1;

        let result = findMergeNode(llist1.head, llist2.head);

        ws.write(result + "\n");
    }

    ws.end();
}