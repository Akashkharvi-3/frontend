let text
    switch (new Date().getDay()) {
        case 1:
            text="friday";
            break;
    
            case 0:
                text="monday";
                break;
        default:
            text="othrday";
    }
console.log(text)