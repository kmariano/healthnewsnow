import TopBar from '../../../../components/top-bar';
import './index.css';

const DATA = [
  {
    title: 'Coronavirus',
    articles: ['Something bad is happening!', 'Some person just got infected...']
  },
  {
    title: 'Chemical Spill',
    articles: ['Something else bad is happening!', 'Some other person just got infected...']
  }
]

const SignupSuccess = () => {
  return (
    <>
      <TopBar altColor />

      <div className='signup-success__banner'>
        DASHBOARD
      </div>

      <div className='signup-success__max-width'>
        <p className='signup-success__title--big'>User's Dashboard</p>
        <p className='signup-success__title'>Topics Selected</p>

        {DATA.map((item, i) => {
          return (
            <div key={i} className={i % 2 === 0 ? 'signup-success__container--green' : 'signup-success__container'}>
              <p className='signup-success__article-title'>{item.title}</p>
              {item.articles.map(a => {
                return <p className='signup-success__article-item'>{a}</p>
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SignupSuccess;
