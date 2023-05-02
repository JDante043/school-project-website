function checkprice(){
    price = 0;
    const checkboxes = document.getElementsByClassName("item");

    for(let i = 0; i <= checkboxes.length; i++){
        if(checkboxes[i].checked == true){
            price += Number(checkboxes[i].value);
        }
        document.getElementById("pricetext").innerText = "Total price: $" + price;
    }
}

function booked(){
    alert("Thank you for your purchase!");
}