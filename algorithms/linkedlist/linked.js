
class Node {
	val = 0;
	next = null;
}


function createLinkedList(arr) {
	var head  = new Node();
	head.val = 1;
	head.next = null;

	var curentNode = head;
	for(var i=1;i<arr.length;i++) {
		var newnode = new Node();
		newnode.val = arr[i];
		newnode.next = null;
		curentNode.next = newnode;

		curentNode = newnode;
	}

	return head;
}

var L = createLinkedList([1,2,3]);
console.log(L);



function reverseLinkedlIst(head) {
	
	 // 1->2->3 -> null
	// 3->2->1

	// p = null;
	// c = 1;
	// n = 2;

	




	var prev = null;
	var current = head;

	while(current) {
		var next = current.next;
		current.next = prev;


		prev = current;
		current = next;
	}

	return prev;
}

var r = reverseLinkedlIst(L);
console.log(r);