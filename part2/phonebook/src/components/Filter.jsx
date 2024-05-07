const Filter = ({ newSearch, handlePersonSearch }) => {
    return (
      <form> 
        <div>filter shown with <input value={newSearch} onChange={handlePersonSearch}/></div>
      </form>
    )
  }
  export default Filter
  