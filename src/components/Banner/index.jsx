export default function Banner(props) {
  const { children } = props;

  return (
    <>
      <div className='banner'>{children}</div>
    </>
  );
}
