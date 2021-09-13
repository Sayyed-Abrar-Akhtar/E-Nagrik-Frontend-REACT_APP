import React, { useEffect } from 'react';
import Category from '../components/Category';
import citizenRegistration from '../assets/citizenRegistration.jpg';
import birthRegistration from '../assets/birthRegistration.jpg';
import deathRegistration from '../assets/deathRegistration.jpg';
import marriageRegistration from '../assets/marriageRegistration.jpg';
import complainRegistration from '../assets/complainRegistration.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotices } from '../actions/noticeActions';
import InfoList from '../components/InfoList';
import HeroBanner from '../components/HeroBanner';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { loading, error, allNotices } = useSelector(
    (state) => state.getAllNotices
  );

  useEffect(() => {
    dispatch(getAllNotices());
  }, [dispatch]);

  return (
    <section className='homescreen'>
      <HeroBanner link='#services' />
      <h2 className='homescreen-heading' id='services'>
        Services and Information
      </h2>
      <section className='service-information'>
        <section className='services'>
          <section className='category-grid '>
            <Category
              gridClass='category_citizen'
              link='register'
              imgSrc={citizenRegistration}
              imgAlt='citizen registration image'
              text='citizen registration'
            />
            <Category
              gridClass='category_birth'
              link='register'
              imgSrc={birthRegistration}
              imgAlt='birth registration image'
              text='birth registration'
            />

            <Category
              gridClass='category_marriage'
              link='register'
              imgSrc={marriageRegistration}
              imgAlt='marriage registration image'
              text='marriage registration'
            />
            <Category
              gridClass='category_death'
              link='register'
              imgSrc={deathRegistration}
              imgAlt='death registration image'
              text='death registration'
            />
            <Category
              gridClass='category_complain'
              link='register'
              imgSrc={complainRegistration}
              imgAlt='complain registration image'
              text='complain registration'
            />
          </section>
        </section>
        <aside className='information-container'>
          <section className='information'>
            <h3 className='info-heading'>Notices</h3>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error...</p>
            ) : (
              <InfoList informations={allNotices} />
            )}
          </section>
          <section className='information'>
            <h3 className='info-heading'>Latest News</h3>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error...</p>
            ) : (
              <InfoList
                informations={[
                  { info: 'news1' },
                  { info: 'news2' },
                  { info: 'news3' },
                ]}
              />
            )}
          </section>
        </aside>
      </section>
    </section>
  );
};

export default HomeScreen;
