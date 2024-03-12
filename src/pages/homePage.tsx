import { useState } from "react"
import { Header } from "../components/Header"
import { SideMenu } from "../components/SideMenu"

const HomePage = () => {
const [isOpen, setIsOpen] = useState(false)

    return (
    <>
        <main className="container">
        <Header />
            <section className="content-area">
                <SideMenu />
                <article className="box-content">
                    <section className="section-content">
                    <div className="user-box-img">
                            <div className="user-photo">
                                PHOTO
                            </div>
                            <div className="topic-title">
                                <h4>Saudation</h4> 
                            </div>
                        </div>
                        <article className="msg-content">
                            <p>
                                Hello guys my name is Eduardo Campos, i'm dev React Js!
                            </p>
                        </article>
                    </section>
                    <section className="section-content">
                        <div className="user-box-img">
                            <div className="user-photo">
                                PHOTO
                            </div>
                            <div className="topic-title">
                                <h4>a little about me</h4> 
                            </div>
                        </div>
                        <article className="msg-content">
                            <div>
                                <p>I'm dev student, living on São Paulo, Brazil.{isOpen ? '' : '..'}</p>
                                {isOpen && (
                                    <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae laudantium recusandae ad, enim quam doloremque ullam optio eveniet obcaecati! Quibusdam officia reprehenderit error explicabo tenetur natus nobis neque libero eius?
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore exercitationem delectus eos eligendi natus itaque animi, quis, nihil minus quam unde rem tenetur repudiandae voluptates dignissimos et incidunt. Magnam, numquam!
                                </p>
                                )}
                            </div>
                            <button className="btn-more-less" onClick={()=>setIsOpen(!isOpen)}>
                                {isOpen ? 'Ler menos' : 'Ler mais'}
                            </button>
                        </article>
                    </section>
                </article>
            </section>
        </main>
    </>
    )
}

export default HomePage