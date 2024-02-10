

function showContent(divNumber) {
    var content = "";

    switch (divNumber) {
        case 1:
            content = "Content for Div 1";
            break;
        case 2:
            content = "Content for Div 2";
            break;
        case 3:
            content = "Content for Div 3";
            break;
        case 4:
            content = "Content for Div 4";
            break;
        case 5:
            content = "Content for Div 5";
            break;
        default:
            content = "No content available";
    }

    var contentArea = document.getElementById("contentArea");
    contentArea.style.display = "block";
    contentArea.innerHTML = content;
}

