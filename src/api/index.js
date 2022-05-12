import axios from "axios";

const instance = axios.create({
  baseURL: "https://cleveradssolutions.com/",
});

axios.interceptors.request.use(
  (config) => {
    config.headers[
      "Authorization"
    ] = `Bearer eyJpdiI6IjB5anJKWEdaWjFuaitjeGpqOUJPMVE9PSIsInZhbHVlIjoiNUNhclFBVFhqd2hOU2s5eUcyRk1JTkNVTHJHb0JTbHJVejIyc2ZKWXRrb1ZqOVNpVXNJQlhyazFLekJ6UzdxN0tmZzVCY1cyMGtMK2VvNGtmVSszeE5aeVhuN29GU1F4ck1sVFR0RzJJWmF1TmxHQUthOTZSRXNoN3dYU0krTElcLzZ6ajYxXC9QaXVGM1wvb3pReFQrOTdFekR4TG53UHM4ZE0wUEN5c0hIRGRnV1NWYjBhSlp0VkYyWjlKOVltVEw4IiwibWFjIjoiZjZjZmMwNzFiNjEwMGEyY2ZjNGMwMTBiMWM4MDJkM2IwZDE3NjZiMjY2YjNiMTkxMWQ0MzQ5MWRlMWZiMmQxMyJ9%3D%3D`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
