import React from 'react';
const Blog = ()=>{
    return(
        <section className="py-4 py-lg-5 container">
            <div className="row justify-content-center">
                {data.cardData.map((item,index)=>{
                    return(
                        <Card key={index} img={item.img} title={item.title} desc={item.desc} link=""/>
                    )
                })}
            </div>
        </section>
        
    )
}
export default Blog;


