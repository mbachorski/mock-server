export const getSampleConfig = function () {
  return {
    filter: {
      ip: "127.0.0.1",
      method: "GET",
      path: "login",
      headers: {
        authorization: "Basic dXNlckBnbWFpbC5jb206VGFqbmVIYXNsbzEyMyM="
      }
    },
    response: {
      status: 200,
      body: ""
    }
  }
};


// basic -> user@gmail.com:TajneHaslo123#