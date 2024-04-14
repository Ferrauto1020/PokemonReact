export type Pokemon = {
    name: string;
    url: string;
};
type NameAttribute = {
    name: string;
};
export type PokemonDetail = {
    abilities: [
        {
            ability: NameAttribute;
        }
    ];
    moves: [
        {
            move: NameAttribute;
        }
    ];
    sprites: {
        front_default: string;
        front_shiny: string;
    };
    name: string;
    types: [
        {
            type: NameAttribute;
        }
    ];
};
