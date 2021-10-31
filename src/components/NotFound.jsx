import { H3, A } from './styles/NotFound.styles';

const NotFound = () => {
    return (
        <>
            <H3>404! Page not found</H3>
            <A to="/login">Return Home</A>
        </>
    );
};

export default NotFound;
