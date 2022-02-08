function setCrossBars() {
    document.getElementById("ninjaSpaceRight").style.top = ninja1BorderTop + "px";
    document.getElementById("ninjaSpaceRight").style.left = ninja1BorderRight  + "px";
    document.getElementById("ninjaSpaceRight").style.width = ninja1SpaceRight  + "px";

    document.getElementById("ninjaSpaceLeft").style.top = ninja1BorderTop + "px";
    document.getElementById("ninjaSpaceLeft").style.width = ninja1SpaceLeft  + "px";
    
    document.getElementById("ninjaSpaceTop").style.left = ninja1BorderLeft + "px";
    document.getElementById("ninjaSpaceTop").style.height = ninja1SpaceTop   + "px";

    document.getElementById("ninjaSpaceBottom").style.top = ninja1BorderBottom + "px";
    document.getElementById("ninjaSpaceBottom").style.left = ninja1BorderLeft + "px";
    document.getElementById("ninjaSpaceBottom").style.height = ninja1SpaceBottom  + "px";

}

function setPersistentNinjaSpaceFormulas() {
    
    ninja1SpaceLeft = ninja1BorderLeft
    ninja1BorderRight = ninja1BorderLeft + ninja1Width;
    ninja1SpaceRight = containerWidth - ninja1BorderRight
    ninja1SpaceTop = ninja1BorderTop
    ninja1BorderBottom = ninja1BorderTop + ninja1Height;
    ninja1SpaceBottom = containerHeight - ninja1BorderBottom
}

// below is great, Don't change anything. 
// define setStartPositionNinja1
function setStartPositionNinja1() {
    containerHeight_init = document.getElementById('container').style.height;
    containerHeight = Number(containerHeight_init.substring(0, containerHeight_init.indexOf("px")));
    containerWidth_init = document.getElementById('container').style.width;
    containerWidth = Number(containerWidth_init.substring(0, containerWidth_init.indexOf("px")));
    ninja1Width_init = document.getElementById("ninja1").style.width;
    ninja1Width = Number(ninja1Width_init.substring(0, ninja1Width_init.indexOf("px")));
    ninja1Height_init = document.getElementById("ninja1").style.height;
    ninja1Height = Number(ninja1Height_init.substring(0, ninja1Height_init.indexOf("px")));

    // console.log("containerWidth: " + containerWidth);
    // console.log("ninja1Width: " + ninja1Width);
    // console.log("ninja1BorderLeft: " + ninja1BorderLeft);
    // console.log("ninja1BorderRight: " + ninja1BorderRight);

    // console.log("containerHeight: " + containerHeight);
    // console.log("ninja1Height: " + ninja1Height);
    // console.log("ninja1BorderTop: " + ninja1BorderTop);
    // console.log("ninja1BorderBottom: " + ninja1BorderBottom);

    // console.log("ninja1SpaceLeft: " + ninja1SpaceLeft);
    // console.log("ninja1SpaceRight: " + ninja1SpaceRight);
    // console.log("ninja1SpaceTop: " + ninja1SpaceTop);
    // console.log("ninja1SpaceBottom: " + ninja1SpaceBottom);

    ninja1BorderTop = containerHeight / 2 - ninja1Height / 2;
    ninja1BorderLeft = containerWidth / 2 - ninja1Width / 2;
    
    walkDir = "down"
    walkSeq = 1
    updatePosition(); 
    
    /// next task!?~?
    dragonStatus = "exit"
}

// execute setStartPositionNinja1 upon page load
setStartPositionNinja1();

