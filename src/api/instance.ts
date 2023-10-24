import axios from "axios";

export const instanceForJSON = axios.create({
  baseURL: "http://121.54.167.132:8888/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const instanceForMultipart = axios.create({
  baseURL: "http://121.54.167.132:8888/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
