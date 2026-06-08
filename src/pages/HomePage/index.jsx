import Banner from '@/components/Banner';
import styles from './styles.module.scss';
import shopFeatures from '@/pages/HomePage/featureSection.constraints';
import clsx from 'clsx';

export default function HomePage() {
  return (
    <>
      <Banner>
        <div className={clsx(styles.heroSectionWrapper, 'banner-large')}>
          <img
            src='https://img.yitashop.com/10003/banners/original/202509/2D353D3C-F9FA-7087-B65B-E4AF59C40834.jpg'
            alt=''
          />
        </div>
      </Banner>
      <div className='global-section-inner'>
        <div className={styles.shopFeatureWrapper}>
          {shopFeatures.map((item, idx) => {
            return (
              <div key={idx} className={styles.shopFeatureContentWrapper}>
                <img
                  src={item.image}
                  alt={item.content}
                  className={styles.featureIcon}
                />
                <div className={styles.featureTitle}>{item.title}</div>
                <div className={styles.featureContent}>{item.content}</div>
                <div className={styles.featureBorder}></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
