const axios = require("axios");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/content/resources/find", async (request, response) => {
  const currentPage = request.body.continuation || "1";

  const options = {
    url: "https://picsum.photos/v2/list",
    params: {
      page: currentPage,
    },
  };

  const picsum = await axios.request(options);

  const images = picsum.data.map((image) => {
    return {
      type: "IMAGE",
      id: image.id,
      name: `Photo by ${image.author}`,
      url: image.download_url,
      thumbnail: {
        url: image.download_url,
      },
      contentType: "image/jpeg",
    };
  });

  const nextPage = (parseInt(currentPage, 10) + 1).toString();

  response.send({
    type: "SUCCESS",
    resources: images,
    continuation: nextPage,
  });
});

app.listen(process.env.PORT || 3000);