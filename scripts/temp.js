window.onload = async() => {
    const url = window.location.href;

    const urlObject = new URL(url);

    const params = new URLSearchParams(urlObject.search);

    const values = [];

    params.forEach((value, key) => {
        values.push(value);
        // console.log(`${key}: ${value}`);
    });
    await getData(...values);
}

async function getData(id){

        fetch('products.json')
        .then(response => response.json())
        .then(products => {
    // console.log(products);
           
            for(const product of products)
            {
                if(product.id == id)
                {
                    createProductPage(product);
                }
            }
                
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

function createProductPage(product)
{
    console.log(product);
    const box = document.getElementsByClassName("box")[0];
    console.log(box);

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const image = document.createElement("img");

    div1.innerText = `name: ${product.name}`;
    div2.innerText = `type: ${product.type}`;
    div3.innerText = `price: ${product.price}`;
    image.src = `${product.image}`;

    box.append(div1,div2,div3,image);
}

function goBack()
{
    window.location.href = "/fishing-store";
}