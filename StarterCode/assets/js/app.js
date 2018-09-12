//Load Data
d3.csv("/../data/data.csv", function (error, healthData) {
    if (error) {return console.warn(error)};

    //Cast into numbers, and then log poverty data and obesity data
    healthData.forEach(function (d) {
        d.poverty = +d.poverty;
        d.obesity = +d.obesity;
    });

    var povertyData = healthData.map(d => d.poverty);
    var obesityData = healthData.map(d => d.obesity);
    var states = healthData.map(d => d.abbr);
    console.log(states);



    //Draw Scatter Plot
    var trace1 = {
        x: povertyData,
        y: obesityData,
        mode: 'markers+text',
        type: 'scatter',
        name: 'states',
        text: states,
        textposition: 'middle center',
        marker: {
            size: 25,
            opacity: 0.5
        }
    };

    var plotData = [trace1];

    var layout = {
        xaxis: {
            range: [0, Math.max(povertyData)],
            title: 'Poverty Rate by %'
        },
        yaxis: {
            range: [0, Math.max(obesityData)],
            title: 'Obesity Rate by %'
        },
        title: 'Poverty vs Obesity'
    };

    Plotly.newPlot('scatter', plotData, layout);
});