// update variables and write back to HTML, based on arrow key entry
function updatePosition() {
    // trying below
    // document.getElementById("ninja1").style.removeProperty("background-image"); 
    // document.getElementById("ninja1").style.backgroundimage = `url(images/top1.png)`; 
    // document.getElementById("ninja1-img").innerHTML = "<img src='images/top1.png' alt='dojocat' id='ninja1-img' style='height: 100px;'>"
    // tell me why above line works on ninja1-img, but below line will not ?????

    // document.getElementById("container").style.backgroundColor = "red";

    // document.getElementById("ninja1-img").src = "images/top1.png"; 
    // console.log("image should have changed now, exec of updatePosition"); 
    
    document.getElementById("ninja1").style.left = ninja1BorderLeft + "px";
    document.getElementById("ninja1").style.top = ninja1BorderTop + "px";

    setPersistentNinjaSpaceFormulas(); 

    if (walkSeq == 1) {
        walkSeq = 2
    } else {
        walkSeq = 1
    }
    // console.log("walkSeq: " + walkSeq)

    document.getElementById("ninja1-img").src = "images/" + walkDir + walkSeq + ".png";

    setCrossBars(); 

    if (ninja1BorderLeft <= 75 && ninja1BorderTop <= 50) {
        document.getElementById("container").style.backgroundColor = "black"; 
        document.getElementById("ninjaSpaceRight").style.backgroundColor = "red"; 
        document.getElementById("ninjaSpaceLeft").style.backgroundColor = "red"; 
        document.getElementById("ninjaSpaceTop").style.backgroundColor = "red"; 
        document.getElementById("ninjaSpaceBottom").style.backgroundColor = "red"; 
        document.getElementById("ninja1").style.backgroundColor = "red"; 
        document.getElementById("ninja1-img").style.backgroundColor = "red"; 
    } else {
        console.log("nobackgroundchange")
    }

    if (ninja1SpaceRight <= 75 && ninja1SpaceBottom <= 50) {
        document.getElementById("container").style.backgroundColor = "lightgreen"; 
        document.getElementById("ninjaSpaceRight").style.backgroundColor = "transparent"; 
        document.getElementById("ninjaSpaceLeft").style.backgroundColor = "transparent"; 
        document.getElementById("ninjaSpaceTop").style.backgroundColor = "transparent"; 
        document.getElementById("ninjaSpaceBottom").style.backgroundColor = "transparent"; 
        document.getElementById("ninja1").style.backgroundColor = "transparent"; 
        document.getElementById("ninja1-img").style.backgroundColor = "transparent"; 
    } else {
        console.log("nobackgroundchange")
    }
}

document.onkeydown = function (x) {
    arrowStrikeShotDistance = 10;

    if (x.code == "ArrowDown") { // down
        console.log("down arrow struck")
        if
            (ninja1SpaceBottom - arrowStrikeShotDistance < 0) {
            console.log("no more space: bottom side")
        }
        else {
            ninja1BorderTop = ninja1BorderTop + arrowStrikeShotDistance;
            walkDir = "down"
            console.log("walkDir: " + walkDir)
            updatePosition();
        }
    }


    else if (x.code == "ArrowUp") { // up 
        console.log("up arrow struck")
        
        if (ninja1SpaceTop - arrowStrikeShotDistance < 0) {
            console.log("no more space: top side")
        }
        else {
            ninja1BorderTop = ninja1BorderTop - arrowStrikeShotDistance;
            walkDir = "top"; 
            console.log("walkDir: " + walkDir); 
            lastKeyStroke = "ArrowUp"
            updatePosition();
        }; 

    }

    else if (x.code == "ArrowLeft") { // left 
        console.log("left arrow struck")
        if (ninja1SpaceLeft - arrowStrikeShotDistance < 0) {
            console.log("no more space: left side")
        }
        else {
            ninja1BorderLeft = ninja1BorderLeft - arrowStrikeShotDistance;
            walkDir = "left"
            console.log("walkDir: " + walkDir)
            lastKeyStroke = "ArrowLeft"
            updatePosition();
        }
    }

    else if (x.code == "ArrowRight") { // right 
        console.log("right arrow struck")
        if (ninja1SpaceRight - arrowStrikeShotDistance < 0) {
            console.log("no more space: right side")
        }
        else {
            ninja1BorderLeft = ninja1BorderLeft + arrowStrikeShotDistance;
            walkDir = "right"
            console.log("walkDir: " + walkDir)
            updatePosition();
        }
    }

    else {
        console.log("other key hit")
    }
    console.log("ninja1SpaceLeft: " + ninja1SpaceLeft);
    console.log("ninja1SpaceRight: " + ninja1SpaceRight);
    console.log("ninja1SpaceTop: " + ninja1SpaceTop);
    console.log("ninja1SpaceBottom: " + ninja1SpaceBottom);
}



