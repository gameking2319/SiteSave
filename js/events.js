var LIST = JSON.parse(localStorage.getItem("list")) || [];

document.getElementById("add").addEventListener("click", function(e){
    
    var value = window.prompt("Give me the site url")

    if(!value){
        var value = window.prompt("Give me the site url *") 

        return;
    }


    LIST.push(value)

    localStorage.setItem("list", JSON.stringify(LIST));

    var main = "https://www.google.com/s2/favicons?domain="+value;
    
    document.getElementById("row").innerHTML += `
    <div class="col-sm-2">
        <div class="card">
            <div class="text-center">
                ${value}
                <img class="img" onclick="go('${value}')" src="${main}">
                <div class="img text-white p-1 btnbox">
                    <a onclick="deleteItem('${value}')" class="btn btn-danger h-75 w-100">Delete</a>
                </div>
            </div>
        </div>
    </div>
`;

    e.preventDefault()
})

window.onload = () => {

    LIST.forEach(site => {
        var main = "https://www.google.com/s2/favicons?domain="+site;
        document.getElementById("row").innerHTML += `

            

            <div class="col-sm-2">
                <div class="card">
                    <div class="text-center">
                        ${site}               
                        <img class="img" onclick="go('${site}')" src="${main}">
                        <div class= "text-white p-1 btnbox">
                            <a onclick="deleteItem('${site}')" class="img btn btn-danger h-75 w-100">Delete</a>
                        </div>
                    <div>
                </div>
            </div>  
        `;
    });

}

function go(site)
{
    window.open("https://"+site);
}

function deleteItem(name){
    LIST = LIST.filter(item => item !== name)
    
    localStorage.setItem("list", JSON.stringify(LIST))

    window.location.href = "./index.html"
}
