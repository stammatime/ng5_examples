
function runtMeter(rating) {
    if (rating <= 0) {
        return "You have reached sub-molecular (smolecular) runtness! congratulation";
    } else if (rating >= 1 && rating <= 25) {
        return "Looks like you're feeling a bit smol today!";
    } else if (rating >= 26 && rating <= 50 ) {
        return "Hm seems like a normal-size runtus.";
    } else if (rating >= 51 && rating <= 75) {
        return "You've been going to the gym! Or eating too much tuna.";
    } else if (rating >= 76 && rating <= 100) {
        return "wow him big";
    } else {
        return "Your mistake have summoned evil Hoshi and ruined everything. congratulation";
    }
}

console.log (runtMeter(5));