import classNames from 'classnames';
import LoadingImage from 'assets/loadingImage.svg';

const Skeleton = ({ image, className, ...props }) => {
  return (
    <div className={classNames('animate-pulse', className)}>
      <div className="bg-grey5 rounded flex items-center justify-center w-full h-full" {...props}>
        {image && <LoadingImage className="fill-grey4 w-1/6" />}
      </div>
    </div>
  );
};

export default Skeleton;
