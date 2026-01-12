import React from "react";

const App = () => {
  const specs = {
    name: "Laptop",
    price: "70000",
    manufacturer: {
      company: "Asus",
      address: {
        city: "delhi",
        country: "india",
      },
    },
  };
  const inventoryDetails = {
    stock: 30,
    wareHouseLocation: "warehouse A",
    restockDate: "01-04-26",
  };

  function combine(specs,inventoryDetails) {
    const combined = {
      ...specs,
      ...inventoryDetails,
    };
    // console.log(combined);

    const {
      name,
      price,
      restockDate,
      stock,
      wareHouseLocation,
      manufacturer: {
        address: { city, country },
        company,
      },
    } = combined;
    return {
      name,
      price,
      restockDate,
      stock,
      wareHouseLocation,
      manufacturer: {
        address: { city, country },
        company,
      }
    }
  }
  const result = combine(specs,inventoryDetails) ;
  console.log(result.manufacturer.address.city);

  return <div>App</div>;
};

export default App;
