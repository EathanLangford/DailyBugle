import * as rssParser from 'react-native-rss-parser';

const url = "feeds.ign.com/ign/games-all";

export async function get() {
  let result = await fetch(url)
  .then(response => response.text())
  .then((responseData) => rssParser.parse(responseData))
  .then((rss) => {
      console.log(rss)
  })
  return result;
}