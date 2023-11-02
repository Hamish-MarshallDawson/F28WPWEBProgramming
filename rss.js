const getRssFeed = async () => {
  const prom = await fetch(
    "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"
  );
  let text = await prom.text();

  console.log(text.substring(0, 100));

  let parser = new DOMParser();
  let xmlDoc = parser.parseFromString(text, "text/xml");

  console.log(xmlDoc);

  const items = xmlDoc.querySelectorAll("item");
  console.log("items:", items);

  items.forEach((el) => {
    let title = el.querySelector("title").textContent;
    let img = el.getElementsByTagNameNS(
      "https://static01.nyt.com/images/",
      "content"
    )[0];
    let description = el.querySelector("description").textContent;
    let guid = el.querySelector("guid").textContent;

    const imgUrl = img ? img.Attribute(URL) : null;

    console.log("title:", title);
    console.log("image:", img);
    console.log("description:", description);
    console.log("guid:", guid);

    let div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
    `;
    if (guid) div.innerHTML += `<a href='${guid}'>LINK</a>`;
  });


  if(img ){

    div.style.backgroundImage = url(${img});

  }

};

getRssFeed();
