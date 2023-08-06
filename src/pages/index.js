import Image from "next/image";
import profilePicture from "../../public/images/arga.jpeg";
import PHP from "../../public/images/logos/php.png";
import go from "../../public/images/logos/go.png";
import js from "../../public/images/logos/js.png";
import py from "../../public/images/logos/python.png";
import java from "../../public/images/logos/java.png";

export default function Home() {
  return (
    <main className="bg-[#F9F6EE]">
      <nav className="bg-[#7FB3D5] mt-0 fixed w-full z-10 top-0">
        <div className="w-6/12 mx-auto flex">
          <div className="w-6/12">
            <ul className={`flex py-4 justify-around font-roboto`}>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>SKILLS</li>
              <li>PROJECTS</li>
              <li>CONTACTS</li>
            </ul>
          </div>
          <div className="w-6/12 flex justify-end pr-8 my-auto">
            <a href="#" className="hover:text-red-500">
              LOGO
            </a>
          </div>
        </div>
      </nav>

      <section className="w-6/12 flex mx-auto h-screen" id="home">
        <div className="flex my-auto">
          <div>
            <Image
              src={profilePicture}
              width={200}
              className="rounded-full"
              alt="Picture of the author"
            />
          </div>
          <div className="ml-5 w-10/12 border-l-[12px] border-l-[#7FB3D5] pl-2 py-1 my-auto">
            <h1 className="text-5xl font-exo font-bold tracking-widest">
              ARGA SATYA MULYONO
            </h1>
            <h2 className="text-xl font-montserrat w-8/12">
              A human who wants to become a proficient programmer soon. Wish me
              Luck!
            </h2>
          </div>
        </div>
      </section>

      <section className="w-6/12 flex mx-auto h-screen" id="about">
        <div className="w-full my-auto pb-40 mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-exo mx-auto text-center inline-block border-b-[12px] border-b-[#7FB3D5]">
              ABOUT ME
            </h1>
          </div>
          <div className="w-10/12 mx-auto mt-28">
            <h2 className="text-3xl font-montserrat font-semibold">
              Hello, I am Arga Satya Mulyono.
            </h2>
            <p className="font-montserrat text-lg w-10/12 mt-2">
              A fresh graduate who is exploring Backe-End. This portfolio
              contains my projects and developments. I am passionate about
              contributing to software development. dan seterusnya
            </p>
          </div>
        </div>
      </section>

      <section className="w-6/12 flex mx-auto h-screen" id="about">
        <div className="w-full my-auto pb-40 mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-exo mx-auto text-center inline-block border-b-[12px] border-b-[#7FB3D5]">
              SKILLS
            </h1>
          </div>
          <div className="w-11/12 mx-auto mt-28 grid grid-cols-4 gap-4">
            <div className="text-center flex flex-col justify-between h-52 py-4 px-4 mx-auto rounded-lg shadow-2xl grayscale">
              <Image src={PHP} width={150} alt="Image" className="my-auto" />
              {/* <p className="text-xl font-montserrat">PHP</p> */}
            </div>
            <div className="text-center flex flex-col justify-between h-52 py-4 px-4 mx-auto rounded-lg shadow-2xl grayscale">
              <Image src={go} width={150} alt="Image" className="my-auto" />
              {/* <p className="text-xl font-montserrat">GOLANG</p> */}
            </div>
            <div className="text-center flex flex-col justify-between h-52 py-4 px-4 mx-auto rounded-lg shadow-2xl grayscale">
              <Image src={js} width={150} alt="Image" className="my-auto" />
              {/* <p className="text-xl font-montserrat">JavaScript</p> */}
            </div>
            <div className="text-center flex flex-col justify-between h-52 py-4 px-4 mx-auto rounded-lg shadow-2xl grayscale">
              <Image src={py} width={150} alt="Image" className="my-auto" />
              {/* <p className="text-xl font-montserrat">JavaScript</p> */}
            </div>
            <div className="text-center flex flex-col justify-between h-52 py-4 px-4 mx-auto rounded-lg shadow-2xl grayscale">
              <Image src={java} width={150} alt="Image" className="my-auto" />
              {/* <p className="text-xl font-montserrat">JavaScript</p> */}
            </div>
          </div>
        </div>
      </section>

      <section className="w-6/12 flex mx-auto h-screen" id="about">
        <div className="w-full my-auto mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-exo mx-auto text-center inline-block border-b-[12px] border-b-[#7FB3D5]">
              PROJECTS
            </h1>
          </div>
          <div className="mt-20 flex justify-evenly">
            <div class="w-3/12 bg-white border border-gray-200 rounded-lg shadow">
              <Image
                src={java}
                alt="project-image"
                className="p-2 border-b-2"
              />

              <div class="p-2">
                <h5 class="mb-2 text-xl font-montserrat font-bold tracking-tight text-gray-900 ">
                  Mae Kos
                </h5>

                <p class="mb-3 font-montserrat text-gray-700 ">
                  Project manajemen pemesanan kamar kos, dibuat menggunakan
                  Laravel, MySQL, InertiaJS.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center   rounded-lg hover:bg-[#7FB3D5] focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Learn More
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-3/12 bg-white border border-gray-200 rounded-lg shadow">
              <Image
                src={java}
                alt="project-image"
                className="p-2 border-b-2"
              />

              <div class="p-2">
                <h5 class="mb-2 text-xl font-montserrat font-bold tracking-tight text-gray-900 ">
                  Mae Kos
                </h5>

                <p class="mb-3 font-montserrat text-gray-700 ">
                  Project manajemen pemesanan kamar kos, dibuat menggunakan
                  Laravel, MySQL, InertiaJS.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center   rounded-lg hover:bg-[#7FB3D5] focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Learn More
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-3/12 bg-white border border-gray-200 rounded-lg shadow">
              <Image
                src={java}
                alt="project-image"
                className="p-2 border-b-2"
              />

              <div class="p-2">
                <h5 class="mb-2 text-xl font-montserrat font-bold tracking-tight text-gray-900 ">
                  Mae Kos
                </h5>

                <p class="mb-3 font-montserrat text-gray-700 ">
                  Project manajemen pemesanan kamar kos, dibuat menggunakan
                  Laravel, MySQL, InertiaJS.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center   rounded-lg hover:bg-[#7FB3D5] focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Learn More
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <a href="#" className="text-lg flex mt-10 justify-center">
            See More
            <svg
              className="w-4 h-4 ml-2 my-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </section>

      <section className="w-6/12 flex mx-auto h-screen" id="about">
        <div className="w-full my-auto pb-40 mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-exo mx-auto text-center inline-block border-b-[12px] border-b-[#7FB3D5]">
              CONTACTS
            </h1>
          </div>
          <div className=""></div>
        </div>
      </section>
    </main>
  );
}
