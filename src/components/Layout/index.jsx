// import styles from './styles.module.scss';

export default function Layout({ children }) {
  // const { wrapLayout } = styles;

  return (
    <>
      <div className='page-home'>{children}</div>
    </>
  );
}
