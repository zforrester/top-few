export const pages = [
  { id: "ThruNite_TN12_V6", title: "ThruNite TN12 V6" },
  {
    id: "GearLight LED Tactical Flashlight",
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

export default async function ProductPage() {
  return (
    <div>
      <p>All Products Page</p>

      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <a href={`/products/${page.id}`}>{page.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
