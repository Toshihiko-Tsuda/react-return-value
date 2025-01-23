import React from 'react';
import { performLogging } from './logger';
import { Terminal } from 'lucide-react';

function App() {
  const logResults = performLogging();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="flex items-center gap-2 bg-gray-900 px-4 py-2">
            <Terminal className="w-5 h-5 text-green-400" />
            <h1 className="text-white font-mono">関数の実行結果</h1>
          </div>
          
          <div className="p-4 font-mono space-y-3">
            {logResults.map((log) => (
              <div key={log.id} className="bg-gray-900 p-3 rounded">
                <div className="text-gray-400 text-sm mb-1">
                  戻り値の型: {log.type}
                </div>
                <pre className="text-green-400 whitespace-pre-wrap">
                  {log.content}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;