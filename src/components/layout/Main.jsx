import Languages from "../ui/Languages";

export default function Main ({ languagesData }) {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-100">
                        <h1 className="my-5">
                            Learn Web development
                        </h1>
                        <Languages languagesData={languagesData} />
                    </div>
                </div>
            </div>
        </main>
    );
}