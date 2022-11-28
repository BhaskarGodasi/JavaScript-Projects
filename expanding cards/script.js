const Api_url =
"https://api.apilayer.com/currency_data/change?start_date=start_date&end_date=end_date"
show(Api_url);
async function show(url) {
  const api = await fetch(url);
  const data = await api.json();

  console.log(data.result);
}
