import ReactPlayer from "react-player/youtube";
import { data } from "../data/data.js";

export const Videos = () => {
  const dataService = data.videos;

  return (
    <section className=" mx-3 md:mx-40 mb-20 w-fit">
      <div className="grid gap-4">
        <div className=" rounded-lg bg-gray-950 flex justify-center max-w-full min-w-56">
          {/* <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
            alt=""
          /> */}
          <ReactPlayer
            className=" h-auto max-w-full rounded-lg"
            url={"https://www.youtube.com/watch?v=9RdrIkmfMh0"}
            playing={false}
            loop
            height={400}
            width={900}
          />
        </div>
        <div className="grid sm:grid-cols-5 sm:h-52 grid-cols-2 gap-4">
          {dataService.map((e, index) => {
            return(
            <div key={index}>
              <ReactPlayer
                className=" h-auto max-w-full rounded-lg"
                url={e}
                playing={false}
                height={400}
                width={900}
                onPlay={() => window.location.href = e}
                playIcon={false}
              />
            </div>);
          },)}
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

{
  /* <section className=" m-5 ">
  <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/src/assets/evento-2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/src/assets/evento-2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/src/assets/evento-2.jpg"
          alt=""
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/src/assets/logo.jpg"
          alt=""
        />
      </div>
      <div>
      <ReactPlayer
      className=" max-h-52 max-w-52"

      url={"https://www.youtube.com/watch?v=9RdrIkmfMh0"}
      playing={false}
      loop
      onProgress={true}
    />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/src/assets/evento-2.jpg"
          alt=""
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/src/assets/evento-2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/src/assets/evento-2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/src/assets/evento-2.jpg"
          alt=""
        />
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/src/assets/evento-2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/src/assets/evento-2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/src/assets/evento-2.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</section> */
}
