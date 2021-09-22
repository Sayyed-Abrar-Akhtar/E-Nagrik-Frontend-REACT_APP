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
              link='/register'
              imgSrc={citizenRegistration}
              imgAlt='citizen registration image'
              text='citizen registration'
              idName='citizen-registration-section'
            />
            <Category
              gridClass='category_birth'
              link='/birth-registration'
              imgSrc={birthRegistration}
              imgAlt='birth registration image'
              text='birth registration'
              idName='birth-registration-section'
            />

            <Category
              gridClass='category_marriage'
              link='/marriage-registration'
              imgSrc={marriageRegistration}
              imgAlt='marriage registration image'
              text='marriage registration'
              idName='marriage-registration-section'
            />
            <Category
              gridClass='category_death'
              link='/death-registration'
              imgSrc={deathRegistration}
              imgAlt='death registration image'
              text='death registration'
              idName='death-registration-section'
            />
            <Category
              gridClass='category_complain'
              link='/complain-registration'
              imgSrc={complainRegistration}
              imgAlt='complain registration image'
              text='complain registration'
              idName='complain-registration-section'
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
                type='news'
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
