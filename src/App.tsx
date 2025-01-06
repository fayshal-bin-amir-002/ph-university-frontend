function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex gap-8 text-2xl items-center">
        <button className="px-6 py-3 bg-green-400">Increment</button>
        <div className="text-4xl mx-6">0</div>
        <button className="px-6 py-3 bg-red-400">Decrement</button>
      </div>
    </div>
  );
}

export default App;
