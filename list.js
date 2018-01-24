"use strict";

class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		// We'll want to keep track of the head node and
		// the last node to make adding and subtracting easy
		this.headNode = null;
		this.lastNode = null;
	}

	// Allow initializing the list with a first node
	initialize(firstNode = null) {
		this.headNode = firstNode;
		this.lastNode = firstNode;
	}

	// To add the first node
	addFirstNode(data) {
		this.headNode = new Node(data, null);
		this.lastNode = this.headNode;
	}

	// Add a node to the end of the list
	addNode(data) {
		// If we don't have a headNode yet, that means the list is empty
		// We can treat this case as a `addFirstNode` method
		if (!this.headNode) {
			this.addFirstHead(data);
		} else {
			const node = new Node(data, null);

			// First, point the last node to our new one
			this.lastNode.next = node;

			// Set our new node as the official last node
			this.lastNode = node;
		}
	}

	// Remove the node at this position (assume there is one there)
	// We'll crawl the list and save the prev
	removeNode(index) {
		// Start at the head
		let counter = 0;
		let currentNode = this.headNode;
		let prevNode = null;

		// Crawl until we hit index
		while (counter < index) {
			prevNode = currentNode;
			currentNode = currentNode.next;
			++counter;
		}

		// Now remove the node
		let nextNode = currentNode.next;

		// Clear the `next` reference
		currentNode.next = null;

		// Make the previous one point correctly
		prevNode.next = nextNode;
	}

	// Return the node at that position, like in an array
	// It has no error handling
	findNode(index) {
		// Start at the head
		let counter = 0;
		let currentNode = this.headNode;

		// Crawl until we hit index
		while (counter < index) {
			currentNode = currentNode.next;
			++counter;
		}

		return currentNode;
	}

	// Crawls and prints the list
	printList() {
		// Start at the head
		let currentNode = this.headNode;

		while (currentNode.next !== null) {
			console.log(currentNode.data);
			currentNode = currentNode.next;
		}
	}
}

