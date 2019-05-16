const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=40bf1b7b4dcc4c3a88d790c59417d852";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
