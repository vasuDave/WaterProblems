//const data = [0, 4, 0, 0, 0, 6, 0, 6, 4, 0];
function generate_table() {
    var textData = document.getElementById('inputValue').value;
    if (textData == "") {
        alert("Enter Valid number")
    } else {
        const data = [...textData];
        var body = document.getElementsByTagName("body")[0];
        var row;
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
        const maxFromLeft = new Array(data.length).fill(0)
        const maxFromRight = new Array(data.length).fill(0)

        let max = 0
        for (let i = 0; i < data.length; i++) {
            max = Math.max(data[i], max)
            maxFromLeft[i] = max
        }
        max = 0
        for (let i = data.length - 1; i > -1; i--) {
            max = Math.max(data[i], max)
            maxFromRight[i] = max
        }
        let maxWater = []
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            const boundary = Math.min(maxFromLeft[i], maxFromRight[i])
            maxWater.push(boundary - data[i])
            sum += boundary - data[i];
        }
        console.log(maxWater);
        for (var i = 0; i < 7; i++) {
            row = document.createElement("tr");
            for (var j = 0; j < 10; j++) {
                var cell = document.createElement("td");
                if (maxWater[j] != 0) {
                    cell.className = "fill-water";
                    row.className = "no-water"
                }
                if (maxWater[i] == 0 && maxWater[j] != 0 && i == 0) {
                    cell.className = "no-water"
                }
                const num = 3;
                if (i < num) {
                    cell.className = "no-water"
                }
                if (j == 6 && i < 3) {
                    cell.className = "fill-water"
                    if (i == 0) {
                        cell.className = "no-water"
                    }
                }
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        tbl.setAttribute("border", "2");
        tbl.className = "table-container"
        document.getElementsByTagName("p")[0].innerHTML = sum;
    }
}

