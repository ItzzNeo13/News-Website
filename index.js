console.log("Js file linked successfully!");

// declaring sources
let country = 'in';
let apiKey = 'c2bd514ef3e744fab0705b9cce1e8af7'

// Grabbing the news card
let newsAccordian = document.getElementById("newsAccordian");

// XML req
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://newsdata.io/api/1/news?apikey=pub_1173582129b27120008b551d4353e18c1c069&q=recent ",
  true
);


// Thing to do after the response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let results = json.results;
    // console.log(results);

    // bringing the title and the content

    let newsHtml = "";
    results.forEach(function(elements, index0) {
      // console.log(results[news]);
      // console.log(elements, index0);

      // Template literal for populating the cards      
      let news = `
                <div class="card">
                  <div class="card-header" id="heading${index0}">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse${index0}"
                        aria-expanded="true"
                        aria-controls="collapse${index0}"
                      >${elements["title"]}
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapse${index0}"
                    class="collapse"
                    aria-labelledby="heading${index0}"
                    data-parent="#newsAccordian"
                  >
                    <div class="card-body">
                      ${elements["content"]};
                    </div>
                  </div>
                </div>`;


      newsHtml += news;
    });
    newsAccordian.innerHTML = newsHtml;
    // console.log(json);
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
