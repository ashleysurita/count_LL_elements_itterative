 class ListNode {
     constructor(value = 0, next = null) {
         this.value = value
         this.next = next
     }
 }

function countElements(head) {
   if(!head) return 0
    
    let count = 0
    const queue = [head]
    while(queue.length > 0){
        // add one for the one we take out
        const ele = queue.shift()
        count += 1
        // add to the queue if there's more
       if(ele.next){
           queue.push(ele.next)
       }
    }
    return count
}
