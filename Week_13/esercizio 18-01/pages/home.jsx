import Image from "next/image";

import DefaultLayout from './../layouts/index';

const Home = () => {
    return (
        <div>
            <DefaultLayout>

                <Image
                    src="https://picsum.photos/200/300"
                    alt="hero image"
                    width="600"
                    height="400"
                />
            </DefaultLayout>
        </div>
    )
}

// codice eseguito lato server
export async function getSeverSideProps(context) {
    console.log(context);
    return { props: {} }
}

export default Home;