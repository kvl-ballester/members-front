import { Header, BackTo } from "../../components";

export const NewMember = () => {
    return (
        <>  
            <Header text="Add member" />
            <div id="new-member">
                <BackTo path="/" text="Back to members" />
                <br />
                Yluego un formulario
            </div>
        </>
        
    )
}
