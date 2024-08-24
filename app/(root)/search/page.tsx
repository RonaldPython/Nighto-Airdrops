import SearchInput from '@/components/searchInput'

const TransactionsHistory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Search Input at the top */}
      <div className="sticky top-10 z-50">
        <SearchInput />
      </div>

      
    </div>
  )
}

export default TransactionsHistory
