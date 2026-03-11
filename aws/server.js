const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {

        fs.readFile("index.html", (err, data) => {

            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error loading HTML file");
                return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    else if (req.url === "/api" && req.method === "GET") {

        const student = {
            name: "Aws Khader",
            studentID: "12324525"
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(student));
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});