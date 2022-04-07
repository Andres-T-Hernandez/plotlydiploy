function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();
  buildMetadata(940);

  function optionChanged(newSample) {
    //console.log(newSample);
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");

      PANEL.html("");
      //PANEL.append("h6").text(result.location);
      PANEL.append("h6").text(Object.entries(result)[0][0] + ": " + Object.entries(result)[0][1]);
      PANEL.append("h6").text(Object.entries(result)[1][0] + ": " + Object.entries(result)[1][1]);
      PANEL.append("h6").text(Object.entries(result)[2][0] + ": " + Object.entries(result)[2][1]);
      PANEL.append("h6").text(Object.entries(result)[3][0] + ": " + Object.entries(result)[3][1]);
      PANEL.append("h6").text(Object.entries(result)[4][0] + ": " + Object.entries(result)[4][1]);
      PANEL.append("h6").text(Object.entries(result)[5][0] + ": " + Object.entries(result)[5][1]);
      PANEL.append("h6").text(Object.entries(result)[6][0] + ": " + Object.entries(result)[6][1]);

      //console.log(resultArray)
      //console.log(result)
      //console.log(Object.entries(result)[0][0])
    });
  }