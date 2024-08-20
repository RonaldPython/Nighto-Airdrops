// app/search-results/page.tsx

import { GetAirdropInfoSearch } from '@/lib/actions/user.actions';
import SearchResults from '@/components/SearchResults';
import { format } from 'date-fns';

const SearchResultsPage = async ({ params }: { params: { query: string } }) => {
  const { query } = params;

  try {
    const airdropData = await GetAirdropInfoSearch(query);

    // Format the date using date-fns
    const formattedAirdropTime = format(new Date(airdropData.airdropTime), "dd/MM/yyyy, hh:mm:ss a");

    return (
      <div className="p-8">
        <SearchResults data={{ ...airdropData, airdropTime: formattedAirdropTime }} query={query} />
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Your Airdrop ID Cannot be found</h1>
      </div>
    );
  }
};

export default SearchResultsPage;
