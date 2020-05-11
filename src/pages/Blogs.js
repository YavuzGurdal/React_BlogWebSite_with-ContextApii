import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { BlogContext } from '../App'

function Blogs(props) {

    // const yavuz = props.match // 
    // console.log(yavuz)

    // const yavuzz = props.match.params // 
    // console.log(yavuzz)

    // const { id } = props.match.params // *********  eski kullanim  **********
    // console.log(id)

    const { id } = useParams() // burdaki yazdigimiz id App.js'deki ( <Route path="/:id" component={Blogs} /> ) id ile ayni yazilmali.
    // ama deger olarak datadaki id degeri
    // useParams string dondugu icin data'daki id de string olmali. satir 26 daki koda bak


    console.log(id)
    console.log('typeof(id) :', typeof (id))


    const data = useContext(BlogContext)

    const blogDetails = data.post.filter(item => item.id === id).map(item =>
        <div key={item.id}>
            <div className="post-image"
                style={{
                    width: '100%',
                    height: '200px',
                    backgroundImage: `url('${item.image}')`, // bu sekilde biseyler yazacaksak `` backtick icine yaziyoruz
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative',
                    borderTopRightRadius: '2px',
                    borderTopLeftRadius: '2px'
                }}
            >
            </div>

            <div className="post-content">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
            </div>
        </div>
    )

    return (
        <div>
            {blogDetails}
        </div>
    )
}

export default Blogs
