import preloader from '../../../assets/img/loader.svg';

let Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt='preloader' />
    </div>
  );
};

export default Preloader;
