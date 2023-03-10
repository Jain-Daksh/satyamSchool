import React from 'react'
export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className='Footers'>
      <section className="footer">
        <figure className="mb-0">
          <svg className="fill-body rotate-180 body-fill" width="100%" height="150" viewBox="0 0 500 150"
            preserveAspectRatio="none">
            <path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z"></path>
          </svg>
        </figure>
        <figure className="position-absolute top-50 start-0 d-none d-md-block ">
          <svg className="opacity-5" enableBackground="new 0 0 84.6 98">
            <path className="fill-white"
              d="m54.4 73.8c1.1 4.1 2.2 8.2 3.3 12.4 6.2-1.3 12.4-2.4 18.9-2.8 0.3 1.3 0.5 2.7 0.8 4-1.1-0.9-0.9-2.3-1.5-3.4-6.5 0.6-12.9 1.6-19.3 3.2-0.1 0.2-0.1 0.4-0.2 0.6-0.1 0-0.2 0.1-0.3 0.1-0.5-0.5-1.2-0.3-1.7-0.2-3.8 1-7.5 1.9-11.3 2.9-1.7 0.4-3.4 0.9-5.1 1.3 0.3 1.2 0.6 2.4 0.9 3.7-0.9-1-1.3-2.1-1.5-3.4-0.3-0.1-0.5-0.2-1-0.3 0.2-0.2 0.3-0.3 0.5-0.4 2.3-0.6 4.6-1.3 6.9-1.8 3.5-0.9 6.9-1.8 10.4-2.6 0.3-0.1 0.6-0.2 0.8-0.3-0.7-2.1-1.6-4.1-2.2-6.1s-1-4.1-1.6-6.2c-0.2 0-0.5-0.1-0.7-0.1-10.2 1.2-19.5-1.3-27.6-7.6-5.3-4.1-9.1-9.3-11.3-15.7-1.3-3.7-2-7.6-2.1-11.5-0.1-3.3 0.4-6.6 1.3-9.8 1.1-4.1 2.8-8 5.2-11.5 0.2-0.3 0.3-0.5 0.4-0.8-1-1.3-2.1-2.5-3.2-3.9-1.4 1.3-2.5 2.7-3.5 4.2-3.2 4.5-5.1 9.6-5.8 15.1-1 7.5-0.6 14.8 1.7 22 2.1 6.4 5.4 12.1 10.6 16.5 3.8 3.2 8.1 5.6 12.9 7.1 2.8 0.9 5.6 1.5 8.4 1.8 2.4 0.2 4.8 0.2 7.1 0.2 1.9 0 3.9-0.3 5.8-0.5 0.3 0 0.6 0.1 1 0.1v0.3c-1.5 0.2-3.1 0.6-4.6 0.7-2.9 0.1-5.8 0.2-8.8 0-2.2-0.1-4.4-0.6-6.5-1.1-4-0.9-7.8-2.4-11.2-4.6-6-3.7-10.6-8.8-13.5-15.3-1.6-3.6-2.8-7.4-3.4-11.4-0.7-3.7-1-7.2-0.8-10.7 0.3-7.9 2.3-15.2 7.1-21.5 0.9-1.2 1.9-2.3 2.9-3.6-0.8-0.9-1.7-1.8-2.5-2.7l0.2-0.2c1.2 0.4 1.8 1.6 2.8 2.5 1.9-1.6 3.8-3.2 6.5-3.6 0 0.8-0.5 0.7-0.8 0.8-1.9 0.6-3.4 1.8-4.9 3.1-0.1 0.1-0.1 0.2-0.3 0.4 0.9 1.2 1.9 2.5 2.9 3.9 0.4-0.5 0.9-1 1.3-1.5 3.5-4.4 7.7-7.7 12.8-10.1 6.5-3 13.3-3.4 20.2-2.1 0.2 0 0.4 0.2 0.7 0.4-0.4 0.5-0.8 0.3-1.1 0.3-2.7-0.7-5.5-0.8-8.3-0.7-2.7 0.1-5.3 0.6-7.8 1.4-5.1 1.6-9.5 4.4-13.2 8.1-3.2 3.2-5.8 6.9-7.7 11.2-1.5 3.3-2.5 6.8-3 10.4-0.6 3.8-0.4 7.6 0.3 11.3 0.5 3.2 1.6 6.3 3 9.1 2.1 4.1 4.9 7.7 8.4 10.6 4 3.4 8.4 5.8 13.4 7.2 7.6 2.2 15.1 2 22.5-0.7 5.4-2 10.1-5 14.1-9.1 1-1 1.9-2.2 2.8-3.3-1.5 0.6-3 1.4-4.9 0.5 0.7-0.1 1.2-0.2 1.6-0.2 1.7 0 3-0.8 3.9-2.1 2-2.6 2.7-7.2 0.8-10.3-1-1.7-3.1-2.3-5.1-1.4-0.6 0.3-0.9 0.8-0.9 1.5 0 1.4-0.7 2.4-1.6 3.3-0.9 0.8-1.7 1.7-2.6 2.5-0.6 0.5-0.9 1.2-0.9 2-0.1 1 0.2 1.5 1.3 1.6 0.7 0.1 1.4 0 2.1 0.1 1 0.1 1.7 0.7 2.1 1.6 0.1 0.2 0 0.4-0.1 0.6l-0.4-0.2c-0.5-1.2-1.5-1.5-2.7-1.5-0.6 0-1.2 0-1.7-0.2-1-0.3-1.3-0.8-1.3-1.8 0-1.1 0.3-2.1 1.2-2.8 0.8-0.7 1.6-1.5 2.4-2.3 0.9-0.8 1.5-1.7 1.6-2.9 0.1-1.5 0.8-2.1 2.3-2.5 3.1-0.7 4.9 1.2 5.6 3.2s0.8 4.1 0.2 6.1c-0.1 0.3-0.1 0.6-0.2 1.1 5.1-7.5 7.1-21.4 1-32.7-5.8-10.7-14.7-17.1-27-19.3 0.9-0.4 1.5-0.3 2.1-0.2 4.5 0.7 8.5 2.5 12.3 4.9 5.2 3.4 9.5 7.6 12.6 13 2.3 4 3.6 8.4 4.1 13 0.3 3 0.3 6-0.1 9-0.6 4.7-2.2 9.1-4.7 13.1-3.9 6.4-9.2 11.3-15.9 14.5-2.2 1.1-4.5 1.8-6.8 2.6-0.2 0.2-0.5 0.3-0.8 0.4zm-2.4 1.1c0.9 4.2 1.7 8.1 3.9 11.7l1.2-0.3c-1.1-4-2.1-7.9-3.2-11.8-0.8 0.2-1.3 0.3-1.9 0.4z">
            </path>
            <path className="fill-white"
              d="m43.6 15.3c0.7 0 1.1 0 1.5-0.1 2.4-0.6 4.8-1.3 7.3-2 3.6-1 7.4-1.5 11.1-1.3 0.6 0 1.3 0.2 1.9 0.5 0.9 0.4 1.3 1.1 1.2 2 0 0.8-0.6 1-1.3 1.3-0.5 0.2-0.9 0.6-1.3 1-0.5 0.6-1 1.2-1.5 1.9-0.9 1.2-1.3 2.4-0.8 4 0.6 1.9-0.1 3.2-2 4-0.8 0.3-1.7 0.5-2.5 0.8-0.6 0.2-1.2 0.5-1.8 0.8s-0.8 0.9-0.7 1.5c0 0.6 0.4 0.9 1 1.1 0.4 0.1 0.8 0.2 1.1 0.3 2.4 0.6 3.9 2.7 3.6 5.1-0.1 1.1-0.4 2.3-0.8 3.3-0.4 1.1-0.3 1.9 0.5 2.7 0.5 0.5 1.1 1 1.6 1.5 0.4 0.4 0.9 0.8 1.3 1.3 0.2 0.3 0.4 0.7 0.4 1.1 0.1 1.1-0.7 1.6-1.6 1-0.6-0.4-1.1-0.9-1.6-1.4-1.1-1.1-2.2-2.3-3.4-3.3-1.4-1.2-3-1.7-4.9-1.8-1.6 0-3.2-0.1-4.8-0.3-2.5-0.3-4.5-1.4-6.1-3.4-1.1-1.5-2.5-2.7-4.3-3.4-1.6-0.5-3.2-0.8-4.8-0.5-3 0.4-6 0.9-9 1.3h-0.9c-1.4-0.1-2.2-0.7-2.5-1.8s0.2-2.4 1.2-3c0.7-0.4 1.5-0.7 2.2-1.1s1.5-0.7 2.1-1.1c1-0.7 1.3-1.8 1-2.8-0.2-0.7-0.6-0.9-1.2-0.6s-1.2 0.8-1.8 1.1c-0.7 0.4-1.3 0.7-2 1-0.9 0.3-1.6-0.2-1.7-1.1 0-0.6 0.1-1.2 0.4-1.8 1.1-2.1 2.7-3.6 4.9-4.6 1.2-0.6 2.5-0.7 3.7-0.2 3 1.2 5.4 0.3 7.5-1.9 1.5-1.5 3.1-2.9 4.8-4.2 0.7-0.5 1.7-0.7 2.6-0.8 1.4-0.1 1.8 0.5 1.2 1.8-0.1 0.6-0.4 1.2-0.8 2.1zm19.1 31.5c0.3-1.1-0.3-1.6-0.9-2.1-0.7-0.6-1.4-1.2-2.1-1.9-1.1-1-1.5-2.2-0.9-3.7 0.4-1 0.7-2.1 0.8-3.2 0.2-2.2-1.1-3.8-3.3-4.3-0.6-0.1-1.2-0.4-1.7-0.6-0.6-0.3-0.8-0.9-0.8-1.6 0.1-0.9 0.4-1.6 1.3-2 0.7-0.3 1.4-0.6 2.1-0.8 0.9-0.3 1.8-0.6 2.6-1 1.2-0.6 1.5-1.3 1.2-2.6-0.2-1.1-0.5-2.2 0-3.3 1.1-1.9 2-3.9 4.2-4.9 0.7-0.3 0.8-0.8 0.4-1.4s-1.1-0.9-1.8-0.9c-1.6 0-3.3-0.1-4.9 0.1-3.2 0.3-6.3 1.2-9.4 2-1.5 0.4-3.1 0.9-4.6 1.3-0.6 0.1-1.2 0.2-1.6-0.3-0.5-0.5-0.2-1.1 0-1.6 0.2-0.6 0.5-1.1 0.8-2-0.9 0.1-1.5 0.1-2.1 0.2-1.1 0.2-1.9 0.9-2.7 1.6-1.4 1.3-2.7 2.6-4 3.8-1.7 1.6-3.7 2.3-6.1 1.5-0.4-0.1-0.8-0.3-1.3-0.3-0.8-0.1-1.6-0.2-2.4 0-2.4 0.7-4.2 2.3-5.4 4.6-0.3 0.6-0.4 1.3 0.1 2.2 0.6-0.3 1.2-0.5 1.8-0.8 0.8-0.5 1.6-1 2.4-1.4 1.1-0.5 1.8-0.2 2.1 1s0.2 2.4-0.9 3.3c-0.6 0.5-1.3 1.1-2 1.2-1 0.2-1.7 0.9-2.6 1.3-0.8 0.4-1.3 1.6-1.1 2.4s1 1.3 2.1 1.3h0.5c1.5-0.2 3-0.5 4.4-0.7 1.9-0.3 3.8-0.6 5.7-0.7 2.1-0.1 4.1 0.3 5.9 1.5 1.2 0.8 2.2 1.9 3.1 3 1.3 1.6 3 2.5 5 2.7 1.3 0.2 2.6 0.4 4 0.3 3.5-0.1 6.2 1.2 8.5 3.9 0.7 0.8 1.4 1.5 2.1 2.2 0.6 0.2 1 0.4 1.5 0.7z">
            </path>
            <path className="fill-white"
              d="m25.1 38.7c1.3-0.9 2.8-1 4.2-0.6 0.5 0.1 1 0.3 1.5 0.5 1 0.4 2.1 0.3 3.1 0.1 0.7-0.1 1.5-0.3 2.2-0.4 1.6-0.2 2.7 0.5 3.4 1.8 0.5 1.1 1 2.2 1.5 3.2 0.2 0.5 0.5 1 0.8 1.5 0.6 0.9 1.4 1.4 2.5 1 0.9-0.2 1.6 0.1 2.1 0.8s0.4 1.5 0.1 2.1c-0.5 0.8-1.1 1.6-1.6 2.4-0.3 0.4-0.5 0.7-0.8 1-0.9 1-1.2 2.2-1 3.6 0.1 0.6 0.1 1.2 0 1.8-0.1 0.8-0.4 1.5-1.1 2-0.8 0.6-1.1 1.4-1.1 2.3l-0.3 2.1c-0.2 1.3-1.1 2-2.4 2.1-1.7 0.1-3.1-0.7-4.2-1.9-1.5-1.7-2.2-3.7-2.8-5.8-0.4-1.3-0.7-2.6-1.1-3.8-0.7-2-1.9-2.7-4-2.6-0.8 0-1.6 0.1-2.4 0.1-3.5 0.1-5.8-3.5-5.3-6.6 0.1-0.6 0.5-1.2 0.8-1.7 0.8-1.1 1.5-2.2 1.9-3.5 0.2-0.8 0.8-1.1 1.6-1.2 0.1 0 0.3 0.1 0.8 0.2-1.5 0.5-1.8 1.5-2.2 2.6-0.3 0.7-0.8 1.4-1.3 2-1.2 1.5-1.2 3.1-0.4 4.7 0.7 1.6 2 2.6 3.8 2.8 0.7 0.1 1.3 0 2 0 0.5 0 1-0.1 1.5-0.1 2.1 0.1 3.4 1 4.1 3 0.6 1.7 1 3.5 1.6 5.2 0.6 1.8 1.3 3.5 2.8 4.7 0.9 0.8 2 1.2 3.2 1.1 1-0.1 1.5-0.5 1.7-1.4 0.1-0.3 0.1-0.7 0.2-1 0.1-1.7 0.6-3.1 1.9-4.3 0.4-0.4 0.4-1.3 0.6-2 0.1-0.3-0.1-0.6-0.1-0.9-0.2-1.5 0-2.8 1.1-3.9 0.8-0.8 1.4-1.8 2-2.8 0.2-0.4 0.4-0.8 0.5-1.2 0.1-0.8-0.4-1.3-1.2-1.3h-0.3c-2 0.1-2.9-0.3-3.8-2.1l-1.5-3.3c-0.9-1.9-1.7-2.4-3.7-2.1-0.4 0.1-0.8 0.1-1.2 0.2-1.4 0.4-2.7 0.4-4-0.1-1.4-0.5-2.8-0.7-4.3-0.4-0.7 0.2-1.1 0.1-1.4 0.1z">
            </path>
            <path className="fill-white"
              d="m40.6 96.6c0 0.3-0.1 0.6-0.1 1.2-0.4-1.5-1.5-0.8-2.2-1v-0.3c0.4-0.2 0.7-0.4 1.2-0.6 0.1-1.1-0.5-2.3 0-3.7 0.8 1.2 0.1 2.6 1.1 3.6 2-0.4 4-0.9 6.1-1.3 2.1-0.5 4.2-0.9 6.3-1.4s4.1-1 6.2-1.5 4.1-0.9 6.2-1.4 4.2-1 6.3-1.4c2-0.4 4-1.1 6.1-0.9-3 1-6.1 1.5-9.2 2.2s-6.3 1.4-9.4 2.2l-9.3 2.1c-3.1 0.8-6.2 1.5-9.3 2.2z">
            </path>
            <path className="fill-white"
              d="m66.5 74.2c2-1.3 3.9-2.6 5.9-3.9-0.5 1-0.9 1.4-2.6 2.5-1 0.6-2 1.3-3 2 0.5 0.9 1 1.8 1.5 2.8-1 0-1-0.7-1.3-1-0.3-0.4-0.6-0.9-1-1.3-3.1 1.5-6.2 3-9.7 3.8 0.1-0.8 0.7-0.8 1.1-0.9 2.1-0.9 4.3-1.7 6.4-2.6 0.6-0.2 1.1-0.6 1.7-0.9-0.6-1-1.2-2-1.7-2.9 1.3 0.3 1.7 1.4 2.7 2.4z">
            </path>
            <path className="fill-white"
              d="m69.8 38.3c0.9 0 1.7 0.3 2.4 0.8 0.6 0.4 0.9 1 0.9 1.7 0 0.3-0.4 0.8-0.7 0.9-1.3 0.5-2.7 0.8-4.1 0.3-0.4-0.1-0.7-0.3-1-0.6-0.8-0.9-0.7-1.8 0.3-2.4 0.7-0.3 1.5-0.4 2.2-0.7zm2.9 2.7c-0.7-1.8-2.5-2.4-4.3-1.6-0.5 0.2-1 0.4-0.9 1 0.1 0.4 0.5 0.8 0.9 1 0.3 0.2 0.7 0.2 1 0.2 1.1 0.1 2.2-0.1 3.3-0.6z">
            </path>
            <path className="fill-white"
              d="m16.5 27.4c-0.3 0.1-0.6 0.2-0.9 0.4-0.5 0.4-1 0.7-1.4 1.1-0.5 0.6-0.3 1.5 0.2 1.8 0.7 0.4 1.7 0 1.9-0.8 0.1-0.4 0.2-0.8 0.3-1.3 0.5 0.9 0.4 1.5 0 2.2-0.5 0.7-1.3 0.9-2.1 0.7-0.6-0.2-1.1-0.8-1.2-1.6-0.1-1.5 1.6-3.1 3.2-2.5z">
            </path>
          </svg>
        </figure>
        <figure className="position-absolute ms-5 ps-5 ">
          <svg className="opacity-5" enableBackground="new 0 0 70.2 42.8">
            <path className="fill-white"
              d="m59.2 8.5c-7.8 3.8-15.7 7.4-23.1 12-0.7-0.8-1.7-0.8-2.6-1-3.1-0.5-6.1-1.1-9.2-1.5-2.5-0.4-5-0.5-7.5-0.8l-13.2-1.2c-0.9-0.1-1.8-0.4-3-0.9 0.7-0.2 1-0.3 1.3-0.5 3.3-1.4 6.7-2.8 10-4.4 6.1-2.9 12.2-5.9 18.3-9 1-0.5 1.8-0.5 2.8-0.4 1.9 0.2 3.7 0.3 5.6 0.4 6.5 0.3 13 0.6 19.5 0.8 3 0.1 6.1 0.3 9.1 0.5 0.5 0 1 0.2 1.8 0.3-1.4 1.4-2.9 2.1-4.4 2.9s-3 1.5-4.5 2.2c0.9 4.6 1.8 9 2.6 13.5s1.5 9 2.2 13.6c1 0.2 1.3 0.8 1.5 1.8 0.1 0.9 0.9 1.7 1.3 2.6 0.3 0.8 0.8 1.5 0.5 2.5-0.7-1.4-1.4-2.7-2.1-4.1-0.1 0-0.2 0.1-0.3 0.1 0.2 1.3 0.5 2.6 0.7 3.9-1.1-1.2-1.3-2.8-1.6-4.2-0.8-0.1-0.9 0.4-0.9 0.8-0.1 0.7 0 1.5 0.1 2.2 0.1 0.6 0.2 1.3 0.1 1.9-0.9-1.5-1.4-3-0.8-4.7 0.1-0.3 0.3-0.7 0.2-0.9-0.7-1 0.1-1.4 0.8-1.9-2-8.5-2.3-17.7-5.2-26.5zm-56 6.5c0.5 0.2 0.8 0.3 1.2 0.4 1.9 0.2 3.7 0.4 5.6 0.6 5 0.4 9.9 0.7 14.8 1.3 3.7 0.4 7.3 1.2 10.9 2 0.7 0.1 1.1-0.1 1.6-0.4 6.6-3.9 13.5-7.2 20.3-10.5 2.9-1.4 5.7-2.8 8.6-4.3 0.3-0.2 0.6-0.4 1.1-0.8-1-0.1-1.7-0.3-2.4-0.3-6.1-0.3-12.2-0.5-18.3-0.8-4.6-0.2-9.1-0.5-13.7-0.8-0.7 0-1.5 0-2.2 0.2-1.1 0.4-2.2 1.1-3.3 1.6-4.9 2.5-9.9 4.9-14.8 7.3-3.1 1.7-6.2 3.1-9.4 4.5zm62.6 21.1c-0.9 0-0.9 0-1.5 0.5 0.7 0.7 1 0.3 1.5-0.5z">
            </path>
            <path className="fill-white"
              d="m17.9 32.4c0.1-0.5 0.2-1 0.1-1.4-0.3-2.3-0.6-4.7-1-7-0.2-1.4-0.4-2.7-0.6-4.1-0.1-0.7 0.1-1 0.9-1 0.7 0 1.4 0 2.1 0.1 2.6 0.4 5.2 0.9 7.9 1.3 2.1 0.3 4.2 0.5 6.3 0.7 0.2 0 0.5 0 0.7 0.1 1.7 0.7 3 0.2 4.6-0.6 5.2-2.7 10.5-5.3 15.7-7.9 0 0 0.1 0 0.1-0.1 1.9-0.9 2.1-0.8 2.7 1.2l2.1 7.8c0.1 0.6 0.1 1.2 0.2 1.8-0.1 0-0.2 0-0.3 0.1-1-3.5-1.9-7-2.9-10.8-1.2 0.6-2.3 1.1-3.3 1.6-4.4 2.2-8.8 4.2-13.1 6.5-1.9 1-3.7 1.4-5.8 1.1-3.2-0.4-6.4-0.8-9.6-1.3-1.8-0.3-3.6-0.6-5.4-0.9-0.6-0.1-1.2 0-1.9 0 0.4 2.8 0.7 5.5 1.1 8.1 0.1 1 0.2 2.1 0.1 3.1 0 0.8 0.2 1.3 1 1.5 1.4 0.3 2.8 0.8 4.3 1 4 0.9 8.1 0.7 12.1 0.4 3.9-0.3 7.8-1.1 11.5-2.3s7.3-2.7 10.2-5.5c0.4-0.4 0.9-0.7 1.3-1 0.1-0.1 0.2-0.1 0.7-0.3-0.3 0.4-0.4 0.7-0.5 0.9-1.7 1.9-3.7 3.4-6 4.5-4.7 2.2-9.6 3.6-14.7 4.2-3.4 0.4-6.8 0.6-10.2 0.5-3.5-0.1-6.8-0.8-10.1-2l-0.3-0.3z">
            </path>
          </svg>
        </figure>
        <figure className="position-absolute start-0 bottom-0 mb-n5 d-none d-sm-block">
          <svg className="opacity-5" enableBackground="new 0 0 92.7 91.3">
            <path className="fill-white"
              d="m92.7 44.4c-2.2 2.9-4.5 6.1-7 9.1-8.1 9.7-16.4 19.3-24.5 29-1.1 1.2-2.2 2.5-3.2 3.8-0.4 0.6-0.7 1.2-0.9 1.9-0.7 2.7-2.4 3.7-5 2.6-1-0.4-2-1.1-2.8-1.8-5.1-4.2-10-8.5-15.2-12.6-5.3-4.2-10.8-8.3-16.2-12.4-4.3-3.3-8.7-6.6-12.9-10-1.1-0.8-1.9-1.9-2.8-2.9-0.3-0.3-0.4-0.8-0.7-1.6 0.7 0.3 1.2 0.3 1.3 0.5 3.2 3.9 7.4 6.5 11.4 9.5 10.5 7.9 21.1 15.7 30.8 24.5 2.1 1.9 4.4 3.5 6.6 5.2 1 0.7 2.1 1.2 3.5 0.4-17.4-15.5-35.4-30.1-53.3-45 0.5-0.4 0.5-0.5 0.6-0.5h0.2 0.2c0.1 0.1 0.3 0.1 0.4 0.2 0.2 0.1 0.4 0.3 0.6 0.5 17.2 14.3 34.4 28.7 51.5 42.9 2.9-3.5 5.8-7.3 8.9-10.9l26.4-31.5c0.3-0.3 0.4-0.6 0.7-1-17.7-14.1-35.3-28.2-53-42.4-1.3 1.4-2.6 2.7-3.7 4-5.1 5.8-10.2 11.5-15.3 17.3-5.7 6.5-11.2 12.9-16.7 19.3-1.3 1.5-1.3 3.4-1.4 5.2-0.1 1.1 0 2.3-0.3 3.4-0.8-3.2-1.7-6.4 0.9-9.3 4-4.6 7.9-9.3 11.8-13.9 4.6-5.3 9.3-10.6 14-15.9 2.8-3.1 5.6-6.2 8.4-9.3 0.6-0.7 1-1.6 1.7-2.7 0.3 0.2 0.9 0.4 1.4 0.8 6.6 5.4 13.3 10.8 20.1 16.2 5.9 4.7 11.7 9.4 17.7 14 4.1 3.1 8.3 6 12.4 9 0.6 0.5 1.6 0.6 1.3 2-0.1 0.6 1.1 1.3 2.1 2.4z">
            </path>
            <path className="fill-white"
              d="m38.2 42.8c-2.8-1.5-5.3-2.8-7.7-4.2-0.6-0.3-1.1-0.6-1.7-0.9-2.9-2.1-3.1-4.4-0.7-7 1.7-1.8 4-1.5 5 0.8 0.2 0.5 0.3 1 0.5 1.6 0.7-0.5 1.3-0.9 1.9-1.3 1.5-0.8 2.9-0.8 4.3 0.2s2 2.5 1.7 4.2c-0.6 2.5-2.2 4.5-3.3 6.6zm-5.8-5.7c-0.1-0.7-0.3-1-0.3-1.3 0-1.1 0.1-2.3 0-3.4-0.2-1.6-1.6-2.1-2.7-1-2.3 2.3-1.9 4 0.3 5.2 2.5 1.5 5.2 2.7 7.8 4 2-2 2.8-4 2.6-5.8-0.3-2.4-2.3-3.3-4.1-1.8-0.9 0.7-1.5 1.8-2.2 2.8-0.5 0.5-0.9 0.8-1.4 1.3z">
            </path>
            <path className="fill-white"
              d="m28.1 59c-2.9-3.2-5.8-6.5-8.7-9.7-0.4-0.4-0.6-1-0.8-1.5-1.1-2.7 0.5-4.9 3.4-4.6 1.4 0.2 2.8 0.6 4.2 0.9 0.6 0.1 1.2 0.1 1.8 0.2h0.6c0.6 1.9 2.4 1.9 3.8 2.4 1.3 0.4 1.7 1.1 1.8 2.7-2.2-1-4.3-1.9-6.5-2.9-1.2 2-2.4 4.1-3.6 6 1.6 2.3 4 3.6 4.6 6.1-0.2 0.1-0.4 0.3-0.6 0.4zm-1.4-13.3c-1.9-0.5-3.3-1-4.8-1.2-2-0.2-2.8 1-2.1 2.8 0.7 1.7 1.8 3.1 3.4 4.3 1.1-1.9 2.2-3.7 3.5-5.9z">
            </path>
            <path className="fill-white"
              d="m51.5 19.7c1.5 2.8 0.9 5.6-1.3 7.3-3.3 2.6-7.1 2.6-9.9 0.2-2.7-2.4-3.4-6.5-1.5-9.6 1-1.6 2.8-2.4 4.4-1.9-1.5 1.1-3.4 1.8-3.9 3.7-0.2 0.7-0.5 1.4-0.5 2.1 0.1 0.9 0.3 1.9 0.7 2.7 1.1 2.5 3.8 3.9 6.3 3.4 3.9-0.7 5.4-2.7 5.7-7.9z">
            </path>
          </svg>
        </figure>
        <figure className="position-absolute top-50 start-100 translate-middle ms-5 d-none d-sm-block">
          <svg className="opacity-5" enableBackground="new 0 0 98.8 79.5">
            <path className="fill-white"
              d="m69.3 44.4c-0.4 3.3-2.4 5.9-4.4 8.2-1.7 1.9-3.7 3.5-5.5 5.3-0.8 0.7-1.6 0.5-2.4 0.2-0.9-0.3-1.8-0.8-2.9-1.3-0.5 5.5 0.2 10.5 2.3 15.6-1-0.1-1.5-0.1-2-0.3-3.4-1-6.2-3-9-5.2-3.7-2.9-7.1-6.1-8.9-10.5-0.7-1.8-1.1-3.8-1.6-5.8-0.2-1.1-0.6-1.7-1.7-2.2-10.1-4.8-17.7-12.4-23.1-22.2-3.1-5.8-5.5-11.9-6.6-18.5-0.3-1.8-1-3.5-2.5-4.7-0.3-0.3-0.6-0.6-0.8-0.9-0.5-1-0.2-1.8 0.8-2 0.8-0.1 1.6-0.2 2.3 0.1 2.3 1 4.6 1.1 7 1 14.7-0.5 27.1 5 37.9 14.6 2.1 1.8 4 3.8 6 5.8 0.7 0.7 1.2 1 2.2 0.7 4.9-1.6 9.4-0.3 13.5 2.2 2.8 1.7 5.4 3.8 8 5.9 2.1 1.6 4.1 3.4 6.3 5.3-1.5 0.9-2.9-0.1-4.2 0.1-1.4 0.3-2.9 0.3-4.4 0.5-1.4 0.2-2.7 0.5-4.1 0.8-1.3 0.3-2.7 0.6-4.2 1 0.7 1.4 1.4 2.8 2 4.2 0.6 0.9 0.8 1.6 0 2.1-0.1-1.4-1.1-2.4-1.9-3.6-0.6-0.9-1.1-1.8-1.7-2.9 5-1.9 9.8-3 15.2-3.3-1.3-1-2.1-1.7-2.9-2.4-2.2-1.8-4.4-3.7-6.7-5.3-4.3-2.9-9-4.9-14.4-3.5-0.4 0.1-0.9 0-1.4 0.1-0.9 0.1-1.6-0.2-2.2-0.9-2.2-2.3-4.4-4.5-6.8-6.6-7.3-6.5-15.7-10.8-25.2-12.8-3.9-0.8-7.8-0.9-11.8-0.8-2.3 0-4.5 0-6.6-1-0.4-0.2-0.9 0-1.4 0-0.1 0-0.2 0.1-0.3 0.2 2.8 1.9 3.2 4.9 4 7.7 0.8 2.9 1.5 5.8 2.6 8.6 0.8 2.3 1.9 4.6 3.1 6.8 4.5 8.7 10.8 15.8 19.3 20.7 1.3 0.8 2.6 1.7 3.9 2.5 1.4 0.8 2.1 1.9 2.3 3.5 0.5 3.7 2.1 7 4.6 9.7 3.1 3.5 6.7 6.4 10.8 8.6 0.8 0.4 1.6 0.8 2.5 1.3-1.9-9.8-2.1-13.5-1-15.9 1.1 0.4 2.1 0.8 3.2 1.4 1.2 0.6 2 0.5 3.1-0.4 3.4-2.9 6.4-6.1 8.4-10.1 0.2-0.6 0.8-1.1 1.3-1.6z">
            </path>
            <path className="fill-white"
              d="m73.2 67.2c0.6 2 1 3.6 1.6 5.8-3.9-1.9-7.2-3.7-9.2-7.2-1.7-3-1.4-6.1 0.2-9.1 1.7-3.2 4.2-5.7 6.7-8.2 2.2-2.2 4.3-1.9 6.7-0.8 4.1 1.9 7.2 4.9 9.1 9.6-2.3-1.3-4.1-3-7-2.9 4.3 5.2 8.2 10.3 10 17.1-6.4 0-12.2-1.6-18.1-4.3zm5.9-13.5c0-0.2 0.1-0.4 0.1-0.5 1.7 0.1 3.4 0.2 5.4 0.3-1.9-2.3-4-3.9-6.6-4.9-2.7-1-3.6-0.7-5.5 1.4-0.7 0.8-1.4 1.4-2 2.2-1.2 1.6-2.5 3.1-3.5 4.9s-1.7 3.7-1.1 6c1 3.6 3.5 5.6 6.9 7.5-0.4-2.7-2.1-4.5-2.6-6.8 2.9 2.1 5.9 3.8 9.3 4.7 3.3 0.9 6.6 1.9 10.2 1.9-1.1-3.4-2.7-6.2-4.6-8.9s-4-5.2-6-7.8z">
            </path>
            <path className="fill-white"
              d="m19.3 15.9c0-2.4 1-3.5 3.4-3.5 3.9 0 6.6 4.1 4.9 7.7-0.9 1.9-2.8 3-4.9 2.7-2.4-0.3-4.6-2-5-3.9-0.1-1.3 0.3-2.2 1.6-3-0.6 3.4 0.2 4.9 3.1 5.6 1.4 0.4 2.7 0 3.5-1.1 0.9-1.1 1.4-2.4 0.8-3.9-1-2.6-5-4.5-7.4-0.6z">
            </path>
          </svg>
        </figure>
        <div className="container position-relative">
          <figure className="position-absolute top-50 start-100 ms-n9 mt-n7 d-none d-md-block">
            <svg className="opacity-5" enableBackground="new 0 0 110.2 91.6">
              <path className="fill-white"
                d="m22 3.4c2.8 0.3 5.7 0.5 8.5 0.9 3.7 0.5 7.4 1 11.1 1.5 8.8 1.4 17.5 2.8 26.3 4.1 5.2 0.8 10.4 1.3 15.5 2 6.6 1 13.1 1.9 19.6 3.1 3.6 0.6 5 2.6 4.9 6.3-0.1 1.7-0.4 3.4-0.6 5-0.4 3.1-0.9 6.3-1.4 9.4-0.7 5-1.3 9.9-2 14.9-0.7 5.2-1.5 10.5-2.3 15.7-0.5 3.5-1.1 7-1.7 10.4-0.5 2.9-1.9 3.9-4.9 3.7-3.4-0.3-6.9-0.8-10.3-1.2-5.8-0.8-11.6-1.7-17.4-2.5-6.8-1-13.7-2-20.5-3.1-7.2-1.1-14.5-2.3-21.7-3.5-3.8-0.6-7.7-1.2-11.5-1.9-3.6-0.6-4.8-2.5-4.3-6.2 0.7-4.8 1.1-9.7 1.8-14.5 0.8-6.2 1.8-12.4 2.6-18.6 0.6-4.4 1.1-8.8 1.6-13.2 0.3-2.6 0.6-5.2 1.1-7.8 0.5-3.1 2.4-4.5 5.6-4.5zm72.5 76c3.1 0 3.8-0.5 4.4-2.7 0.2-0.7 0.3-1.4 0.4-2.1 0.9-6.1 1.9-12.3 2.8-18.4 0.8-5.7 1.6-11.3 2.4-17 0.5-3.7 1-7.4 1.6-11.1 0.3-2.2 0.8-4.3 0.9-6.5 0.3-3.2-1-4.7-4-5.5-1.1-0.3-2.2-0.4-3.3-0.6l-13.2-2.1c-6.4-0.9-12.7-1.6-19.1-2.6-7.7-1.1-15.3-2.5-23-3.6-6.5-0.9-12.8-1.5-19.1-2.2-1.3-0.2-2.7-0.4-4-0.4-2.1 0-3.3 1.1-3.7 3.1-0.5 2.6-0.9 5.3-1.2 7.9-0.6 4.4-1 8.8-1.6 13.3-0.8 6.1-1.8 12.1-2.6 18.2-0.7 5.1-1.2 10.2-1.8 15.4-0.3 2.9 0.5 4.1 3.3 4.6s5.7 1 8.6 1.4c5.9 1 11.8 1.9 17.8 2.9 4.7 0.8 9.5 1.6 14.2 2.3 5.2 0.8 10.3 1.5 15.5 2.2 4.3 0.6 8.5 1.2 12.8 1.8 4.1 0.6 8.4 1.2 11.9 1.7z">
              </path>
              <path className="fill-white"
                d="m2.2 68.7c2.5 0.3 4.8 0.4 7.1 0.8 4.8 0.7 9.6 1.5 14.4 2.3 7.2 1.1 14.4 2.3 21.6 3.4 5.4 0.8 10.9 1.5 16.4 2.3 6.1 0.9 12.1 1.8 18.2 2.7 3.8 0.6 7.7 1 11.5 1.6 3.6 0.5 7.1 1 10.7 1.6 0.6 0.1 1.2 0.3 1.8 0.4 0.8 0.2 1.2 0.6 1.1 1.5v0.8c0 4.5-2.2 6.1-6.5 5.6-3.6-0.4-7.2-1.2-10.9-1.7-5-0.7-10.1-1.3-15.1-2-5.1-0.7-10.2-1.5-15.3-2.3-3.8-0.5-7.6-1-11.3-1.5-5.1-0.7-10.2-1.5-15.3-2.3-3.8-0.5-7.6-0.9-11.3-1.6-4.6-0.8-9.1-1.8-13.7-2.8-3.9-0.9-4.5-3.6-4.1-6.5 0.1-0.8 0.4-1.4 0.7-2.3zm1 1.1c-1.6 3.1-0.6 5.6 2.6 6.6 0.4 0.1 0.8 0.3 1.2 0.3 6.5 1.2 12.9 2.4 19.4 3.4 6.9 1.1 13.9 1.9 20.8 2.9 5.3 0.7 10.6 1.5 15.9 2.3 5.6 0.8 11.2 1.7 16.7 2.5 6.1 0.9 12.3 1.8 18.5 2.5 4.2 0.5 5.6-0.7 5.5-4.8 0-0.2-0.1-0.4-0.1-0.7-0.2-0.1-0.4-0.4-0.7-0.4-33.2-4.7-66.4-9.6-99.8-14.6z">
              </path>
              <path className="fill-white"
                d="m17.4 56c0.3-2.4 0.7-4.9 1-7.3 0.6-3.8 1.2-7.7 1.8-11.5 0.8-4.7 1.6-9.4 2.4-14.2 0.5-2.9 0.9-5.9 1.2-8.8 0.2-2.7 2.5-4 4.7-3.9 2 0.1 4.1 0.5 6.1 0.8 6.1 1 12.3 2 18.4 2.9 5.6 0.9 11.1 1.8 16.7 2.7 5 0.8 9.9 1.5 14.9 2.3 3.5 0.6 7 1.1 10.4 1.8 2.7 0.5 3.7 2 3.4 4.7-0.6 4.8-1.4 9.5-2 14.3-0.8 5.8-1.4 11.6-2.2 17.4-0.6 3.8-1.3 7.6-2 11.4-0.6 2.8-2 3.9-4.8 3.7-2.7-0.2-5.5-0.7-8.2-1.1-5.2-0.7-10.3-1.5-15.5-2.2-5-0.7-9.9-1.5-14.9-2.2-4.1-0.6-8.1-1-12.2-1.6-5.1-0.8-10.2-1.3-15.2-2.7-2.4-0.7-3.6-2-3.7-4.5v-1.9c-0.2 0-0.2 0-0.3-0.1zm1.1-0.2h0.2v1.1c0 3.4 0.8 4.4 4.1 5 2.8 0.5 5.6 0.9 8.4 1.4 2.6 0.4 5.1 0.8 7.7 1.2 5.9 0.8 11.9 1.6 17.8 2.5 3.4 0.5 6.7 0.9 10.1 1.4 3.9 0.6 7.8 1.1 11.7 1.7 2.8 0.4 5.6 1 8.4 1.3 2.6 0.2 3.8-0.8 4.2-3.4 0.2-1.6 0.5-3.2 0.7-4.8 1-6.6 2-13.2 3-19.9 0.6-4.3 1.2-8.5 1.8-12.8 0.2-1.9 0.5-3.8 0.6-5.7 0.1-1.7-0.4-2.2-1.9-2.6-0.3-0.1-0.7-0.2-1-0.2-6.1-1-12.1-2-18.2-3-7.6-1.2-15.2-2.4-22.8-3.6-6.3-1-12.5-2-18.8-3-1.9-0.3-3.9-0.7-5.9-0.8-2.4-0.1-3.4 0.8-3.8 3.1-0.2 1-0.3 2.1-0.4 3.1-0.7 4.8-1.4 9.6-2.2 14.4l-1.8 11.1c-0.7 4.1-1.3 8.3-1.9 12.5z">
              </path>
              <path className="fill-white"
                d="m45.2 78.4c0.6 1.6 1.9 1.9 3.2 2.1 3.4 0.5 6.7 0.9 10.1 1.4 0.5 0.1 1.1-0.1 2.1-0.2-2.5-1.7-5-1.2-7.2-1.8-2.3-0.6-4.7-0.8-7-1.2v-0.5c0.5-0.1 1.1-0.3 1.6-0.2 3.5 0.4 7 0.9 10.5 1.5 0.9 0.1 1.8 0.6 2.5 1 1 0.6 1 1.6-0.1 2.1-0.6 0.3-1.4 0.4-2.1 0.3-4-0.5-7.9-1.1-11.9-1.8-0.7-0.1-1.4-0.8-2-1.3-0.2-0.2 0-0.8 0-1.2 0.1-0.1 0.2-0.2 0.3-0.2z">
              </path>
            </svg>
          </figure>
          <figure className="position-absolute top-100 start-100 mt-n6 ms-9 translate-middle">
            <svg className="opacity-5" enableBackground="new 0 0 128.9 168.8">
              <path className="fill-white"
                d="m70.1 135.1c0.1 1-0.5 1-1.2 0.7-3.3-1.4-6.7-2.8-10-4.2-0.9-0.4-1.7-0.9-2.6-1.1-0.4-0.1-1 0.6-2 1.2 5.3 2 9.5 4.5 13.6 7.7-1.2 3.6-2.4 7.1-3.7 10.8 0.9 0.5 1.9 1.1 2.9 1.6 2.3 1.4 3.5 4.1 2.7 6.5-0.8 2.7-2.8 4.3-5.8 3.8-2.8-0.5-5.5-1.5-8.1-2.5-2.9-1.1-5.8-2.4-8.6-3.9-1.7-0.9-3.3-1.9-4.6-3.3-2.5-2.6-1.5-6.4 1.9-7.7 1.7-0.6 3.7-0.6 5.6-0.8l-1.6-1.6c2.4-0.6 3.7 1 5.3 1.5 1.6 0.6 3.1 1.4 4.6 2.1 1.6 0.8 3.2 1.5 5.1 2.5 0.9-3.3 1.7-6.4 2.6-9.8-4.4-0.9-7.5-4.6-11.8-5-2.3 2.1-2.1 5.6-4.9 7.1 1.6-6 5.2-11.2 7.6-16.9 2.4-5.6 5.2-11.1 8-16.8-5.2-2.7-10.5-5.5-15.8-8.4-5.3-2.8-11.2-4.7-16.1-8.5 2.5-7.9 6.8-14.8 9.9-22.5-3.6-1.9-7.2-3.8-11-5.8 0.5-1.3 0.9-2.6 1.5-3.8 2.9-6.2 5.9-12.3 8.8-18.4 0.6-1.2 1-2.5 1.7-4.1 4.2 0.5 7.5 3 10.8 5.3-0.8 1.4-1.6 2.6-2.2 3.8-2.7 5.5-5.4 11.1-8.1 16.6-0.7 1.4-1.5 2.8-2.3 4.2 0.4 0.8 0.9 1.2 1.7 0.4 0.4-0.4 0.6-0.9 0.8-1.4 3.4-7.1 6.8-14.2 10.3-21.6 0.6 0.2 1.4 0.4 2.1 0.7 8.6 4.2 17.2 8.5 25.8 12.6 7.3 3.4 14.7 6.6 22.1 10 3.2 1.4 6.7 2.2 8.9 5.3l0.3 0.6c-7.6 15.9-15.2 31.8-22.9 47.8-3.6-1.7-7.1-3.4-10.6-5.1-0.5 0.7-0.9 1.3-1.2 1.9-2.4 5.2-4.7 10.5-7.2 15.7-0.5 1-1.5 1.7-2.2 2.5 2.7-6.6 5.3-13.3 7.9-19.8-4.2-2-8.1-3.9-12.1-5.8-2.3 3.3-8.6 16.8-8.9 19.3 4.2 2.4 8.6 4.5 13 6.6zm-35.6-45.2c9.4 4.7 18.7 9.4 27.9 14.1 9.4 4.7 18.7 9.5 28.2 14.3 0.7-1.4 1.4-3 2.2-4.6 6.1-12.9 12.3-25.7 18.4-38.6 0.6-1.2 1-2.5 1.5-3.6-2.8-1.2-5.3-2.1-7.7-3.2-7.4-3.3-14.8-6.4-22.1-9.9-8.3-3.9-16.4-8.1-24.6-12.1-0.7-0.4-1.6-0.5-2.6-0.8-7 14.7-14 29.2-21.2 44.4zm25.7 60.5c0-0.1 0.1-0.1 0.1-0.2-1.3-0.6-2.7-1.4-4-1.9-3-1.2-5.9-2.4-9.2-2.4-2 0-3.4 0.9-4 2.6-0.6 1.5 0 2.7 1.7 4.1 0.4 0.3 0.8 0.7 1.3 0.9l15.3 6.9c0.9 0.4 2.1 0.4 3.1 0.4 2.3 0 3.8-1.5 3.8-3.8 0-1.6-0.6-2.9-2-3.7-2-1-4.1-1.9-6.1-2.9zm-19.5-85.4c3.9-8.2 7.7-16 11.4-23.9-2.5-1.2-4.7-2.3-7.1-3.4-3.7 7.8-7.4 15.5-11.2 23.4 2.4 1.4 4.6 2.6 6.9 3.9z">
              </path>
              <path className="fill-white"
                d="m42.4 139.4c-0.7-0.2-1.3-0.4-2.2-0.6 1.6 2 2.3 4 1.8 6.2-0.7 3.4-2.9 5.2-6.4 4.6-1.4-0.2-2.9-0.7-4.2-1.3-2.4-1.1-4.8-2.3-7.2-3.4-2.1-0.9-4.3-1.8-6.5-2.5-5.1-1.7-6.4-6-2.9-10.2 1.4-1.6 3.2-2.2 5.1-1.8 2.1 0.4 4.1 1.1 6.4 1.7 0.8-1.7 1.7-3.5 2.5-5.3 0.7-1.4 1.3-2.9 2.1-4.3 1.1-2 1.6-2.2 3.5-1.2 3.2 1.5 6.2 3.2 9.4 4.8 1 0.5 1.8 1.5 3.5 0.4-5.1-2.4-9.9-4.7-14.8-7.1 3.5-7.4 6.8-14.4 10.3-21.6 5.3 2.7 10.8 4.4 15.3 8.2-0.2 0.6-0.2 1.1-0.4 1.6-2.3 4.9-4.5 9.8-6.8 14.7-0.7 1.5-1.8 2.9-2.7 4.3-0.2 0.4-0.5 0.7-0.7 1-1.7 3.9-3.4 7.8-5.1 11.8zm1.1-39.4c-3.1 6.4-6 12.5-8.9 18.6 4.7 2.2 9 4.3 13.4 6.4 2.8-6.4 5.5-12.7 8.2-18.9-4.4-2.1-8.4-4.1-12.7-6.1zm-15.4 44.9c0 0.1-0.1 0.2-0.1 0.3 2.4 0.9 4.7 2 7.1 2.7 1.5 0.5 3.2 0.5 4.3-1.1 1.7-2.4 1.3-5-1-6.7-0.9-0.7-1.9-1.4-3-1.8-4.5-2-9-3.9-13.5-5.8-0.7-0.3-1.4-0.4-2.2-0.4-2.8-0.2-4.3 0.8-5.1 3.7-0.7 2.3 0 3.6 2.9 4.8 3.5 1.4 7.1 2.8 10.6 4.3zm17.5-16.3c-4.4-2.1-8.5-4-12.8-6.1-1.6 2.9-3 5.7-4.7 8.7 4.6 2.2 8.9 4.2 13.2 6.3 1.4-2.9 2.8-5.8 4.3-8.9z">
              </path>
              <path className="fill-white"
                d="m14.5 106.7c-0.8 1.3-1.5 2.5-2.2 3.7-4.5-0.9-7.5-7.4-4.8-12.4 2.4-4.4 5.7-7.9 11-8.4 4.1-8.6 8.2-17.1 12.4-26 3 1.2 6 2.6 8.9 4.4-2.9 7.9-6.3 15.3-11 22.2 2-7.7 6.5-14.3 9.2-21.7-2.1-1-4.1-2-6.4-3.1-4.1 7.2-6.9 14.9-11.2 22.2 1 0.6 1.7 1.1 2.5 1.5 1.5 0.8 3.1 1.5 4.5 2.4 0.7 0.4 1.9 0.8 0.9 2.2-0.2 0.3 0.7 1.4 1 2.1 2.3 4.5 2.1 8.9-0.6 13-2.4 3.8-6.3 5-11 5.3 0.3-2.1 0.5-3.8 0.8-5.7 2.9-0.7 5.7-1.7 6.8-4.7 0.6-1.6 0.8-3.3 0-5-1.5-3.1-6.9-4.7-10-2.9-3.3 2-3.8 6.6-0.8 10.9zm-3.4 1.9c1.2-1.6 1.2-1.6 0.4-3.3-2.6-6.1 1.5-12.5 7.7-11.8 1.9 0.2 3.9 1.1 5.5 2.2 2.8 1.8 3.5 5 2.4 8.2-1 2.7-2.7 4.5-5.5 5.3-1.5 0.4-2.2 1.2-1.3 2.7 6-0.9 9.3-4.9 9.1-11-0.2-5.1-4.5-9.5-9.7-9.7s-8.2 3.1-10.5 7.1c-2.1 3.6-1.2 7.1 1.9 10.3z">
              </path>
              <path className="fill-white"
                d="m90.8 148.4c-0.5-4.4 0.4-5.9 4.2-6.8 1.7-0.4 2.8-1.4 3.1-3.1 0.5-2.6 0.1-4.9-2.2-6.5-3.9-2.9-9.9 0.2-11 3.9-0.6 1.8 0 3 2.3 5.4-0.7 1.4-1.4 2.8-2.1 4.3-3.3-1-5.1-4.3-5-9 0.2-6.8 3.5-10.5 11.2-12.4 4-8.4 8.1-16.9 12.3-25.8 3.5 1.7 7.1 2.8 9.9 5.2-3.5 7.4-6.9 14.4-10.3 21.5-0.2 0.3-0.5 0.5-1.2 1.2 0.1-3.3 1.7-5.4 2.8-7.7 1.1-2.4 2.3-4.8 3.4-7.2s2.3-4.8 3.5-7.3c-2.6-1.2-4.9-2.3-7.4-3.6-3.7 7.8-7.3 15.3-11.1 23.3 1.2 0.6 2.6 1.4 4.1 1.9 3.2 1.1 4.8 3.2 5.6 6.5 1.2 5.3 0.4 9.9-3.7 13.7-2.3 2.1-5.2 2.9-8.4 2.5zm1.7-1.7c5.1-0.6 8.6-4 9.3-9 0.6-5.1-1.8-9.3-6.5-11.1-4-1.6-9-0.1-11.3 3.4-2.4 3.6-3.4 9.4 0.3 13.7 0.9-1 1.2-1.9 0.2-3-1.2-1.4-1.8-3.1-1.2-5 1.6-5.1 8.3-8.5 13.5-5.1 2.6 1.7 3.4 4.3 3.1 7.2-0.3 3.1-1.8 4.8-4.9 5.4-2 0.4-2.7 1.4-2.5 3.5z">
              </path>
              <path className="fill-white"
                d="m125.7 32.2c-15.4-7.5-30.9-15.1-46.3-22.7-0.1-0.1-0.1-0.4-0.1-0.8 2.1-0.6 3.5 1.1 5.1 1.7 1.7 0.6 3.3 1.5 5.2 2.5 1-2.1 1.9-4.1 3-6.2 1.5 0.5 2.8 0.9 4.3 1.4-1.1 2.4-2.1 4.3-3.2 6.6 5.6 3.3 11.3 5.7 17 8.4 1-2.5 1.8-4.6 2.6-6.7 2.1-0.4 3.4 0.8 5 2.1-0.8 2.3-1.7 4.6-2.7 7.3 2.6 1.2 5.2 2.4 7.7 3.7 1.1 0.5 2.5 1 2.2 2.7h0.2zm-10.9-7c0.3-1.2 0.6-2.1 0.9-3.1 0.2-1 0.4-2 0.6-2.9-1.1-1-2-1-2.5 0.4-0.5 1.5-0.9 3.1-1.4 4.8 1 0.3 1.6 0.5 2.4 0.8zm-20.4-16.6c-1.9 1-2.1 2.7-2.7 4.2-0.1 0.3 0.3 0.8 0.6 1.6 1.5-1.8 2.2-3.5 2.1-5.8z">
              </path>
              <path className="fill-white"
                d="m125.6 32.3c1 0.2 1.5 0.7 1 1.8-0.7 1.3-1.6 2.5-2.2 3.9-3.7 8-7.4 16-11 24-0.2 0.5-0.3 1-0.4 1.5-7.1 0.1-46.1-16.6-50.4-21.5 0.9-1 1.7-0.1 2.5 0.3 6.1 3 12.1 6.1 18.3 9.1 9.2 4.4 18.7 7.9 28.6 11 4.2-10.3 8.1-20.6 13.9-30-0.2-0.2-0.3-0.1-0.3-0.1z">
              </path>
              <path className="fill-white"
                d="m108.7 50.7c-0.7 1.7-1.3 3.1-1.8 4.2-7.2-3.4-14-6.7-20.9-10-3-1.4-6-2.8-8.9-4.3-1.8-0.9-2-1.6-1.2-3.3 0.8-1.6 1.6-2 3.3-1.2 2.5 1.1 5 2.4 7.5 3.5 5.7 2.7 11.3 5.4 17 8.1 1.7 1 3.2 2 5 3zm-2.6 1.9c0.9-1.3 0.3-2-1-2.6-8.4-4-16.9-8-25.3-12-0.5-0.2-1-0.4-1.5-0.4-0.3 0-0.6 0.5-1.2 1.1 9.7 4.7 19.3 9.3 29 13.9z">
              </path>
              <path className="fill-white"
                d="m105.8 96.6c3.2 1.7 6 3.3 9.4 5.1-2.8 0.1-6.1-1.3-10.5-4.1 0.2-0.8 0.4-1.7 0.7-2.6 3.2-7.4 6.5-14.8 9.8-22.1 0.1-0.3 0.3-0.6 0.4-0.9 1.1-2.1 1.6-2.4 3.7-1.4 2.7 1.3 5.4 2.9 7.9 4.3-0.4 3.1-10 23-11.9 25-0.1 0-0.2 0-0.3-0.1-0.1 0-0.1-0.2-0.1-0.3 0-0.2 0.1-0.4 0.1-0.6 0.1-0.3 0.2-0.6 0.4-0.9 3.4-7.3 6.9-14.6 10.3-21.9 0-0.1 0-0.2-0.1-0.5-2.5-1.2-5.1-2.4-8-3.8-4.5 7.9-7 16.7-11.8 24.8z">
              </path>
              <path className="fill-white"
                d="m78.2 10.3c-4.9 9.4-9.8 18.9-14.7 28.3-1.3-0.3-1.1-1-0.7-1.7 2.7-5.5 5.4-11.1 8.2-16.5 1.6-3.1 3.5-6 5.3-9 0.3-0.6 0.9-1 1.4-1.5 0.1 0.1 0.3 0.2 0.5 0.4z">
              </path>
              <path className="fill-white"
                d="m114.3 35.9c-1-0.3-1.6-0.6-2.4-0.7-2-0.5-3.7 0.8-4.2 2.9-0.3 1.5 0.2 2.5 1.4 3 1.4 0.6 3.3 0.4 3.9-0.8 0.5-1 0.4-2.2 0.6-3.2 1.3 0.7 1.3 2.8-0.2 4.4-1.3 1.4-4.2 1.6-5.8 0.4-1.3-1-1.5-3.6-0.5-5.6 0.9-1.6 2.1-2.3 3.6-2.4 2-0.2 2.9 0.3 3.6 2z">
              </path>
              <path className="fill-white"
                d="m89.6 21.7c-1-0.5-1.7-0.9-2.4-1.1-2.4-0.9-4.9 0.2-5.8 2.5-0.8 2 0 4.2 1.8 5.2 2 1 5.2 0.5 6-1.3 0.5-1.1 0.2-2.5 0.3-3.7 1.8 1.4 2 3.5 0.6 5.2-1.8 2.1-5.8 2.5-8.2 0.9-2.2-1.5-3.1-4.9-1.8-7.4 1.4-2.6 4.9-4 7.6-3 1 0.4 1.8 1 1.9 2.7z">
              </path>
              <path className="fill-white"
                d="m86.6 99.8c-4.4-2.1-8.8-4.2-13.4-6.4 1.6-2 4.2-2 6.3-2.9 2.1-1 4.3-1.8 5.8-3.5-0.1-1.9-1.3-2.2-2.5-1.9-3 0.7-6 1.4-8.8 2.6-8 3.6-7.5 3-13.9-0.3-2.9-1.5-5.8-3.1-8.7-4.7-1.9-1.1-2.1-1.6-1.2-3.6 2.2-4.7 4.4-9.4 6.7-14.1 1.4-2.8 2.8-3.1 6-2.2 4.3 1.3 8.1 3.6 12 5.7 5 2.7 10.3 5.1 15.4 7.6 1.4 0.7 2.9 1.4 4.3 2.2 1.9 1.1 2.3 1.5 1.4 3.5-1.7 3.9-3.6 7.7-5.6 11.4-0.9 2.2-2.4 4.3-3.8 6.6zm-0.6-2.3c3.2-5.9 7.8-10.7 8.9-17.7-1.1-0.5-2.1-1-3.1-1.5-6.3-3.1-12.6-6.2-18.9-9.2-3.2-1.6-6.5-3.1-9.8-4.5-2.9-1.2-3.8-0.8-5.2 2.1-1.7 3.4-3.4 6.8-5 10.3-0.7 1.4-1.1 2.9-1.7 4.5 4.9 2.3 9.5 4.5 14.1 6.7 1.5 0.7 2.9 0.4 4.3-0.3 2.3-1 4.6-2.1 7-2.9 2.1-0.7 4.3-1.2 6.5-1.5 2-0.2 3.4 0.8 3.8 2.2 0.4 1.3-0.4 3.1-2 4s-3.5 1.6-5.2 2.4c-0.7 0.3-1.3 0.7-2.3 1.2 3 1.5 5.6 2.7 8.6 4.2z">
              </path>
            </svg>
          </figure>
          <div className="row">
            <div className="col-lg-6 mx-auto text-center mb-5">
              <p className="mt-3 text-white">Satyam Public School, built specifically for the education centers which is
                dedicated to teaching and involving learners.</p>
              <ul className="nav justify-content-center justify-content-center text-primary-hover mt-3 mt-md-0">
                <li className="nav-item"><a className="nav-link text-white" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#course">Course</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#gallery">Gallery</a></li>

                <li className="nav-item"><a className="nav-link text-white" href="
                #contactus">Contact Us</a></li>
              </ul>
              <div className="text-white text-primary-hover mt-3"> Copyrights <a href="#" className="text-reset">© {year} Satyam Public School</a>.
                All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}