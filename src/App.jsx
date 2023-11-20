import { useState } from "react"

function App() {
  const [task, setTask] = useState([])
  const [form, setForm] = useState({ no: 0, name: "" })
  const [error, setError] = useState("")



  const formHandler = ({ target }) => {
    setForm({ no: task.length + 1, name: target.value })
    if (form.name.length > 0) setError("")
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (form.name.length < 1) setError("Task can't be empty")
    else {
      const check = task.find((todo) => todo.name === form.name)

      if (!check) {
        setTask([...task, form])
        setForm({ no: 0, name: "" })
        setError("")
      }
      else setError("the task already noted")
    }

  }

  if (error) console.log(error);

  return (
    <div className="flex justify-center items-center h-screen font-mono">
      <div className="w-[800px] border px-20 py-10 rounded-lg bg-slate-100 shadow-lg">
        <h1 className="text-2xl font-mono font-bold text-center mb-10">TO DO LIST</h1>
        <form onSubmit={submitHandler} className="mb-10 grid grid-cols-4 gap-3">
          <input onChange={formHandler} value={form.name} className="px-3 py-2 border-2 col-span-3 rounded-lg focus:outline-none border-gray-300" placeholder="Input new task" />
          <button className="bg-blue-500 rounded-lg text-base font-mono font-bold text-white active:bg-blue-600" >ADD</button>
          <p className={`w-[600px] px-3 py-1 rounded-md bg-red-500 ${error ? "visible" : "hidden"} text-white font-semibold`}>{error}</p>
        </form>
        <table className="w-full">
          <thead>
            <tr className="rounded-lg">
              <th className="border border-black w-16 py-1 bg-gray-400 text-white">No.</th>
              <th className="border border-black py-1 bg-gray-400 text-white">Task</th>
            </tr>
          </thead>
          <tbody>
            {task.map((todo, idx) => {
              return (
                <tr key={idx}>
                  <td className="border border-slate-400 bg-white text-center font-medium">{todo.no}</td>
                  <td className="border border-slate-400 bg-white px-2 font-semibold">{todo.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
