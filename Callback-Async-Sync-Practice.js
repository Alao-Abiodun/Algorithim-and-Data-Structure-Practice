const axios = require("axios");

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Exercise 1
// const fetchData = async () => {
//   const countries = await axios.get(countriesAPI);
//   //   filter name, capital, languages, population and areas from the countries data;
//   const countriesData = countries.data.map((country) => {
//     return {
//       name: country.name,
//       capital: country.capital,
//       languages: country.languages,
//       population: country.population,
//       area: country.area,
//     };
//   });
//   console.log(countriesData);
// };

// fetchData();

// Exercise 2
// print cat name into catNames variable from catsAPI
// const fetchCats = async () => {
//   const cats = await axios.get(catsAPI);
//   console.log(cats.data);
// //   find average weight of cat in metric units
//     const catsData = cats.data.map((cat) => {
//         return {
//             name: cat.name,
//             weight: cat.weight.metric,
//         };
//     }
//     );
//     console.log(catsData);
//   //   const catNames = cats.data.map((cat) => cat.name);
//   //   console.log(catNames);
// };

// fetchCats();

// Exercise 3
// const fetchCats = async () => {
//   const cats = await axios.get(catsAPI);
//   // console.log(cats.data);
//   //   find average weight of cat in metric units
//   const catsData = cats.data.map((cat) => {
//     return {
//       name: cat.name,
//       weight: cat.weight.metric,
//     };
//   });
//   console.log(catsData);
// };

// fetchCats();

// Exercise 4
// find out the 10 largest countries in the world

// const fetchTenLargestCountries = async () => {
//   // find 10 largest countries from the countriesAPI
//   const countries = await axios.get(countriesAPI);
//   //   filter 10 largest countries from the countriesAPI
//   const countriesData = countries.data
//     .sort((a, b) => {
//       return b.area - a.area;
//     })
//     .map(({ name, area, population }) => {
//       return { name, area, population };
//     })
//     .slice(0, 10);
//   //   select only name from the countiesData
//   //   const countriesNames = countriesData.map((country) => {
//   //     return country.name;
//   //   });
//   console.log(countriesData);
// };

// fetchTenLargestCountries();

//Exercie 5

//count total number of lanugages in the world used as officials

// const fetchTotalNumberLanugagesInWorldUsedAsOfficials = async () => {
//   //   find total number of lanugages in the world used as officials
//   const countries = await axios.get(countriesAPI);
//   //   filter total number of lanugages in the world used as officials
//   const countriesData = countries.data.map((country) => {
//     return {
//       name: country.name,
//       languages: country.languages,
//     };
//   });

//   //   select only languages from the countriesData
//   const languages = countriesData.map((country) => {
//     return country.languages;
//   });
//   //   //   count total number of lanugages in the world used as officials
//   const languagesCount = languages.reduce((acc, curr) => {
//     return acc + curr.length;
//   }, 0);
//   console.log(languagesCount);
// };

// fetchTotalNumberLanugagesInWorldUsedAsOfficials();

// const stringChallenge = (str) => {
//   const alpahbet = "abcdefghijklmnopqrstuvwxyz";

//   const strAlphabets = alpahbet.split("");

//   console.log(strAlphabets);

//   const strArr = str.split("");

//   let result = "";

//   // loop through strArr
//   for (let i = 0; i < strArray.length; i++) {
//     if (strArray[i].includes(strAlphabets)) {
//       result += strstrArray[i];
//     }
//   }

//   console.log(result);
// };

// console.log(stringChallenge("hello 45"));

// const wallets = [
//   "usdt-trx",
//   "usdt-bep",
//   "busd-bep",
//   "usdc-bep",
//   "ethereum",
//   "bitcoin",
// ];

// const cryptos = [
//   {
//     id: 2,
//     name: "Bitcoin",
//     img: "Bitcoin",
//     classname: "accounts_img accounts_img-2",
//     slug: "bitcoin",
//     rate: "BTC",
//     symbol: "BTC",
//     type: "BTC",
//   },
//   {
//     id: 3,
//     name: "Ethereum",
//     img: "Ethereum",
//     classname: "accounts_img accounts_img-3",
//     slug: "ethereum",
//     rate: "ETH",
//     symbol: "ETH",
//     type: "ETH",
//   },
//   // {
//   //   id: 4,
//   //   name: 'USDT (ERC20)',
//   //   img: Tether,
//   //   classname: 'accounts_img accounts_img-4',
//   //   slug: 'usdt-eth',
//   //   rate: 'USDT',
//   //   symbol: 'USDT_ETH',
//   //   type: 'ETH-USDT-ERC20',
//   // },
//   {
//     id: 5,
//     name: "USDT (TRC20)",
//     img: "Tether",
//     classname: "accounts_img accounts_img-4",
//     slug: "usdt-trx",
//     rate: "USDT",
//     symbol: "USDT_TRC20",
//     type: "USDT_TRX",
//   },
//   {
//     id: 6,
//     name: "USDT (BEP20)",
//     img: "Tether",
//     classname: "accounts_img accounts_img-4",
//     slug: "usdt-bep",
//     rate: "USDT",
//     symbol: "USDT_BEP20",
//     type: "BSC-USDT-BEP20",
//   },
//   {
//     id: 7,
//     name: "BUSD (BEP20)",
//     img: "Tether",
//     classname: "accounts_img accounts_img-4",
//     slug: "busd-bep",
//     rate: "BUSD",
//     symbol: "BUSD_BEP20",
//     type: "BSC-BUSD",
//   },
//   {
//     id: 8,
//     name: "USDC (BEP20)",
//     img: "Tether",
//     classname: "accounts_img accounts_img-4",
//     slug: "usdc-bep",
//     rate: "USDC",
//     symbol: "USDC_BEP20",
//     type: "BSC-USDC",
//   },
// ];

// // filter element in crypto array that matches the element in wallets array
// const filteredCryptos = cryptos.filter((crypto) => {
//   return wallets.includes(crypto.slug);
// });

// // console.log(filteredCryptos);

// // const coinObj = {};

// // loop through filteredCryptos and add as array of object in the format [ {name, slug, symbol}] using map function
// const activatedWallets = filteredCryptos.map((crypto) => {
//   return {
//     name: crypto.name,
//     slug: crypto.slug,
//     symbol: crypto.symbol,
//   };
// });

// console.log(activatedWallets);

// console.log(filteredCryptos);

// for (let i = 0; i < filteredCryptos.length; i++) {
//   coinObj[filteredCryptos[i].slug] = {
//     name: filteredCryptos[i].name,
//     symbol: filteredCryptos[i].symbol,
//   };
// }

// console.log(coinObj);

// console.log(activatedWallets);

// for (let i = 0; i < filteredCryptos.length; i++) {
//   coinObj[filteredCryptos[i].slug] = filteredCryptos[i];
// }

// const activatedWallets =

// console.log(filteredCryptos);
