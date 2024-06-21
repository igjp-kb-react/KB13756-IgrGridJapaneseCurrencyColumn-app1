import { DisplayDensity, IgrColumn, IgrGrid, IgrColumnPipeArgs } from "@infragistics/igniteui-react-grids";

const products = [
  { id: 1, name: "Apple", price: 1001.5 },
  { id: 2, name: "Banana", price: 200.75 },
  { id: 3, name: "Cherry", price: 2300.25 },
];

const formatOptions: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
formatOptions.currencyCode = "JPY";

export const App = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "24px auto" }}>
      <IgrGrid data={products} primaryKey="id" width="100%" height="300px" displayDensity={DisplayDensity.Cosy}>
        <IgrColumn field="name" header="Name" />
        <IgrColumn field="price" header="Price" dataType="currency" pipeArgs={formatOptions} />
      </IgrGrid>
    </div>
  );
};
