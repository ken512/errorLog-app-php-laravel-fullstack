
type props = {
    message: string;
};


const Home = ({ message}: props) => {

    return (
        <div>
            <h1>ホーム</h1>
            <p>{message}</p>
        </div>
    )
}

export default Home;