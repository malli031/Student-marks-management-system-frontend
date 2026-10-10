import axios from "axios";

// Change this URL if your Spring Boot server uses a different port.
const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json" }
});

export default api;