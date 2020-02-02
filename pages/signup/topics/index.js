import Card from '../../../components/card';
import TopBar from '../../../components/top-bar';
import './index.css';

const data = [
  {title: 'Something Bad', image: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322223/herpesvirus-in-purple.jpg?w=1155&h=1541'},
  {title: 'Something Bad', image: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322223/herpesvirus-in-purple.jpg?w=1155&h=1541'},
  {title: 'Something Bad', image: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322223/herpesvirus-in-purple.jpg?w=1155&h=1541'},
  {title: 'Something Bad', image: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322223/herpesvirus-in-purple.jpg?w=1155&h=1541'},
  {title: 'Something Bad', image: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322223/herpesvirus-in-purple.jpg?w=1155&h=1541'},
  {title: 'Something Bad', image: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322223/herpesvirus-in-purple.jpg?w=1155&h=1541'}
]

const SignupTopics = () => {
  return (
    <>
      <TopBar altColor />

      <div className='topics__banner'>
        <p className='topics__banner-text'>TOPIC SELECTION</p>
      </div>

      <div className='topics__container'>
        <p className='topics__title'>Known Illnesses</p>
        <div className='topics__card-wrap'>
          {data.map((item, i) => {
            return <Card key={i} title={item.title} image={item.image} />;
          })}
        </div>

        <p className='topics__title'>Potential Threats</p>
        <div className='topics__card-wrap'>
          {data.map((item, i) => {
            return <Card key={i} title={item.title} image={item.image} />;
          })}
        </div>
      </div>
    </>
  );
}

export default SignupTopics;
