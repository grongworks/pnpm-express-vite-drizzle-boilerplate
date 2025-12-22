import "./index.css";
import { useEffect, useState } from "react";
import { HelloMessage } from "@shared/types";

export function App() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    fetch("/api/health")
      .then((response) => response.json())
      .then((json: HelloMessage) => console.log(json));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-green-700">Boilerplate</h1>

        <p className="text-gray-600">Ready for extension</p>
        <div className="flex flex-col items-center justify-center mt-4">
          <button
            onClick={() => setCount(count + 1)}
            className={
              "border-green-800 p-3 m-4 bg-green-400 rounded-lg text-white font-bold hover:bg-green-600"
            }
          >
            CLICK ME
          </button>
          <strong>{count} time clicked (useState works :P)</strong>
        </div>
      </div>
    </div>
  );
}
