class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}




class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
  
    insertLast(data){
        let node = new Node(data)
       
        if(!this.tail){
            this.head = this.tail = node
        }
        this.tail.next = node
        this.tail = node
        
        this.size++
    }

    removeAt(index){
        let current = this.head
        let previous
        let count = 0
        if(index === 0){
            this.head = current.next
        }else{
            while(count < index){
                count++
                previous = current
                current = current.next

            }
            previous.next = current.next
        }
        this.size --
    }

}

const orders = newOrderInitial();

function newOrderInitial(){
   const lst =  new LinkedList
    while(lst.size < 10){
        const burgers = Math.floor(Math.random()*10)
        const fries = Math.floor(Math.random()*15)
        const drinks = Math.floor(Math.random()*5)
        const orderData ={'burgers':burgers, 'fries': fries, 'drinks':drinks,}
        lst.insertLast(orderData)
   
        

    }
    return lst
}

// okay the idea is kind of when the score goes up people will visit more often and orders will get generated faster
const newOrderTimmed =(score)=>{
    setInterval(()=>{
        const burgers = Math.floor(Math.random()*10)
        const fries = Math.floor(Math.random()*15)
        const drinks = Math.floor(Math.random()*5)
        const orderData ={'burgers':burgers, 'fries': fries, 'drinks':drinks,}
        orders.insertLast(orderData)
    }, 450000/(score/8)

    )

}


export  {orders, newOrderTimmed}
