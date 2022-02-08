
// below is great, Don't change anything. 
// define setStartPositionNinja1
function setStartPositionNinja1()  {
    containerHeight_init = document.getElementById('container').style.height; 
    containerHeight = Number(containerHeight_init.substring(0, containerHeight_init.indexOf("px"))); 
    containerWidth_init = document.getElementById('container').style.width; 
    containerWidth = Number(containerWidth_init.substring(0, containerWidth_init.indexOf("px")));     
    ninja1Width_init = document.getElementById("ninja1").style.width; 
    ninja1Width = Number(ninja1Width_init.substring(0, ninja1Width_init.indexOf("px"))); 
    
    // // below is a workable 1-line substitute for the 2-line code immed above, but below is damn hard to read/debug.  so, leaving above WEA (well enough alone)
    // ninja1Width = Number((document.getElementById('ninja1').style.width).substring(0, (document.getElementById('ninja1').style.width).indexOf("px"))); 

    ninja1BorderLeft = containerWidth /2 - ninja1Width / 2; 
    ninja1SpaceLeft = ninja1BorderLeft 
    ninja1BorderRight = ninja1BorderLeft + ninja1Width ; 
    ninja1SpaceRight = containerWidth - ninja1BorderRight 

    ninja1BorderTop = containerHeight /2 - ninja1Width / 2; 
    ninja1SpaceTop = ninja1BorderTop 
    ninja1BorderBottom = ninja1BorderTop + ninja1Width ; 
    ninja1SpaceBottom = containerHeight - ninja1BorderBottom 
    
    console.log("ninja1Width: " + ninja1Width); 
    console.log("containerWidth: " + containerWidth); 
    console.log("ninja1BorderLeft: " + ninja1BorderLeft); 
    console.log("ninja1BorderRight: " + ninja1BorderRight); 
    console.log("ninja1SpaceLeft: " + ninja1SpaceLeft); 
    console.log("ninja1SpaceRight: " + ninja1SpaceRight); 

    console.log("containerHeight: " + containerHeight); 
    console.log("ninja1BorderTop: " + ninja1BorderTop); 
    console.log("ninja1BorderBottom: " + ninja1BorderBottom); 
    console.log("ninja1SpaceTop: " + ninja1SpaceTop); 
    console.log("ninja1SpaceBottom: " + ninja1SpaceBottom); 

    document.getElementById("ninja1").style.left = ninja1BorderLeft + "px"; 
    document.getElementById("ninja1").style.top = ninja1BorderTop + "px"; 

    NewImage = "url(images/top1.png)"; 
    lastVertImageType = 1; 
    // lastHorizImageType = 1; 
}

// execute setStartPositionNinja1 upon page load
setStartPositionNinja1(); 

// update variables and write back to HTML, based on arrow key entry
function updatePosition() {
    // trying below
    // document.getElementById("ninja1").style.removeProperty("background-image"); 
    document.getElementById("ninja1").style.backgroundimage = NewImage; 
    console.log("image should have changed now, exec of updatePosition"); 
    
    
    document.getElementById("ninja1").style.left = ninja1BorderLeft + "px"; 
    ninja1SpaceLeft = ninja1BorderLeft; 
    ninja1SpaceRight = containerWidth - ninja1BorderLeft - ninja1Width; 
    document.getElementById("ninja1").style.top = ninja1BorderTop + "px"; 
    ninja1SpaceTop = ninja1BorderTop; 
    ninja1SpaceBottom = containerHeight - ninja1BorderTop - ninja1Width; 


        // if (lastVertImageType == 1) 
        // {
        // lastVertImageType = 2; 
        // console.log("lastVertImageType: " + lastVertImageType); 
        // document.getElementById('ninja1').style.backgroundimage = "url('images/down2.png')"; 
        //                                         // background-image: url('images/down1.png');      
        // } 
        // else 
        // {
        // lastVertImageType = 1; 
        // console.log("lastVertImageType: " + lastVertImageType); 
        // document.getElementById('ninja1').style.backgroundimage = "url('images/down1.png')"; 
        // }
    // document.getElementById('ninja1').style.backgroundImage = "url('images/down+lastVertImageType+.png')"; 
}

