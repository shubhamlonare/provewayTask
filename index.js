const result = [
    {
        id: 1,
        pair: 1,
        discount: 50,
        price: 195.00
    },
    {
        id: 2,
        pair: 2,
        discount: 40,
        price: 345.00
    }, {
        id: 3,
        pair: 3,
        discount: 60,
        price: 582.00
    },
]

let table = `<div style="margin-top: 10px">
    <div style="display: flex;">
        <div style="display: flex;">
            <div style="margin-top: 25px; margin-right: 5px;">
                <p>#1</p>
            </div>
            <div>
                <p style="text-align:left">Size</p>
                <select name="size" id="size">
                    <option value="1">S</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </div>
        <div>
            <p style="text-align:left">Color</p>
            <select name="color" id="size">
                <option value="red">Color</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
            </select>
        </div>
    </div>
    <div style="display: flex;">
        <div style="display: flex;">
            <div style="margin-top: 5px; margin-right: 5px;">
                <p>#2</p>
            </div>
            <div>
                <select name="size" id="size">
                    <option value="1">S</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </div>
        <div>
            <select name="color" id="size">
                <option value="red">Color</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
            </select>
        </div>
    </div>
</div>`


const container = document.getElementById("list")



let render = (val) => {

    document.getElementsByName("radio").forEach((radioElement, index) => {
        let element = document.getElementById(index + 1);
        let label = document.getElementById("container" + (index + 1));
        if (radioElement.checked === false) {
            element.style = `display: flex; justify-content: space-between; width: 91%; border: 2px solid #C8C8C8;  border-radius: 6px; margin-top: 35px;`;
            label.innerHTML = "";
        } else {
            element.style = `display: flex; justify-content: space-between; width: 91%; border: 2px solid #007F61;  border-radius: 6px; margin-top: 35px; background-color: #F4FBF9`;
            label.innerHTML = table;
        }
    });

}


function addToCart() {
    let message = "Please Select A Product!";

    let index = 0;
    document.getElementsByName("radio").forEach((radioElement, radioIndex) => {
        if (radioElement.checked === true) {
            index = radioIndex + 1;
        }
    });

    if (index === 1) {
        message = "1 Pair for DKK 195.00 Added To Cart!";
    } else if (index === 2) {
        message = "2 Pair for DKK 345.00 Added To Cart!";
    } else if (index === 3) {
        message = "3 Pair for DKK 582.00 Added To Cart!";
    }

    alert(message);
}





result.map((value, index) => {

    const content = `<div id="${value.id}" class="list-content" style="display: flex; justify-content: space-between; width: 91%; border: 2px solid #C8C8C8;  border-radius: 6px; margin-top: 35px;">
                        <div id="container-${value.id}" style="display: flex; padding-top: 5px;">
                            <input type="radio" name="radio" value="order${value.id}" onClick="render(${value.id})">
                            <div>
                                <label id="label" for="select">
                                    <ol style="text-align: left; margin-left: 20px;">
                                        <li>${value.pair} Pair</li>
                                        <li style="font-weight: 600;">DKK ${value.price.toFixed(2)}</li>
                                    </ol>
                                </label>
                                <div id="container${value.id}">
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 style="padding-top: 18px;">${value.discount}% OFF</h4>
                        </div>
                    </div>
    `;
    container.innerHTML += content;


})




