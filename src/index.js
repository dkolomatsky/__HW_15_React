import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const latte = {
  productImage:
    "https://s7d1.scene7.com/is/image/mcdonalds/CoffeeLatteLarge:product-header-mobile?wid=768&hei=441&dpr=off",
  productName: `Кава "Лате" класік`,
  productDetails: "295 мл/ml | 130 ккал/kcal",
  productDescription: `Лате – кавовий напій, який містить молоко. Особливістю цієї кави є те, що, на відміну від капучино, у лате молока значно більше.`,
};
const americano = {
  productImage:
    "https://s7d1.scene7.com/is/image/mcdonalds/CoffeeAmericanoLarge:product-header-desktop?wid=830&hei=456&dpr=off",
  productName: `Кава "Амерікано" класік`,
  productDetails: "230 мл/ml | 0 ккал/kcal",
  productDescription: `Американо – це еспресо з додаванням гарячої води і тому напій має аналогічні характеристики`,
};
const capuchino = {
  productImage:
    "https://s7d1.scene7.com/is/image/mcdonalds/CoffeeCapuccinoLarge:product-header-mobile?wid=768&hei=441&dpr=off",
  productName: `Кава "Капучино" класік`,
  productDetails: "245 мл/ml | 130 ккал/kcal",
  productDescription: `Капучино – це мікс еспресо та гарячого молока у рівних пропорціях. Особливістю цієї кави є смачна молочна пінка, яка утворюється завдяки поєднанню пари та молока.`,
};

// компонента отвечающая за заголовки
const ProductTitle = ({ productName, classList }) => {
  return <h2 className={classList}>{productName}</h2>;
};
// компонента отвечающая за информацию о продукте
const ProductDetails = ({ productDetails, classList }) => {
  return <h3 className={classList}>{productDetails}</h3>;
};
// компонента отвечающая за описание продукта
const ProductDescription = ({ productDescription, classList }) => {
  return <h3 className={classList}>{productDescription}</h3>;
};
// компонента отвечающая за изображение продукта
const ProductImage = ({ productImage, classList }) => {
  return (
    <img className={classList} src={productImage} alt="фото продукта"></img>
  );
};
// компонента отвечающая за обертку блока продукта
const CreateProduct = ({
  productName,
  productDetails,
  productDescription,
  productImage,
}) => {
  return (
    <main className="container">
      <section className="section">
        <div>
          <ProductImage
            productImage={productImage}
            classList="img"
          ></ProductImage>
        </div>
        <div>
          <div>
            <ProductTitle
              productName={
                productName ? productName : "назва продукта відсутня"
              }
              classList="title"
            ></ProductTitle>
          </div>
          <div>
            <ProductDetails
              productDetails={
                productDetails ? productDetails : "інфо по продукту відсутне"
              }
              classList="details"
            ></ProductDetails>
          </div>
          <div>
            <ProductDescription
              productDescription={
                productDescription
                  ? productDescription
                  : "опис продукту відсутній"
              }
              classList="description"
            ></ProductDescription>
          </div>
        </div>
      </section>
    </main>
  );
};

const DisplayProduct = () => {
  return (
    <>
      <CreateProduct
        productImage={latte.productImage}
        productName={latte.productName}
        productDetails={latte.productDetails}
        productDescription={latte.productDescription}
      ></CreateProduct>
      <CreateProduct
        productImage={americano.productImage}
        productName={americano.productName}
        productDetails={americano.productDetails}
        productDescription={americano.productDescription}
      ></CreateProduct>
      <CreateProduct
        productImage={capuchino.productImage}
        productName={capuchino.productName}
        productDetails={capuchino.productDetails}
        productDescription={capuchino.productDescription}
      ></CreateProduct>
    </>
  );
};

ReactDOM.render(
  <DisplayProduct></DisplayProduct>,
  document.querySelector("#root")
);
