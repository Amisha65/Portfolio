import css from "./Footer.module.css";

const Footer=()=>{
    return(
        <>
            <div className={`${css.containerBox} container-fluid pt-5`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>Amisha Dhanawade</p>
                        </div>

                        <div className={`${css.links} col-12 d-flex justify-content-center gap-3`}>
                            <a href='#'>Home</a>
                            <a href='#'>About</a>
                            <a href='#'>Skills</a>
                            <a href='#'>Projects</a>
                            <a href='#'>Education</a>
                            <a href='#'>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;