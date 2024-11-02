import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Price() {

    const navigate = useNavigate();

    function handleClick(){
                navigate('/signup')
    }
  return (
    <div>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Free</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">Rs 0<small className="text-body-secondary fw-light">/mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>See all post</li>
                            <li>Be a writer</li>
                            <li>Be a Reader</li>
                            <li>Help center access</li>
                        </ul>
                        <button type="button" onClick={handleClick} className="w-100 btn btn-lg btn-outline-warning">Sign up for free</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Pro</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">Rs 159<small className="text-body-secondary fw-light">/mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Get sensored posts</li>
                            <li>Get first,  be first</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button type="button" onClick={handleClick} className="w-100 btn btn-lg btn-warning">Get started</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-danger">
                    <div className="card-header py-3 text-bg-danger border-danger">
                        <h4 className="my-0 fw-normal">Developer</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">Rs 299<small className="text-body-secondary fw-light">/mo</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>More functions</li>
                            <li>Direct contact to Supervisors</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button type="button" onClick={handleClick} className="w-100 btn btn-lg btn-danger">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
