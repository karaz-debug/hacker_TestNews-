import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function Form({
  text,
  filterData,
  setIsLoading,
  setCheckPass,
  items,
  setFilterData,
  results,
  setText,
}) {
  const handleSubmit = (e) => {
    setCheckPass(true)

    e.preventDefault()

    if (text === '') {
      toast('Input Empty && no Match ')
    }
  }
  const handleFilter = (e) => {
    if (results) {
      setIsLoading(false)
    }
    setText(e.target.value)

    // if only item title a similar with search word
    const newFilter = items.filter((item) => {
      return item.title.toLowerCase().includes(text.toLowerCase())
    })
    if (text === '') {
      setFilterData([])
      setCheckPass(false)
    } else {
      setFilterData(newFilter)
    }
  }
  return (
    <div>
      <form
        className="align-center mb-8 flex flex-col"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        {/* search input */}
        <div className="flex flex-1">
          <input
            className="input placeholder:slategrey mr-4 flex-1 rounded-md text-2xl outline-none lg:w-full"
            type="text"
            name="search"
            id="search"
            placeholder="I will Spin Until, You Search Something"
            onChange={handleFilter}
            value={text}
          />
          <button className="button rounded-md text-2xl transition-all duration-500 ease-out hover:rotate-45 active:scale-125">
            Search
          </button>
        </div>
        {/* search result */}
        {text !== '' && (
          <div className="data_result text-white">
            {filterData.map(({ title, objectID }) => (
              <div key={objectID} className="dataItem hover:bg-slate-500">
                <h2 className="cursor-pointer ">{title}</h2>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  )
}

export default Form
