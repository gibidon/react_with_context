import { upload } from "@testing-library/user-event/dist/upload";
import { useState } from "react";

export default function useStore() {
  const initialStore = { name: "", email: "", title: "" };
  const [state, setState] = useState(initialStore);

  return {
    getState: () => state,
    updateState: (field, newValue) => setState({ ...state, [field]: newValue }),
    resetState: () => setState(initialStore),
  };
}
