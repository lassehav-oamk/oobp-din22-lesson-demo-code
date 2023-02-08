interface Product {
  name: string;
  price: number;
  category: string;
  description: string;
  manufacturer: string;
}

const products: Product[] = [
  {
    name: "iPhone 11",
    price: 799,
    category: "Smartphone",
    description: "Apple iPhone 11",
    manufacturer: "Apple",
  },
  {
    name: "Nokia 3310",
    price: 1799,
    category: "Smartphone",
    description: "The best phone ever",
    manufacturer: "Nokia",
  },
  {
    name: "iPhone 11 Pro Max",
    price: 1099,
    category: "Smartphone",
    description: "Apple iPhone 11 Pro Max",
    manufacturer: "Apple",
  },
  {
    name: "Samsung Galaxy S20",
    price: 799,
    category: "Smartphone",
    description: "Samsung Galaxy S20",
    manufacturer: "Samsung",
  },
  {
    name: "Sony Alpha 555",
    price: 899,
    category: "Smartphone",
    description: "Sony phone with great camera",
    manufacturer: "Sony",
  },
  {
    name: "Huawei TisDat",
    price: 1099,
    category: "Smartphone",
    description: "Some Huawei phone",
    manufacturer: "Huawei",
  },
];

// Filter the products and return all products which are from manufacturer Nokia
const nokiaProducts = products.filter(
  (product) => product.manufacturer == "Nokia"
);
//console.log(nokiaProducts);

function getManufacturerProducts(nameOfManufacturer: string): Product[] {
  return products.filter(
    (product) => product.manufacturer == nameOfManufacturer
  );
}
//console.log(getManufacturerProducts("Apple"));

// Write a function which can be used to search for products by manufacturer
// and the function will return an array of HTML as a string in the following format:
// <div class="product">{product.name}</div>
// If we are searching for Apple the result should be an array of following HTML strings:
// <div class="product">iPhone 11</div>
// <div class="product">iPhone 11 Pro Max</div>
function getManufacturerProductsAsHtml(
  manufacturerName: string,
  products: Product[]
) {
  /*
  const mfgProducts = products.filter(
    (product) => product.manufacturer == manufacturerName
  );
  console.log(mfgProducts);

  const htmlStringArray = mfgProducts.map(
    (product) => "<div class='product'>" + product.name + "</div>"
  );
  return htmlStringArray;*/
  return products
    .filter((p) => p.manufacturer == manufacturerName)
    .map((p) => "<div class='product'>" + p.name + "</div>");
}

console.log(getManufacturerProductsAsHtml("Apple", products));
