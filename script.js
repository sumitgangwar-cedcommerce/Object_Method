function product(i , n , q){
    this.Id = i,
    this.Name = n,
    this.Quantity = q,    
    this.showDetails = ()=>{
      return [this.Id , this.Name , this.Quantity]
    },

    this.editQuantity = (q)=>{
        this.Quantity = q  
    }
}


if(productArr === undefined)    var productArr = {};

  
const add_pro = (event)=>{
    event.preventDefault()
    let pro = new product(event.target.id.value, event.target.name.value, event.target.quantity.value)
    productArr[event.target.id.value] = pro 
    show_products()
}
const show_products = ()=>{
    let t =  `<table class='tab'>
                <tr>
                    <th></th>
                    <th>Product Id</th>
                    <th>Product Name </th>
                    <th>Product Quantity </th>
                    <th>Action</th>
                </tr>`
    Object.values(productArr).map((item)=>{
        let temp = item.showDetails();
        t+=    `<tr>
                    <td style='color:red;cursor:pointer' onclick=delete_pro('${temp[0]}')>X</td>
                    <td>${temp[0]}</td>
                    <td>${temp[1]}</td>
                    <td>${temp[2]}</td>
                    <td><button onclick=update_quantity('${temp[0]}')>Update Quantity</button></td>
                </tr>`
    })

    t+="</table>"

    document.getElementById('res').innerHTML = t
}

const update_quantity = (data)=>{
    let t = window.prompt("Enter the Updated quantity" , productArr[data].Quantity)
    if(t===null)    t = productArr[data].Quantity
    productArr[data].editQuantity(t)
    show_products();
}

const delete_pro = (data)=>{
    delete productArr[data]
    show_products()
}
