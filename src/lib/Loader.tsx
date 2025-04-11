import { BounceLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <BounceLoader color="#01204E" size={60} />
        </div>
    );
};

export default Loader;
