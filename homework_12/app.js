var rootNode = document.getElementById("root");

function showNotFound(rootNode) {
    rootNode.innerHTML = "Page not found!";
}

function showTankDetails(element, rootNode) {
    var tank = document.createElement('div');
    tank.innerHTML = `
        <div>
            <div class="details-description">
                <img class="flag-description" src=${element.country_image} />
                <div class="model-description">${element.model}</div>
                <div class="level-description">(level ${element.level})</div>
            </div>
            <div class="preview-table">
                <div class="preview">
                    <h3>Preview</h3>
                    <img class="tank-description" src=${element.preview} />
                </div>
                <div class="table">
                    <h3>Characteristic</h3>
                    <table>
                        <tr>
                            <td>damage</td>
                            <td>${element.details.damage}</td>
                        </tr>
                        <tr>
                            <td>breoning</td>
                            <td>${element.details.breoning}</td>
                        </tr>
                        <tr>
                            <td>attack speed</td>
                            <td>${element.details.attack_speed}</td>
                        </tr>
                        <tr>
                            <td>time of targeting</td>
                            <td>${element.details.time_of_targeting}</td>
                        </tr>
                        <tr>
                            <td>ammunition</td>
                            <td>${element.details.ammunition}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <a class="back" href="#">Back to list view</a>
        </div>
    `;
    rootNode.innerHTML = '';
    rootNode.appendChild(tank);
}

function showTanks(array, rootNode) {
    var wrapper = document.createElement("div");
    wrapper.className = ("wrapper");
    var header = document.createElement("header");
    wrapper.appendChild(header);
    var heading = document.createElement("h1");
    header.appendChild(heading);
    heading.innerHTML = "Most popular tanks";
    var thumbnails = document.createElement("div");
    thumbnails.className = ("thumbnails");
    wrapper.appendChild(thumbnails);
    array.forEach(function(element, key) {
        var tank = document.createElement('div')
        tank.innerHTML = `
            <a href="#details-${key}">
                <div class="thumbnail">
                    <img class="tank-img" src=${element.preview} />
                    <div class="description">
                        <img class="flag" src=${element.country_image} />
                        <div class="level">${element.level}</div>
                        <div class="model">${element.model}</div>
                    </div>
                </div>
            </a>
        `;
        thumbnails.appendChild(tank);
    });
    rootNode.innerHTML = '';
    rootNode.appendChild(wrapper);
}

function init() {
    if (location.hash.includes("#details")) {
        var tank = tanks[location.hash.split('-')[1]]
        tank ? showTankDetails(tank, rootNode) : showNotFound(rootNode);
    } else {
        showTanks(tanks, rootNode);
    }
}

window.onhashchange = init;
init();
