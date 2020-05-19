


async function palindromechecker(input) {

    let mi_l = input.toLowerCase();
    let mi = mi_l.replace(/[^A-Za-z0-9]/g, '');
    let len = mi.length;
    for (let i = 0; i < len / 2; i++) {
        if (mi[i] !== mi[len - 1 - i]) {
            return false;
        }
    }
    return true;
}


module.exports = {
    palindromechecker
}