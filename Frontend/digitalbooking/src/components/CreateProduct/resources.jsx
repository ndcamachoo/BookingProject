const Environment = (isProduction = false) => {
    let proxyCloud = "https://cors-everywhere-me.herokuapp.com/";
    let backendCloud =
      "G4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/";
    let backendLocal = "http://localhost:5000/";
  
    const cms = {
      proxy: isProduction ? proxyCloud : "",
      baseurl: isProduction ? backendCloud : backendLocal,
      url: isProduction ? proxyCloud + backendCloud : backendLocal,
      users: "users",
      categories: "category",
      products: "products",
      cities: "city",
      fileSystem: "files",
      assets: "assets",
      reservations: "reservations",
      stats: "stats"
    };
  
    const configuration = {
      proxy: cms.proxy,
      baseurl: cms.baseurl,
      url: cms.url,
      settings: function (method, body) {
        return {
          method: method,
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          },
          redirect: "follow",
          body: body
        };
      },
      users: {
        base: cms.url + cms.users,
        findAll: cms.url + cms.users,
        findById: function (id) {
          return cms.url + cms.users + "/" + id;
        },
        save: cms.url + cms.users + "/save",
        authenticate: cms.url + cms.users + "/authenticate",
        logout: cms.url + cms.users + "/logout",
        update: cms.url + cms.users + "/update",
        delete: function (id) {
          return cms.url + cms.users + "/delete/" + id;
        }
      },
      categories: {
        base: cms.url + cms.categories,
        findAll: cms.url + cms.categories,
        findById: function (id) {
          return cms.url + cms.categories + "/" + id;
        },
        save: cms.url + cms.categories + "/save",
        update: cms.url + cms.categories + "/update",
        delete: function (id) {
          return cms.url + cms.categories + "/delete/" + id;
        }
      },
      products: {
        base: cms.url + cms.products,
        findAll: cms.url + cms.products,
        findById: function (id) {
          return cms.url + cms.products + "/" + id;
        },
        save: cms.url + cms.products + "/save",
        update: cms.url + cms.products + "/update",
        delete: function (id) {
          return cms.url + cms.products + "/delete/" + id;
        },
        listLocations: cms.url + cms.products + "/locations",
        findByParams: function (city) {
          return cms.url + cms.products + "/search?city=" + city;
        }
      },
      cities: {
        base: cms.url + cms.cities,
        findAll: cms.url + cms.cities,
        findById: function (id) {
          return cms.url + cms.cities + "/" + id;
        },
        save: cms.url + cms.cities + "/save",
        update: cms.url + cms.cities + "/update",
        delete: function (id) {
          return cms.url + cms.cities + "/delete/" + id;
        }
      },
      fileSystem: {
        upload: cms.url + cms.fileSystem + "/upload",
        download: function (name) {
          return cms.url + cms.fileSystem + "/download/" + name;
        }
      },
      assets: {
        base: cms.url + cms.assets,
        findAll: cms.url + cms.assets,
        findById: function (id) {
          return cms.url + cms.assets + "/" + id;
        },
        findByName: function (name) {
          return cms.url + cms.assets + "/search/" + name;
        },
        delete: function (id) {
          return cms.url + cms.assets + "/delete/" + id;
        }
      },
      reservations: {
        base: cms.url + cms.reservations,
        findAll: cms.url + cms.reservations,
        findById: function (id) {
          return cms.url + cms.reservations + "/" + id;
        },
        save: cms.url + cms.reservations + "/save",
        update: cms.url + cms.reservations + "/update",
        delete: function (id) {
          return cms.url + cms.reservations + "/delete/" + id;
        },
        findByParams: function (city, startdate, enddate) {
          return (
            cms.url +
            cms.reservations +
            "/search/" +
            city +
            "?startdate=" +
            startdate +
            "&enddate=" +
            enddate
          );
        },
        findByProductDates: function (id) {
          return cms.url + cms.reservations + "/product/dates/" + id;
        },
        findByUserId: function (id) {
          return cms.url + cms.reservations + "/users/" + id;
        }
      },
      stats: {
        base: cms.url + cms.stats,
        findAll: cms.url + cms.stats,
        findById: function (id) {
          return cms.url + cms.stats + "/" + id;
        },
        save: cms.url + cms.stats + "/save",
        update: cms.url + cms.stats + "/update",
        delete: function (id) {
          return cms.url + cms.stats + "/delete/" + id;
        },
        findByProductId: function (id) {
          return cms.url + cms.stats + "/products/" + id;
        },
        findByUserId: function (id) {
          return cms.url + cms.stats + "/users/" + id;
        }
      }
    };
  
    return configuration;
  };
  
  const result = Environment(true);
  
  export default result;
  