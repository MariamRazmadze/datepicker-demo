import { PreviwPanel } from "./PreviewPanel";
import { SettingsPanel } from "./SettingsPanel";

export default function App() {
  return (
    <div style={{ display: "flex", gap: 48, padding: 32 }}>
      <PreviwPanel />
      <SettingsPanel />
    </div>
  );
}
