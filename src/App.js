import MyDisclosure from "./components/HeadlessUI/Disclosure";
import MyDropdown from "./components/HeadlessUI/Dropdown";
import RadioSelect from "./components/HeadlessUI/RadioGroup";
import MySelect from "./components/RadixUI/Select";

function App() {
  return (
    <div className="App">
      <MyDisclosure />
      <MyDropdown />
      <RadioSelect />
      <MySelect />
    </div>
  );
}

export default App;
