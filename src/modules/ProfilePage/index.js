import React from "react";
import ExtendText from "./ExtendText";

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen h-full md:px-32 lg:px-64">
      <div className="bg-pink-600 py-32 hidden lg:block"></div>
      <div className="bg-pink-600 border-2 border-pink-600 lg:bg-transparent lg:px-10 flex justify-center flex-col lg:rounded">
        <div className="flex justify-center lg:justify-start">
          <img
            className="rounded-full avatar"
            width={200}
            height={200}
            src="https://i.pravatar.cc/200"
            alt="avatar"
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:justify-between">
          <div className="text-white lg:text-pink-600 text-center lg:text-left my-5 lg:w-2/4">
            <p className="text-2xl font-extrabold">Multi Indah Teknik</p>
            <p className="font-semibold">Serving since March 2017 | Verified</p>
          </div>
          <div className="flex flex-row justify-center lg:justify-end items-center w-full text-white text-center lg:text-right my-5 lg:text-pink-600 lg:w-2/4 xl:w-2/5">
            <div className="px-2 border-r-4 border-pink-200">
              <p className="font-extrabold">1,322</p>
              <p>Jobs Completed</p>
            </div>
            <div className="px-2 border-r-4 border-pink-200">
              <p className="font-extrabold">
                <span role="img" aria-label="star">
                  ⭐
                </span>
                4.3
              </p>
              <p>Ratings</p>
            </div>
            <div className="px-2">
              <p className="font-extrabold">805</p>
              <p>Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row my-10">
        <div className="lg:w-2/3 flex flex-col lg:mr-1">
          <div className="p-5 text-pink-600 lg:border-2 border-pink-600 mb-2 lg:rounded">
            <p className="font-1xl font-extrabold">About</p>
            <ExtendText limit={200}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ea commodo consequat. Duis aute irure dolor in
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ea commodo consequat. Duis aute irure dolor in
            </ExtendText>
          </div>
          <hr className="lg:hidden" />
          <div className="p-5 text-pink-600 lg:border-2 border-pink-600 mt-2 lg:rounded">
            <p className="font-1xl font-extrabold">Gallery</p>
            <div className="flex flex-row justify-between items-center">
              <div>
                <img src="https://i.pravatar.cc/150" alt="gallery"></img>
              </div>
              <div>
                <img src="https://i.pravatar.cc/150" alt="gallery"></img>
              </div>
              <div className="hidden md:block">
                <img src="https://i.pravatar.cc/150" alt="gallery"></img>
              </div>
              <div className="view_more">
                <img
                  className="cursor-pointer"
                  src="https://i.pravatar.cc/150"
                  alt="gallery"
                ></img>
                <div className="font-extrabold text-sm">+12 view all</div>
              </div>
            </div>
          </div>
          <hr className="lg:hidden" />
        </div>
        <div className="hidden md:block lg:w-1/3 p-5 text-pink-600 lg:ml-1 lg:border-2 border-pink-600 text-center lg:text-left lg:rounded">
          <p className="font-extrabold">Need this service?</p>
          <p className="my-2">
            Hire best service providers for your everyday needs from Kaodim.
          </p>
          <button className="w-full bg-pink-500 outline-none focus:outline-none py-4 text-white font-extrabold my-1 hover:bg-white hover:text-pink-600 border border-transparent hover:border-pink-600">
            Submit a request
          </button>
          <ul>
            <li> ✓ Free insurance coverage</li>
            <li> ✓ Enjoy re-service or your money back if unsatisfactory</li>
            <li> ✓ Lowest price guaranteed</li>
          </ul>
          <p className="text-sm text-center mt-1">Terms & conditions apply</p>
        </div>
      </div>
      <hr className="lg:hidden" />

      <div className="w-full flex flex-col lg:flex-row mb-32 md:mb-10">
        <div className="lg:border-2 border-pink-600 lg:w-2/3 py-5 lg:mr-1 lg:rounded">
          <p className="font-1xl font-extrabold text-pink-600 px-5">
            Ratings and Reviews
          </p>
          <div className="flex flex-col lg:flex-row my-2 px-2">
            <div className="lg:w-3/4 w-full">
              <div className="flex flex-col">
                <div className="flex flex-row my-1">
                  <p className="w-1/12">5</p>
                  <div className="flex flex-row bg-pink-400 border-2 border-pink-600 w-11/12">
                    <div className="w-1/2 border-r-2 py-2 border-pink-600"></div>
                    <div className="w-1/2 border-l-2 py-2 border-pink-600"></div>
                  </div>
                </div>
                <div className="flex flex-row my-1">
                  <p className="w-1/12">4</p>
                  <div className="flex flex-row bg-pink-400 border-2 border-pink-600 w-11/12">
                    <div className="w-3/5 border-r-2 py-2 border-pink-600"></div>
                    <div className="w-2/5 border-l-2 py-2 border-pink-600"></div>
                  </div>
                </div>
                <div className="flex flex-row my-1">
                  <p className="w-1/12">3</p>
                  <div className="flex flex-row bg-pink-400 border-2 border-pink-600 w-11/12">
                    <div className="w-3/4 border-r-2 py-2 border-pink-600"></div>
                    <div className="w-1/4 border-l-2 py-2 border-pink-600"></div>
                  </div>
                </div>
                <div className="flex flex-row my-1">
                  <p className="w-1/12">2</p>
                  <div className="flex flex-row bg-pink-400 border-2 border-pink-600 w-11/12">
                    <div className="w-3/5 border-r-2 py-2 border-pink-600"></div>
                    <div className="w-2/5 border-l-2 py-2 border-pink-600"></div>
                  </div>
                </div>
                <div className="flex flex-row my-1">
                  <p className="w-1/12">1</p>
                  <div className="flex fl1ex-row bg-pink-400 border-2 border-pink-600 w-11/12">
                    <div className="w-1/5 border-r-2 py-2 border-pink-600"></div>
                    <div className="w-4/5 border-l-2 py-2 border-pink-600"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 w-full px-1 flex justify-center items-center">
              <div className="text-center">
                <p className="text-3xl">4.3</p>
                <span role="img" aria-label="star">
                  ⭐
                </span>
                <span role="img" aria-label="star">
                  ⭐
                </span>
                <span role="img" aria-label="star">
                  ⭐
                </span>
                <span role="img" aria-label="star">
                  ⭐
                </span>
                <span role="img" aria-label="star">
                  ⭐
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="font-1xl font-extrabold text-pink-600 px-5">
              Compliments
            </p>
            <div className="flex flex-col lg:flex-row flex-wrap px-5 my-2 justify-around">
              <div className="border-2 rounded shadow border-pink-600 lg:w-2/5 w-full my-1">
                <div className="p-3 text-pink-600">
                  <p className="font-2xl font-extrabold">Reasonable Price</p>
                  <p>92 Compliments</p>
                </div>
              </div>
              <div className="border-2 rounded shadow border-pink-600 lg:w-2/5 w-full my-1">
                <div className="p-3 text-pink-600">
                  <p className="font-2xl font-extrabold">Reasonable Price</p>
                  <p>92 Compliments</p>
                </div>
              </div>
              <div className="border-2 rounded shadow border-pink-600 lg:w-2/5 w-full my-1">
                <div className="p-3 text-pink-600">
                  <p className="font-2xl font-extrabold">Reasonable Price</p>
                  <p>92 Compliments</p>
                </div>
              </div>
              <div className="border-2 rounded shadow border-pink-600 lg:w-2/5 w-full my-1">
                <div className="p-3 text-pink-600">
                  <p className="font-2xl font-extrabold">Reasonable Price</p>
                  <p>92 Compliments</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-1xl font-extrabold text-pink-600 px-5">
                Reviews
              </p>
              <div className="flex flex-col px-5">
                <div className="flex flex-row py-4 border-t-4 border-pink-600">
                  <div>
                    <img
                      className="rounded-full"
                      width={300}
                      height={300}
                      src="https://i.pravatar.cc/300"
                      alt="avatar"
                    />
                  </div>
                  <div className="ml-5 text-pink-600">
                    <div className="flex flex-col md:flex-row md:justify-start md:items-center">
                      <div>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                      </div>
                      <span className="md:mx-2 font-extrabold">
                        Miley Cyrus
                      </span>
                      <span className="text-sm">3 months ago</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta praesentium neque voluptates at possimus. Numquam
                      minus quasi accusamus eligendi nesciunt harum fugiat. Modi
                      facere error doloremque eos tempora adipisci pariatur.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row py-4 border-t-4 border-pink-600">
                  <div>
                    <img
                      className="rounded-full"
                      width={300}
                      height={300}
                      src="https://i.pravatar.cc/300"
                      alt="avatar"
                    />
                  </div>
                  <div className="ml-5 text-pink-600">
                    <div className="flex flex-col md:flex-row md:justify-start md:items-center">
                      <div>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                      </div>
                      <span className="md:mx-2 font-extrabold">
                        Miley Cyrus
                      </span>
                      <span className="text-sm">3 months ago</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta praesentium neque voluptates at possimus. Numquam
                      minus quasi accusamus eligendi nesciunt harum fugiat. Modi
                      facere error doloremque eos tempora adipisci pariatur.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row py-4 border-t-4 border-pink-600">
                  <div>
                    <img
                      className="rounded-full"
                      width={300}
                      height={300}
                      src="https://i.pravatar.cc/300"
                      alt="avatar"
                    />
                  </div>
                  <div className="ml-5 text-pink-600">
                    <div className="flex flex-col md:flex-row md:justify-start md:items-center">
                      <div>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                      </div>
                      <span className="md:mx-2 font-extrabold">
                        Miley Cyrus
                      </span>
                      <span className="text-sm">3 months ago</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta praesentium neque voluptates at possimus. Numquam
                      minus quasi accusamus eligendi nesciunt harum fugiat. Modi
                      facere error doloremque eos tempora adipisci pariatur.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row py-4 border-t-4 border-pink-600">
                  <button className="w-full bg-pink-500 outline-none focus:outline-none py-4 text-white font-extrabold my-1 hover:bg-white hover:text-pink-600 border border-transparent hover:border-pink-600">
                    Load more reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="lg:hidden" />
        <div className="flex flex-col w-full lg:w-1/3 lg:ml-1">
          <div className="lg:border-2 border-pink-600 py-5 lg:rounded">
            <div className="mb-5 text-pink-600 px-5">
              <p className="font-1xl font-extrabold">Contact Person</p>
              <p>Ahmad Faris</p>
            </div>
            <div className="mb-5 text-pink-600 px-5">
              <p className="font-1xl font-extrabold">Company Address</p>
              <p>
                Mutiara Serdang, 6-31, Jalan Serdang Raya, 43300, Seri
                Kembangan, Selangor
              </p>
            </div>
            <div className="mb-5 text-pink-600 px-5">
              <p className="font-1xl font-extrabold">Registration No.</p>
              <p>002503879-H</p>
            </div>
          </div>
          <hr className="lg:hidden" />
          <div className="px-5 my-5">
            <p className="font-1xl font-extrabold text-pink-600">
              Related Services
            </p>
            <div className="flex flex-col text-pink-600">
              <div className="flex flex-row w-full my-5">
                <div className="mr-2">
                  <canvas
                    className="bg-pink-600 "
                    width={50}
                    height={50}
                  ></canvas>
                </div>
                <div>
                  <p className="font-semibold">Aircond Services</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                </div>
              </div>
              <div className="flex flex-row w-full my-5">
                <div className="mr-2">
                  <canvas
                    className="bg-pink-600 "
                    width={50}
                    height={50}
                  ></canvas>
                </div>
                <div>
                  <p className="font-semibold">Plumbing Services</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 p-5 bg-pink-600 w-full text-white mt-20 md:hidden">
        <p className="font-extrabold">Need this service?</p>
        <button className="w-full bg-pink-500 outline-none focus:outline-none py-4 text-white font-extrabold my-1 hover:bg-white hover:text-pink-600 border border-transparent hover:border-pink-600">
          Submit a request
        </button>
        <p className="text-sm text-center mt-1">Terms & conditions apply</p>
      </div>
    </div>
  );
};

export default ProfilePage;
