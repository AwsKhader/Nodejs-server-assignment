const http = require("http");

http.get("http://localhost:3000/api", (res) => {

    let data = "";

    res.on("data", (chunk) => {
        data += chunk;
    });

    res.on("end", () => {
        try {

            const jsonData = JSON.parse(data);

            console.log("Name:", jsonData.name);
            console.log("Student ID:", jsonData.studentID);

        } catch (error) {

            console.log("Error parsing JSON:", error.message);

        }
    });

}).on("error", (err) => {

    console.log("Request Error:", err.message);

});