
import React from 'react';
import {observer} from "mobx-react-lite";
import './PageHome.scss'

const PageHome = () => {
    return (
        <div className='page-home'>
            <div className=" page-home__content">
                {
                    Array.from({length: 120}).map((_, item) => (
                        <div key={item} className='page-home__item '>
                            {item}
                        </div>
                    ))
                }
            </div>

            <div className="page-home__marketing">
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                                 alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHome;