
let url = "https://pokeapi.co/api/v2/pokemon?limit=800";
export const getData = async () => {
        return await fetch(url).then(
                (result) => result.json()
        );
};
// console.log(getData(url));


