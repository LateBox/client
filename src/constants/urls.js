const env = "dev"; // dev or prod
const serverIP = "149.28.236.92";
const localIP = "10.200.40.42"; // only modify this IP
var ip = "localhost";

if (env == "dev") {
    ip = localIP;
} else if (env == "prod") {
    ip = serverIP;
}

const currentUrl = "http://" + ip + ":8080/";

export default currentUrl;