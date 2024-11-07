import {
  IgrColumn,
  IgrGrid,
  IgrGridEditEventArgs,
} from "@infragistics/igniteui-react-grids";
import { sampleData } from "./appData";
import "./app.css";

export const App = () => {
  function oncellEdit(s: IgrGrid, args: IgrGridEditEventArgs): void {
    // クリックされた要素がグリッドのセル要素かどうか判定
    const isCellClick =
      (args.detail.nativeElement as any).event.target.tagName ===
      "IGX-GRID-CELL";

    if (isCellClick) {
      // セルをクリックした場合、編集のキャンセル
      args.detail.cancel = true;
      console.log("セル編集のコミットがキャンセルされました");
    } else {
      // 他の要素をクリックした場合、デフォルトの処理
      console.log("セル編集のコミットが実行されます");
    }
  }

  return (
    <div style={{ maxWidth: "700px", maxHeight: "900px", margin: "24px auto" }}>
      <IgrGrid
        data={sampleData}
        primaryKey="id"
        autoGenerate="false"
        width="100%"
        rowEditable
        cellEdit={oncellEdit} // セル編集イベントが発生した際にoncellEdit関数を呼び出す
      >
        <IgrColumn field="id" hidden="true" />
        <IgrColumn field="name" header="氏名" editable="true" />
        <IgrColumn field="country" header="国名" editable="true" />
        <IgrColumn
          field="age"
          header="年齢"
          editable="true"
          dataType="number"
        />
        <IgrColumn
          field="hireDate"
          header="入社日"
          editable="true"
          dataType="date"
        />
      </IgrGrid>
    </div>
  );
};
