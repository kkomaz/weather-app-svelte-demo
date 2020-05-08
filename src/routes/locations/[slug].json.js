import fetch from 'isomorphic-unfetch'

export function get(req, res, next) {
  const { slug } = req.params;

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  fetch(`https://www.metaweather.com/api/location/${slug}`)
    .then(response => response.json())
    .then(data => res.end(JSON.stringify(data)));
}