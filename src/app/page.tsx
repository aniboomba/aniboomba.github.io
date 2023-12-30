

export default async function Home() {


    return (
        <div className=''>
            {
                Array.from({length: 120}).map((_, item) => (
                    <div key={item} className='home__item '>
                        {item}
                    </div>
                ))
            }
        </div>
    )
}
