# count_LL_elements_itterative

### Problem:
```
 class ListNode {
     constructor(value = 0, next = null) {
         this.value = value
         this.next = next
     }
 }
 
function countElements(head) {
  return -1
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(countElements(null)) // 0
console.log(countElements(LL1)) // 3
console.log(countElements(new ListNode())) // 1
