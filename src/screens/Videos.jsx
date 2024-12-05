import ReactPlayer from "react-player/youtube";

export const Videos = () => {
  return (
    <section className=" mx-3 md:mx-40 mb-20">
      <div className="grid gap-4">
        <div className=" rounded-lg bg-gray-950 flex justify-center">
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
        <div className="grid grid-cols-5 gap-4">
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
