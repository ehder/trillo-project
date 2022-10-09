import React from 'react'
import hotel1 from '../../assets/img/hotel-1.jpg'
import hotel2 from '../../assets/img/hotel-2.jpg'
import hotel3 from '../../assets/img/hotel-3.jpg'
import {AiOutlineStar} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import image from '../../assets/img/p3.jpg';
import {TiArrowForward} from 'react-icons/ti'

const Main = () => {
  return (
    <div className='hotel-view'>
        
        <div className="gallery">
          <figure className="gallery__item">
            <img src={hotel1} alt="hotel 1" className='gallery__photo'/>
          </figure>
          <figure className="gallery__item">
            <img src={hotel2} alt="hotel 1" className='gallery__photo'/>
          </figure>
          <figure className="gallery__item">
            <img src={hotel3} alt="hotel 1" className='gallery__photo'/>
          </figure>
        </div>

        <div className="overview">
          
          <h1 className="overview__heading">Hotel Las Palmas</h1>
          
          <div className="overview__stars">
            <AiFillStar className='overview__icon-star'/>
            <AiFillStar className='overview__icon-star'/>
            <AiFillStar className='overview__icon-star'/>
            <AiFillStar className='overview__icon-star'/>
            <AiOutlineStar className='overview__icon-star'/>
            <AiOutlineStar className='overview__icon-star'/> 
          </div>

          <div className="overview__location">
            <GoLocation className='overview__icon-location'/>
            <button className="btn btn-inline btn-transparent">Albufeira, Portugal </button>
          </div>

          <div className="overview__rating">
            <div className="overview__rating-average">8.6</div>
            <div className="overview__rating-count" >429 votes</div>
          </div>
          
        </div>

        <div className="detail">
          <div className="description">
            
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores amet aperiam quia voluptatibus 
                atque quibusdam ipsa molestiae a, inventore voluptatum aliquam accusamus illo voluptatem perspiciatis 
                quasi pariatur dolorum quis explicabo!
              </p>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores amet aperiam quia voluptatibus 
                atque quibusdam ipsa molestiae a, inventore voluptatum aliquam accusamus illo voluptatem perspiciatis 
              </p>

            <ul className="list">
                <li className="list__item">Close to the beach</li>
                <li className="list__item">Breakfast include</li>
                <li className="list__item">Air port shuttle</li>
                <li className="list__item">Free wifi in all rooms</li>
                <li className="list__item">Air Condition and heating</li>
                <li className="list__item">Pets allowed</li>
                <li className="list__item">We speak all language</li>
                <li className="list__item">Perfect for families</li>
            </ul>
            <div className="recommend">
              <p className="recommend__count">
                Lucy and three other friend recommend this hotel.
              </p>
              <div className="recommend__friends">
                <img src={image} alt="" className='recommend__photo'/>
                <img src={image} alt="" className='recommend__photo'/>
                <img src={image} alt="" className='recommend__photo'/>
                <img src={image} alt="" className='recommend__photo'/>
              </div>
            </div>
            

          </div>



          <div className="user-reviews">
              
              <figure className="review">
                  <blockquote className='review__text'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat doloribus quam dicta esse voluptate perferendis ipsam
                  </blockquote>
                  <figcaption className="review__user">
                      <img src={image} alt="user 1" className='review__photo'/>
                      <div className="review__user-box">
                        <p className="review__user-name">Nick Smit</p>
                        <p className="review__user-date">Feb 23rd, 2022</p>
                      </div>
                      <div className="review__rating">7.8</div>
                  </figcaption>
              </figure>

              <figure className="review">
                  <blockquote className='review__text'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat doloribus quam dicta esse voluptate perferendis ipsam
                  </blockquote>
                  <figcaption className="review__user">
                      <img src={image} alt="user 1" className='review__photo'/>
                      <div className="review__user-box">
                        <p className="review__user-name">Nick Smit</p>
                        <p className="review__user-date">Feb 23rd, 2022</p>
                      </div>
                      <div className="review__rating">7.9</div>
                  </figcaption>
              </figure>

              <button className="btn btn-inline btn-transparent ">Show all <span>&rarr;</span> </button>
          </div>



        </div>

        <div className="cta-wrap">
          <div className="cta">
            <h2 className="cta__book-now">
              Good news we have four free rooms for your selected date.
            </h2>
            <button className="btnbook">
                <span className="btnbook__visible">Book Now</span>
                <span className="btnbook__invisible">Only 4 rooms left</span>
            </button>
          </div>
        </div>


    </div>
  )
}

export default Main

