import FavoriteCartoons from './FavoriteCartoons'

export default function CartoonCards ({ cartoonsCard }){
    return(
        <>
            <div>
                { cartoonsCard.name }
            </div>
            <div className='centeredCards'>
                <section className='cartoonsCards'>
                    {cartoonsCard?.map((cartoon,index) => (
                        <article key={index} className='card'>
                            <img src={cartoon.img} alt='cartoon' />
                            <div className='movieName'> <h4>{cartoon.name}</h4></div>
                            <div className='cartoonInfoContainer'>
                                <FavoriteCartoons cartoon={cartoon}/>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
            
        </>
        
    );
}