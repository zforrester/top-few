export const products = [
  {
    id: "ThruNite_TN12_V6",
    title: "ThruNite TN12 V6",
    heroImage:
      "https://cdn11.bigcommerce.com/s-9sfgjx/images/stencil/1280x1280/products/593/6146/1-1__34118.1727338243.jpg?c=2",
  },
  {
    id: "GearLight_LED_Tactical_Flashlight",
    title: "GearLight LED Tactical Flashlight",
  },
  {
    id: "Victoper_LED_Flashlight",
    title: "Victoper LED Flashlight",
  },
  {
    id: "ENERGIZER_LED_Flashlight_Vision_PRO",
    title: "ENERGIZER LED Flashlight Vision PRO",
  },
  {
    id: "OLIGHT_Arkfeld_Pro_Rechargeable_EDC_Flashlight",
    title: "OLIGHT Arkfeld Pro Rechargeable EDC Flashlight",
  },
];

export default async function Productproduct() {
  return (
    <div>
      <p>All Products Page</p>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>{product.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
