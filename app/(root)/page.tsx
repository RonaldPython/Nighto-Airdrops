import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalCompleated from '@/components/TotalCompleted';
import { getLoggedInUser, GetUserBalance } from '@/lib/actions/user.actions';



const Home = async () => {


  const loggedIn = await getLoggedInUser()


  const ui = await GetUserBalance()

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title='Welcome'
            user={loggedIn?.name || 'Guest'}
            subtext= "Access Your Profile And See All Your Airdrops."
          />

          <TotalCompleated
            UniqueAirdrops={[]}
            airdrops={1}
            TotalCurrentBalance={ui!.balance}
          />

        </header>
        
        RECENT TRANSACTIONS

      </div>
      
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        airdrops={[{currentBalance: 0}, {currentBalance:0}]}
      />
    </section>
  )
}

export default Home