document.onkeydown = function(x) 
{
arrowStrikeShotDistance = 10; 

    if(x.code == "ArrowDown") 
    { // down
        console.log ("down arrow struck")
        if 
            (ninja1SpaceBottom - arrowStrikeShotDistance < 0) 
            {
            console.log("no more space: bottom side")
            } 
        else 
            {    
                ninja1BorderTop = ninja1BorderTop + arrowStrikeShotDistance; 
                // ninja1SpaceLeft = ninja1BorderLeft; 
                // ninja1SpaceRight = containerWidth - ninja1BorderLeft - ninja1Width; 
                updatePosition();     

                // if (lastVertImageType = 2) 
                //     {
                //     lastVertImageType = 1; 
                //     console.log("lastVertImageType: " + lastVertImageType); 
                //     // document.getElementById('ninja1').style.backgroundimage = "url('images/down2.png')"; 
                //     } 
                // else 
                //     {
                //     lastVertImageType = 2; 
                //     console.log("lastVertImageType: " + lastVertImageType); 
                //     // document.getElementById('ninja1').style.backgroundimage = "url('images/down1.png')"; 
                //     }
            }
    }

    else if(x.code == "ArrowLeft") { // left
        console.log ("left arrow struck")
        if (ninja1SpaceLeft - arrowStrikeShotDistance < 0) {
            console.log("no more space: leftside")
        } else {
            ninja1BorderLeft = ninja1BorderLeft - arrowStrikeShotDistance; 
            // ninja1SpaceLeft = ninja1BorderLeft; 
            // ninja1SpaceRight = containerWidth - ninja1BorderLeft - ninja1Width; 
            updatePosition();     
        }
    }


    else if(x.code == "ArrowRight") { // right
        console.log ("right arrow struck")
        if (ninja1SpaceRight - arrowStrikeShotDistance < 0) {
            console.log("no more space: right side")
        } else {
            ninja1BorderLeft = ninja1BorderLeft + arrowStrikeShotDistance; 
            // ninja1SpaceLeft = ninja1BorderLeft; 
            // ninja1SpaceRight = containerWidth - ninja1BorderLeft - ninja1Width; 
            updatePosition();     
        }
    }

    else if(x.code == "ArrowUp") { // up
        console.log ("up arrow struck")
        if (ninja1SpaceTop - arrowStrikeShotDistance < 0) {
            console.log("no more space: top side")
        } else {
            ninja1BorderTop = ninja1BorderTop - arrowStrikeShotDistance; 
            // ninja1SpaceLeft = ninja1BorderLeft; 
            // ninja1SpaceRight = containerWidth - ninja1BorderLeft - ninja1Width; 
            updatePosition();     
        }
    }

    else {
        console.log ("other key hit")
    }
    console.log("ninja1SpaceLeft: " + ninja1SpaceLeft); 
    console.log("ninja1SpaceRight: " + ninja1SpaceRight); 
    console.log("ninja1SpaceTop: " + ninja1SpaceTop); 
    console.log("ninja1SpaceBottom: " + ninja1SpaceBottom); 
}





// // somehting new... 

// function tryingCssGet() {
//     x = document.styleSheets; 
//     console.log(x)
// }

// tryingCssGet(); 

// //-------------

// function GetNinja1Borders() {
//     x = document.getElementById('ninja1').style.left; 
//     pixelCount = x.substring(0, 3); 
//     // console.log (pixelCount)
//     Ninja1BorderLeft = pixelCount; 
//     console.log ("Ninja1BorderLeft: " + Ninja1BorderLeft); 
// }

// GetNinja1BorderLeft() ; 

// function GetNinja1Width() {
//     x = document.getElementById('ninja1').style.width; 
//     pixelCount = x.substring(0, 3); 
//     // console.log (pixelCount)
//     Ninja1Width = pixelCount; 
//     console.log ("Ninja1Width: " + Ninja1Width); 
// }

// GetNinja1Width(); 

// function GetNinja1BorderRight() {
//     x = document.getElementById('ninja1').style.left; 
//     pixelCount = x.substring(0, 3); 
//     // console.log (pixelCount)
//     Ninja1BorderLeft = pixelCount; 
//     console.log ("Ninja1BorderLeft: " + Ninja1BorderLeft); 
// }

// GetNinja1BorderLeft() ; 


