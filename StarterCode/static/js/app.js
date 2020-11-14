//reading in samples.json

// var ynames = names
// var xotu = otu

// d3.json("../StarterCode/samples.json", function(data){
//     console.log(data);
// });



var names = [];
// var id = [];
// var ethnicity = [];
// var gender = [];
// var age = [];
// var location = [];
// var bbtype = [];
// var wfreq = [];



d3.json("samples.json").then((data) => {
    console.log(data);

    data.names.forEach(function(
        
    ))

    var dropdownMenu = d3.select("#selDataset");

     //Create the Traces
    var trace1 = {
      x: data.id,
      y: data.otu_ids,
      type: "bar",
      name: "Top 10 OTUs",
    //   boxpoints: "all"
    };
  
    // Create the data array for the plot
    var data = [trace1];
  
    // Define the plot layout
    var layout = {
      title: "Prevalence of OTUs in bellybutton's",
      xaxis: { title: "Sample Values" },
      yaxis: { title: "OTU ID's" }
    };
  
    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("bar", data, layout);
  });