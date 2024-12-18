// export async function API() {
//   try {
//     const data = await fetch('https://economia.awesomeapi.com.br/json/all');
//     const response = await data.json();
//     return response;
//   } catch (error: any) {
//     console.log(error.message);
//   }
// }

export const API = () => {
  return (
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
  );
};
