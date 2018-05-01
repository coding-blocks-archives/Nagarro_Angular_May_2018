/**
 * Created by aayusharora on 5/1/18.
 */
interface pasta {
    sauce: string;
    shape: string;
}

interface quality {
    taste: string,
    price: number
}

let redPasta: pasta;
let whitePasta: pasta;

function typePasta(p: pasta): quality {
    pasta.sauce = p.sauce;
    pasta.shape = p.shape;
    return {taste: "salty", price: 400}
}
let pasta = {
    sauce: "white",
    shape: "zig-zag"

};

typePasta(pasta);