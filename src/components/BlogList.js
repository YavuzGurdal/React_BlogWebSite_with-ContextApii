import React, { useContext } from 'react'
import { BlogContext } from '../App' // BlogContext default olarak export etmedigimiz icin bu sekilde yani {} icinde import edebilirim. 
import PostCard from './PostCard';
// bu konu video-35 dakka 35 de

function BlogList() {

    const posts = useContext(BlogContext);
    console.log('post BlogList with Hooks : ', posts)

    //const newShow = posts.map(item => <PostCard key={item.id}  {...item} />) // seklinde yazabilirim

    return (
        <div className='posts'>
            <div className="container">
                <h2>Posts</h2>
                <div className="posts-grid-container">
                    {
                        // tek satir kod yazacagim icin bu sekilde yaziyorum
                        posts.post.map(item => <PostCard key={item.id}  {...item} />) // {...item} bu sekilde butun datayi gonderiyorum

                        // {newShow} // bu sekilde yazabilirim

                        // posts.map((item, index) => { // {} kullaniyorsak return yazmak zorunlu
                        //     return
                        //     <PostCard />
                        // })

                        // posts.map((item, index) => (  // () return islevi goruyor. Bu arrow function yapisindan dolayi boyle.
                        //     <PostCard />
                        // )
                        // )
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogList
