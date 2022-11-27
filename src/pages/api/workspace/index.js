import slugify from 'slugify';

export default async function handler(req, res) {
 
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  
});

var requestOptions = {
  
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

const response = await fetch("https://hook.us1.make.com/3ybpvegges9j7868imx3wvc8tqc71buy", requestOptions)
  const { name } = req.body;
    let slug = slugify(name.toLowerCase());
     res.status(200).json({ data: { name, slug } });
     
    console.log(data)
}
